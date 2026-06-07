// Service worker — precache the whole app so it runs with zero network.
// Bump CACHE whenever assets change to roll out an update.
const CACHE = 'hpb-v3';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/styles.css',
  './js/app.js',
  './js/router.js',
  './js/store.js',
  './js/progress.js',
  './js/builders.js',
  './js/util.js',
  './js/tts.js',
  './js/data/content.js',
  './js/data/lookup.js',
  './js/components/card.js',
  './js/components/cover.js',
  './js/components/icons.js',
  './js/components/player.js',
  './js/views/home.js',
  './js/views/library.js',
  './js/views/concept.js',
  './js/views/saved.js',
  './js/views/tools.js',
  './js/views/tools-moneymodel.js',
  './icons/icon.svg',
  './icons/maskable.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;

  e.respondWith(
    caches.match(request).then(hit => {
      if (hit) return hit;
      return fetch(request).then(res => {
        // cache same-origin successes for next time
        if (res.ok && new URL(request.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(request, copy)).catch(() => {});
        }
        return res;
      }).catch(() =>
        request.mode === 'navigate' ? caches.match('./index.html') : Response.error()
      );
    })
  );
});
