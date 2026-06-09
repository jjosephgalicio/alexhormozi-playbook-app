// Bootstrap: register the service worker, init the store, apply theme, tick the
// streak, and drive the hash router.

import { createStore } from './store.js';
import { startRouter } from './router.js';
import { nextStreak } from './progress.js';
import { dateKey } from './util.js';
import { createTTS, buildConceptScript } from './tts.js';
import { createPlayer } from './components/player.js';
import { byId } from './data/lookup.js';
import { renderHome } from './views/home.js';
import { renderLibrary } from './views/library.js';
import { renderBook } from './views/book.js';
import { renderConcept } from './views/concept.js';
import { renderTools } from './views/tools.js';
import { renderSaved } from './views/saved.js';

const store = createStore(window.localStorage);
const tts = createTTS(store);

// Persistent player (keeps playing across view changes).
document.body.append(createPlayer(tts, store));
// Follow-along: when a playlist advances to a new concept, navigate to it.
tts.setOnAdvance((conceptId) => {
  const target = `#/concept/${conceptId}`;
  if (window.location.hash !== target) window.location.hash = target;
});

const view = document.getElementById('view');
const backBtn = document.getElementById('backBtn');
const themeBtn = document.getElementById('themeBtn');
const titleEl = document.getElementById('appTitle');

function applyTheme() {
  document.documentElement.dataset.theme = store.get().theme;
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', store.get().theme === 'dark' ? '#14130E' : '#0E5A3E');
  themeBtn.textContent = store.get().theme === 'dark' ? '☀' : '◐';
}
applyTheme();
themeBtn.addEventListener('click', () => {
  store.setTheme(store.get().theme === 'dark' ? 'light' : 'dark');
  applyTheme();
});

// Any visit counts toward today's streak.
store.setStreak(nextStreak(store.get().streak, dateKey()));

const VIEWS = {
  home: renderHome, library: renderLibrary, book: renderBook, concept: renderConcept,
  tools: renderTools, saved: renderSaved,
};
const TITLES = {
  home: 'The Playbook', library: 'Library', book: 'Library', concept: 'The Playbook',
  tools: 'Tools', saved: 'Saved',
};
// which bottom tab is highlighted for a given route
const TAB_OF = { book: 'library', concept: 'library' };

function render(route) {
  const fn = VIEWS[route.name] || renderHome;
  let node;
  try {
    node = fn({ store, tts, param: route.param });
  } catch (err) {
    console.error('View render failed:', err);
    node = document.createElement('section');
    node.className = 'card';
    node.textContent = 'Something went wrong rendering this view.';
  }
  view.replaceChildren(node);
  titleEl.textContent = TITLES[route.name] || 'The Playbook';
  backBtn.hidden = route.name === 'home';
  backBtn.onclick = () => history.back();

  const activeTab = TAB_OF[route.name] || route.name;
  document.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === activeTab));

  view.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

startRouter(render);

// Shareable deep link: ?play=<conceptId> opens that concept and starts read-aloud.
const playId = new URLSearchParams(window.location.search).get('play');
if (playId) {
  const hit = byId(playId);
  if (hit) {
    const target = `#/concept/${hit.concept.id}`;
    if (window.location.hash !== target) window.location.hash = target;
    tts.play([{ conceptId: hit.concept.id, title: hit.concept.title,
      segments: buildConceptScript(hit.concept) }]);
  }
}

if ('serviceWorker' in navigator) {
  // When a new service worker takes control (i.e. a new deploy activated), reload once
  // so the page picks up the fresh assets. Skip on the very first install (no prior
  // controller) to avoid an unnecessary reload.
  const hadController = !!navigator.serviceWorker.controller;
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController || refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js');
      reg.update();
      // proactively check for updates periodically and whenever the app regains focus
      setInterval(() => reg.update(), 30 * 60 * 1000);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update();
      });
    } catch (err) {
      console.warn('SW registration failed:', err);
    }
  });
}
