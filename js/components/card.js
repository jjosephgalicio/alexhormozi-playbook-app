// Reusable render helpers: progress ring, concept list item, checklist.

import { el, svgHost } from '../util.js';
import { coverSVG } from './cover.js';

export function renderProgressRing(pct) {
  const r = 30, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
  return svgHost('ring',
    `<svg viewBox="0 0 72 72" aria-label="${pct}% of concepts learned">
      <circle class="track" cx="36" cy="36" r="${r}" fill="none" stroke-width="7"/>
      <circle class="fill" cx="36" cy="36" r="${r}" fill="none" stroke-width="7"
        stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}"/>
      <text class="pct" x="36" y="36" text-anchor="middle" dominant-baseline="central">${pct}%</text>
    </svg>`);
}

export function renderConceptListItem(concept, moduleId, { learned, bookmarked }) {
  return el('a', { href: `#/concept/${concept.id}`, class: 'concept-item' },
    svgHost('ci-thumb', coverSVG(moduleId, concept.id)),
    el('div', { class: 'ci-main' },
      el('div', { class: 'ci-title' }, concept.title),
      el('div', { class: 'ci-hook' }, concept.hook)),
    el('div', { class: 'ci-badges' },
      learned ? el('span', { class: 'badge learned', title: 'Learned' }, '✓') : null,
      bookmarked ? el('span', { class: 'badge saved', title: 'Saved' }, '★') : null));
}

export function renderChecklist(actions, checked, onToggle) {
  const list = el('ul', { class: 'check' });
  actions.forEach((text, i) => {
    const box = el('input', { type: 'checkbox', id: `act-${i}` });
    box.checked = !!checked[i];
    box.addEventListener('change', () => onToggle(i, box.checked));
    list.append(el('li', {}, box, el('label', { for: `act-${i}` }, text)));
  });
  return list;
}
