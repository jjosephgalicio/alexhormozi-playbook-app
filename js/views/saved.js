import { el } from '../util.js';
import { byId } from '../data/lookup.js';
import { renderConceptListItem } from '../components/card.js';

export function renderSaved({ store }) {
  const s = store.get();
  const root = el('section', { class: 'saved' });

  // Bookmarks
  root.append(el('div', { class: 'section-label' }, 'Bookmarks'));
  if (s.bookmarks.length) {
    for (const id of s.bookmarks) {
      const hit = byId(id);
      if (hit) root.append(renderConceptListItem(hit.concept, hit.module.id,
        { learned: store.isLearned(id), bookmarked: true }));
    }
  } else {
    root.append(el('p', { class: 'empty' }, 'No bookmarks yet. Tap ☆ Save on any concept.'));
  }

  // Notes
  root.append(el('div', { class: 'section-label' }, 'Notes'));
  const noteIds = Object.keys(s.notes);
  if (noteIds.length) {
    for (const id of noteIds) {
      const hit = byId(id);
      if (!hit) continue;
      root.append(el('a', { class: 'card note-card', href: `#/concept/${id}` },
        el('div', { class: 'serif', style: 'font-size:1.08rem' }, hit.concept.title),
        el('div', { class: 'note-text' }, s.notes[id])));
    }
  } else {
    root.append(el('p', { class: 'empty' }, 'No notes yet. Jot ideas on a concept and they’ll appear here.'));
  }

  // Checklists in progress
  root.append(el('div', { class: 'section-label' }, 'Checklists in progress'));
  const inProgress = Object.entries(s.checklists)
    .map(([id, arr]) => {
      const hit = byId(id);
      return hit ? { hit, done: arr.filter(Boolean).length, total: hit.concept.actions.length } : null;
    })
    .filter(x => x && x.done > 0);

  if (inProgress.length) {
    for (const { hit, done, total } of inProgress) {
      root.append(el('a', { class: 'card', href: `#/concept/${hit.concept.id}` },
        el('div', { class: 'serif', style: 'font-size:1.08rem' }, hit.concept.title),
        el('div', { class: 'muted', style: 'font-size:0.9rem;margin-top:3px' },
          `${done} of ${total} steps done`)));
    }
  } else {
    root.append(el('p', { class: 'empty' }, 'No checklists started. Tick action steps on a concept to track them.'));
  }

  return root;
}
