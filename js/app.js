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
  home: renderHome, library: renderLibrary, concept: renderConcept,
  tools: renderTools, saved: renderSaved,
};
const TITLES = {
  home: 'The Playbook', library: 'Library', concept: 'The Playbook',
  tools: 'Tools', saved: 'Saved',
};

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

  document.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === route.name));

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
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err =>
      console.warn('SW registration failed:', err));
  });
}
