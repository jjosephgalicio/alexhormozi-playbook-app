import { el, svgHost } from '../util.js';
import { BOOKS } from '../data/content.js';
import { renderConceptListItem } from '../components/card.js';
import { coverSVG } from '../components/cover.js';
import { buildConceptScript } from '../tts.js';

// One topic (book): hero + status filters + its modules and concepts.
export function renderBook({ store, tts, param }) {
  const book = BOOKS.find(b => b.id === param);
  if (!book) {
    return el('section', { class: 'card' },
      el('h2', { class: 'serif' }, 'Topic not found'),
      el('a', { href: '#/library', class: 'btn' }, 'Back to topics'));
  }

  let filter = 'all';
  const matches = (c) => {
    if (filter === 'learned' && !store.isLearned(c.id)) return false;
    if (filter === 'unlearned' && store.isLearned(c.id)) return false;
    if (filter === 'bookmarked' && !store.isBookmarked(c.id)) return false;
    return true;
  };

  const allConcepts = book.modules.flatMap(m => m.concepts);
  const total = allConcepts.length;
  const learned = allConcepts.filter(c => store.isLearned(c.id)).length;

  const hero = el('div', { class: 'card cod book-hero' },
    svgHost('thumb', coverSVG(book.modules[0].id, book.id)),
    el('div', { class: 'cod-body' },
      el('div', { class: 'cod-eyebrow' }, `${book.modules.length} modules · ${learned}/${total} learned`),
      el('div', { class: 'cod-title' }, book.title),
      el('div', { class: 'cod-hook' }, book.subtitle || book.tagline)));

  const body = el('div', { class: 'lib-body' });
  const playAllBtn = (tts && tts.supported)
    ? el('button', { class: 'listen-btn playall', onclick: () => {
        const items = allConcepts.filter(matches)
          .map(c => ({ conceptId: c.id, title: c.title, segments: buildConceptScript(c) }));
        if (items.length) tts.play(items);
      } }, el('span', { class: 'listen-ico', 'aria-hidden': 'true' }, '▶'), 'Listen to all')
    : null;

  function paint() {
    body.replaceChildren();
    let shown = 0;
    for (const mod of book.modules) {
      const items = mod.concepts.filter(matches);
      if (!items.length) continue;
      shown += items.length;
      body.append(el('div', { class: 'mod-head' },
        el('h3', {}, mod.title),
        el('div', { class: 'mod-summary' }, mod.summary)));
      for (const c of items) {
        body.append(renderConceptListItem(c, mod.id,
          { learned: store.isLearned(c.id), bookmarked: store.isBookmarked(c.id) }));
      }
    }
    if (!shown) body.append(el('p', { class: 'empty' }, 'Nothing matches this filter.'));
    if (playAllBtn) {
      playAllBtn.lastChild.textContent = shown ? `Listen to all ${shown}` : 'Nothing to play';
      playAllBtn.disabled = !shown;
    }
  }

  const FILTERS = [['all', 'All'], ['unlearned', 'To learn'], ['learned', 'Learned'], ['bookmarked', 'Saved']];
  const chips = el('div', { class: 'chips' });
  for (const [key, label] of FILTERS) {
    const chip = el('button', {
      class: 'chip' + (key === 'all' ? ' on' : ''),
      onclick: () => {
        filter = key;
        chips.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
        chip.classList.add('on');
        paint();
      },
    }, label);
    chips.append(chip);
  }

  const root = el('section', { class: 'book' },
    el('a', { href: '#/library', class: 'crumb-link' }, '‹ All topics'),
    hero, chips, playAllBtn, body);
  paint();
  return root;
}
