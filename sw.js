// Service worker — self-healing updates.
//
// Strategy: NETWORK-FIRST (with a short timeout) so the app always shows the latest
// deploy when online, and falls back to the cache when offline. The cache is an
// offline safety net, not the source of truth — so updates take effect automatically
// without needing to bump this file or the cache name on every deploy.
//
// `cache: 'reload'` on asset fetches bypasses the browser's HTTP cache, defeating any
// long-lived max-age from a previous deploy. skipWaiting + clients.claim activate a new
// worker immediately; the page reloads itself on controllerchange (see app.js).

const CACHE = 'hpb-v5';
const TIMEOUT = 3500;

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
  './js/data/leads.js',
  './js/data/leads-deep.js',
  './js/data/deep/ldx-context.js',
  './js/data/deep/ldx-problem.js',
  './js/data/deep/ldx-mbn.js',
  './js/data/deep/ldx-leadmagnet.js',
  './js/data/deep/ldx-first5.js',
  './js/data/deep/ldx-content1.js',
  './js/data/deep/ldx-content2.js',
  './js/data/deep/ldx-cold.js',
  './js/data/deep/ldx-ads1.js',
  './js/data/deep/ldx-ads2.js',
  './js/data/deep/ldx-employees.js',
  './js/data/lookup.js',
  './js/components/card.js',
  './js/components/cover.js',
  './js/components/icons.js',
  './js/components/diagram.js',
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
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // best-effort precache (a single 404 must not block the update), bypassing HTTP cache
    await Promise.allSettled(ASSETS.map(a => cache.add(new Request(a, { cache: 'reload' }))));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;
  e.respondWith(networkFirst(request));
});

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(v => { clearTimeout(t); resolve(v); },
                 err => { clearTimeout(t); reject(err); });
  });
}

// navigate requests can't safely take a fetch init; everything else bypasses HTTP cache
function fetchFresh(request) {
  return request.mode === 'navigate' ? fetch(request) : fetch(request, { cache: 'reload' });
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  try {
    const fresh = await withTimeout(fetchFresh(request), TIMEOUT);
    if (fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  } catch {
    if (cached) return cached;
    if (request.mode === 'navigate') {
      const shell = await cache.match('./index.html');
      if (shell) return shell;
    }
    return Response.error();
  }
}
