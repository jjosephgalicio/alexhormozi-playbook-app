import { el, svgHost, dateKey } from '../util.js';
import { byId } from '../data/lookup.js';
import { renderChecklist } from '../components/card.js';
import { coverSVG } from '../components/cover.js';
import { iconFor, icon } from '../components/icons.js';
import { nextStreak } from '../progress.js';
import { buildConceptScript } from '../tts.js';

// Only one concept view is mounted at a time; track its highlight subscription so
// we can tear it down on the next render.
let activeUnsub = null;

export function renderConcept({ store, tts, param }) {
  if (activeUnsub) { activeUnsub(); activeUnsub = null; }

  const hit = byId(param);
  if (!hit) {
    return el('section', { class: 'card' },
      el('h2', { class: 'serif' }, 'Concept not found'),
      el('p', { class: 'muted' }, 'It may have moved. Head back to the '),
      el('a', { href: '#/library', class: 'btn' }, 'Library'));
  }
  const { book, module: mod, concept: c } = hit;
  try { localStorage.setItem('hpb.last', c.id); } catch {}

  // data-seg indices MUST match buildConceptScript() order:
  // 0 overview · 1 principle · 2 why · 3 coachNote · 4 story · 5 apply
  // 6 examples · 7 cases · 8 mistakes · 9 stats · 10 actions
  const section = (label, text, seg, extraClass = '') =>
    el('div', { class: `c-sec ${extraClass}`, 'data-seg': seg },
      el('div', { class: 'c-sec-label' }, label),
      el('p', {}, text));

  const hero = el('div', { class: 'c-hero' },
    svgHost('thumb', coverSVG(mod.id, c.id)),
    el('div', { class: 'c-hero-overlay' },
      el('div', { class: 'c-hero-crumb' }, `${book.title} · ${mod.title}`),
      el('h1', { class: 'c-hero-title' }, c.title)));

  const visualCards = (items) =>
    el('div', { class: 'ex-grid' },
      ...items.map(x => el('div', { class: 'ex-card' },
        svgHost('ex-ico', iconFor(x)),
        el('div', { class: 'ex-text' }, x))));

  const markedList = (label, items, listCls, marker, seg) =>
    el('div', { class: 'c-sec', 'data-seg': seg },
      el('div', { class: 'c-sec-label' }, label),
      el('ul', { class: listCls },
        ...items.map(t => el('li', {},
          el('span', { class: 'marker' }, marker),
          el('span', {}, t)))));

  const coachNote = el('div', { class: 'callout', 'data-seg': 3 },
    el('div', { class: 'callout-label' }, '✍ Coach’s note'),
    el('p', {}, c.coachNote));

  const examples = el('div', { class: 'c-sec', 'data-seg': 6 },
    el('div', { class: 'c-sec-label' }, 'More real-world examples'),
    visualCards(c.examples));

  const cases = el('div', { class: 'c-sec', 'data-seg': 7 },
    el('div', { class: 'c-sec-label' }, 'Case studies'),
    visualCards(c.cases));

  // gym + gym-app playbook (emerald = physical gym, gold = gym app)
  const gymPlays = el('div', { class: 'c-sec', 'data-seg': 10 },
    el('div', { class: 'c-sec-label' }, 'Gym & gym-app playbook'),
    el('div', { class: 'ex-grid' },
      ...c.gym.map(g => el('div', { class: 'ex-card' + (g.kind === 'app' ? ' app' : '') },
        svgHost('ex-ico', icon(g.kind === 'app' ? 'mobile' : 'fitness')),
        el('div', { class: 'ex-text' },
          el('span', { class: 'kind-badge' + (g.kind === 'app' ? ' app' : '') },
            g.kind === 'app' ? 'Gym app' : 'Gym'),
          ' ', g.text)))));

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

  const relatedChips = c.related.map(id => byId(id)).filter(Boolean)
    .map(r => el('a', { class: 'chip', href: `#/concept/${r.concept.id}` }, r.concept.title));

  // listen (read-aloud) button
  const item = { conceptId: c.id, title: c.title, segments: buildConceptScript(c) };
  const listenBtn = tts && tts.supported
    ? el('button', { class: 'listen-btn', onclick: () => tts.play([item]) },
        el('span', { class: 'listen-ico', 'aria-hidden': 'true' }, '▶'),
        'Listen to this concept')
    : null;

  // learned / bookmark
  const learnedBtn = el('button', { class: 'btn primary' });
  const bookmarkBtn = el('button', { class: 'btn' });
  const syncBtns = () => {
    learnedBtn.textContent = store.isLearned(c.id) ? '✓ Learned' : 'Mark as learned';
    bookmarkBtn.textContent = store.isBookmarked(c.id) ? '★ Saved' : '☆ Save';
  };
  learnedBtn.addEventListener('click', () => {
    if (store.isLearned(c.id)) store.unmarkLearned(c.id);
    else { store.markLearned(c.id, dateKey()); store.setStreak(nextStreak(store.get().streak, dateKey())); }
    syncBtns();
  });
  bookmarkBtn.addEventListener('click', () => { store.toggleBookmark(c.id); syncBtns(); });
  syncBtns();

  const hook = el('blockquote', { class: 'hook', 'data-seg': 0 }, c.hook);

  const root = el('section', { class: 'concept' },
    hero,
    hook,
    listenBtn,
    section('The principle', c.principle, 1),
    section('Why it works', c.why, 2),
    coachNote,
    section('Story', c.story, 4, 'story'),
    section('Apply it', c.apply, 5),
    examples,
    cases,
    markedList('Common mistakes', c.mistakes, 'mistake-list', '✕', 8),
    markedList('By the numbers', c.stats, 'stat-list', '◆', 9),
    gymPlays,
    el('div', { class: 'c-sec', 'data-seg': 11 },
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

  // live highlight of the section being read aloud
  if (tts && tts.supported) {
    let lastSeg = -1;
    activeUnsub = tts.subscribe((s) => {
      root.querySelectorAll('[data-seg].speaking').forEach(e => e.classList.remove('speaking'));
      if (!s.playing || s.conceptId !== c.id) { lastSeg = -1; return; }
      const tgt = root.querySelector(`[data-seg="${s.seg}"]`);
      if (tgt) {
        tgt.classList.add('speaking');
        if (s.seg !== lastSeg) { tgt.scrollIntoView({ block: 'center', behavior: 'smooth' }); lastSeg = s.seg; }
      }
    });
  }

  return root;
}
