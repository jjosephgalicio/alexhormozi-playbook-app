import { el, svgHost, dateKey } from '../util.js';
import { byId } from '../data/lookup.js';
import { renderChecklist } from '../components/card.js';
import { coverSVG } from '../components/cover.js';
import { iconFor } from '../components/icons.js';
import { nextStreak } from '../progress.js';

export function renderConcept({ store, param }) {
  const hit = byId(param);
  if (!hit) {
    return el('section', { class: 'card' },
      el('h2', { class: 'serif' }, 'Concept not found'),
      el('p', { class: 'muted' }, 'Try the '),
      el('a', { href: '#/library', class: 'btn' }, 'Library'));
  }
  const { book, module: mod, concept: c } = hit;
  try { localStorage.setItem('hpb.last', c.id); } catch {}

  const section = (label, text, extraClass = '') =>
    el('div', { class: `c-sec ${extraClass}` },
      el('div', { class: 'c-sec-label' }, label),
      el('p', {}, text));

  // hero
  const hero = el('div', { class: 'c-hero' },
    svgHost('thumb', coverSVG(mod.id, c.id)),
    el('div', { class: 'c-hero-overlay' },
      el('div', { class: 'c-hero-crumb' }, `${book.title} · ${mod.title}`),
      el('h1', { class: 'c-hero-title' }, c.title)));

  // examples as visual cards (icon cue per industry)
  const examples = el('div', { class: 'c-sec' },
    el('div', { class: 'c-sec-label' }, 'More real-world examples'),
    el('div', { class: 'ex-grid' },
      ...c.examples.map(x =>
        el('div', { class: 'ex-card' },
          svgHost('ex-ico', iconFor(x)),
          el('div', { class: 'ex-text' }, x)))));

  // checklist
  const checked = store.get().checklists[c.id] || [];
  const checklist = renderChecklist(c.actions, checked,
    (i, v) => store.toggleChecklistItem(c.id, i, v));

  // notes
  const note = el('textarea', {
    class: 'note', placeholder: 'Your notes — how will you apply this?',
    'aria-label': 'Your notes',
    oninput: (e) => store.setNote(c.id, e.target.value),
  });
  note.value = store.get().notes[c.id] || '';

  // related
  const relatedChips = c.related
    .map(id => byId(id))
    .filter(Boolean)
    .map(r => el('a', { class: 'chip', href: `#/concept/${r.concept.id}` }, r.concept.title));

  // sticky actions
  const learnedBtn = el('button', { class: 'btn primary' });
  const bookmarkBtn = el('button', { class: 'btn' });
  const syncBtns = () => {
    learnedBtn.textContent = store.isLearned(c.id) ? '✓ Learned' : 'Mark as learned';
    bookmarkBtn.textContent = store.isBookmarked(c.id) ? '★ Saved' : '☆ Save';
  };
  learnedBtn.addEventListener('click', () => {
    if (store.isLearned(c.id)) {
      store.unmarkLearned(c.id);
    } else {
      store.markLearned(c.id, dateKey());
      store.setStreak(nextStreak(store.get().streak, dateKey()));
    }
    syncBtns();
  });
  bookmarkBtn.addEventListener('click', () => { store.toggleBookmark(c.id); syncBtns(); });
  syncBtns();

  return el('section', { class: 'concept' },
    hero,
    el('blockquote', { class: 'hook' }, c.hook),
    section('The principle', c.principle),
    section('Why it works', c.why),
    section('Story', c.story, 'story'),
    section('Apply it', c.apply),
    examples,
    el('div', { class: 'c-sec' },
      el('div', { class: 'c-sec-label' }, 'Action checklist'),
      checklist),
    el('div', { class: 'note-wrap' },
      el('div', { class: 'c-sec-label' }, 'Notes'),
      note),
    relatedChips.length
      ? el('div', { class: 'c-sec' },
          el('div', { class: 'c-sec-label' }, 'Related'),
          el('div', { class: 'related' }, ...relatedChips))
      : null,
    el('div', { class: 'c-actions' }, learnedBtn, bookmarkBtn));
}
