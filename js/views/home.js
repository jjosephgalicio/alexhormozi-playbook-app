import { el, svgHost, dateKey } from '../util.js';
import { BOOKS } from '../data/content.js';
import { ALL, byId } from '../data/lookup.js';
import { progressPct } from '../progress.js';
import { renderProgressRing } from '../components/card.js';
import { coverSVG } from '../components/cover.js';

// Deterministic by date so the "concept of the day" is stable offline.
function conceptOfDay() {
  const key = dateKey();
  let h = 0;
  for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return ALL[h % ALL.length];
}

function lastViewed() {
  try { return byId(localStorage.getItem('hpb.last')); } catch { return null; }
}

export function renderHome({ store }) {
  const s = store.get();
  const learned = Object.keys(s.progress).length;
  const pct = progressPct(learned, ALL.length);
  const cod = conceptOfDay();
  const last = lastViewed();

  const home = el('section', { class: 'home' });

  // Hero: progress + streak
  home.append(el('div', { class: 'card hero' },
    renderProgressRing(pct),
    el('div', { class: 'hero-text' },
      el('div', { class: 'hero-kicker' }, 'Your progress'),
      el('div', { class: 'hero-stat' }, `${learned} of ${ALL.length} learned`),
      el('div', { class: 'hero-streak' },
        '🔥 ', el('b', {}, `${s.streak.count}`),
        ` day${s.streak.count === 1 ? '' : 's'} in a row`))));

  // Concept of the day
  home.append(el('div', { class: 'section-label' }, 'Concept of the day'));
  home.append(el('a', { href: `#/concept/${cod.concept.id}`, class: 'card cod' },
    svgHost('thumb', coverSVG(cod.module.id, cod.concept.id)),
    el('div', { class: 'cod-body' },
      el('div', { class: 'cod-eyebrow' }, `${cod.book.title} · ${cod.module.title}`),
      el('div', { class: 'cod-title' }, cod.concept.title),
      el('div', { class: 'cod-hook' }, cod.concept.hook))));

  // Continue where you left off
  if (last && last.concept.id !== cod.concept.id) {
    home.append(el('div', { class: 'section-label' }, 'Continue'));
    home.append(el('a', { href: `#/concept/${last.concept.id}`, class: 'card book-card' },
      svgHost('thumb', coverSVG(last.module.id, last.concept.id)),
      el('div', { class: 'book-body' },
        el('div', { class: 'book-kicker' }, last.module.title),
        el('div', { class: 'book-title' }, last.concept.title),
        el('div', { class: 'book-tag' }, last.concept.hook))));
  }

  // The books
  home.append(el('div', { class: 'section-label' }, 'The books'));
  for (const b of BOOKS) {
    home.append(el('a', { href: `#/book/${b.id}`, class: 'card book-card' },
      svgHost('thumb', coverSVG(b.modules[0].id, b.id)),
      el('div', { class: 'book-body' },
        el('div', { class: 'book-kicker' }, `${b.modules.length} modules`),
        el('div', { class: 'book-title' }, b.title),
        el('div', { class: 'book-tag' }, b.tagline))));
  }

  return home;
}
