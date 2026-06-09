import { el, svgHost } from '../util.js';
import { BOOKS } from '../data/content.js';
import { renderConceptListItem } from '../components/card.js';
import { coverSVG } from '../components/cover.js';

// Library = the topic hub: the 4 books as topic cards, plus a global search that
// finds concepts across every topic. Tapping a topic opens its own Book view.
export function renderLibrary({ store }) {
  let query = '';

  // topic cards
  const topics = el('div', { class: 'topics' });
  for (const b of BOOKS) {
    const all = b.modules.flatMap(m => m.concepts);
    const learned = all.filter(c => store.isLearned(c.id)).length;
    topics.append(el('a', { href: `#/book/${b.id}`, class: 'card book-card' },
      svgHost('thumb', coverSVG(b.modules[0].id, b.id)),
      el('div', { class: 'book-body' },
        el('div', { class: 'book-kicker' }, `${b.modules.length} modules · ${learned}/${all.length} learned`),
        el('div', { class: 'book-title' }, b.title),
        el('div', { class: 'book-tag' }, b.tagline))));
  }

  const topicsLabel = el('div', { class: 'section-label' }, 'Topics');
  const results = el('div', { class: 'lib-body' });

  const matchesGlobal = (c) => {
    const q = query.trim().toLowerCase();
    const text = `${c.title} ${c.hook} ${c.principle} ${c.why} ${c.examples.join(' ')}`.toLowerCase();
    return text.includes(q);
  };

  function paint() {
    const q = query.trim();
    const searching = q.length > 0;
    topicsLabel.hidden = searching;
    topics.hidden = searching;
    results.hidden = !searching;
    results.replaceChildren();
    if (!searching) return;

    let shown = 0;
    for (const book of BOOKS) {
      for (const mod of book.modules) {
        const items = mod.concepts.filter(matchesGlobal);
        if (!items.length) continue;
        shown += items.length;
        results.append(el('div', { class: 'mod-head' },
          el('div', { class: 'mod-book' }, book.title),
          el('h3', {}, mod.title)));
        for (const c of items) {
          results.append(renderConceptListItem(c, mod.id,
            { learned: store.isLearned(c.id), bookmarked: store.isBookmarked(c.id) }));
        }
      }
    }
    if (!shown) results.append(el('p', { class: 'empty' }, 'No concepts match your search.'));
  }

  const search = el('input', {
    class: 'search', type: 'search', placeholder: `Search all ${BOOKS.length} topics…`,
    'aria-label': 'Search concepts',
    oninput: (e) => { query = e.target.value; paint(); },
  });

  const root = el('section', { class: 'library' }, search, topicsLabel, topics, results);
  paint();
  return root;
}
