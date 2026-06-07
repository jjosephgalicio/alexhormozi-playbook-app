import { el } from '../util.js';
import { BOOKS } from '../data/content.js';
import { renderConceptListItem } from '../components/card.js';
import { buildConceptScript } from '../tts.js';

export function renderLibrary({ store, tts }) {
  let query = '';
  let filter = 'all';

  const matches = (c) => {
    const q = query.trim().toLowerCase();
    if (q) {
      const text = `${c.title} ${c.hook} ${c.principle} ${c.why} ${c.examples.join(' ')}`.toLowerCase();
      if (!text.includes(q)) return false;
    }
    if (filter === 'learned' && !store.isLearned(c.id)) return false;
    if (filter === 'unlearned' && store.isLearned(c.id)) return false;
    if (filter === 'bookmarked' && !store.isBookmarked(c.id)) return false;
    return true;
  };

  const body = el('div', { class: 'lib-body' });

  const visibleConcepts = () => {
    const out = [];
    for (const book of BOOKS)
      for (const mod of book.modules)
        for (const c of mod.concepts) if (matches(c)) out.push(c);
    return out;
  };

  const playAllBtn = (tts && tts.supported)
    ? el('button', { class: 'listen-btn playall', onclick: () => {
        const items = visibleConcepts().map(c =>
          ({ conceptId: c.id, title: c.title, segments: buildConceptScript(c) }));
        if (items.length) tts.play(items);
      } }, el('span', { class: 'listen-ico', 'aria-hidden': 'true' }, '▶'), 'Listen to all')
    : null;

  function paint() {
    body.replaceChildren();
    let shown = 0;
    for (const book of BOOKS) {
      for (const mod of book.modules) {
        const items = mod.concepts.filter(matches);
        if (!items.length) continue;
        shown += items.length;
        body.append(el('div', { class: 'mod-head' },
          el('div', { class: 'mod-book' }, book.title),
          el('h3', {}, mod.title),
          el('div', { class: 'mod-summary' }, mod.summary)));
        for (const c of items) {
          body.append(renderConceptListItem(c, mod.id,
            { learned: store.isLearned(c.id), bookmarked: store.isBookmarked(c.id) }));
        }
      }
    }
    if (!shown) body.append(el('p', { class: 'empty' }, 'No concepts match your search.'));
    if (playAllBtn) {
      playAllBtn.lastChild.textContent = shown ? `Listen to all ${shown}` : 'Nothing to play';
      playAllBtn.disabled = !shown;
    }
  }

  const search = el('input', {
    class: 'search', type: 'search', placeholder: 'Search concepts, stories, examples…',
    'aria-label': 'Search concepts',
    oninput: (e) => { query = e.target.value; paint(); },
  });

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

  const root = el('section', { class: 'library' }, search, chips, playAllBtn, body);
  paint();
  return root;
}
