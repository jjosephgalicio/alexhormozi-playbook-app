# Hormozi Playbook PWA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first, fully-offline PWA that turns the two Hormozi transcripts into a premium-editorial reference library of action-first concept cards with progress, bookmarks/notes, action checklists, and two builder tools.

**Architecture:** Static, data-driven, vanilla ES-module SPA with hash routing. All learning content lives in one data module; pure-logic modules (store, streak/progress, router, builder text) are unit-tested with Node's built-in test runner; views render to the DOM and are verified manually. A service worker precaches everything for zero-network operation. Deploys to Netlify as static files.

**Tech Stack:** HTML5, modern CSS (custom properties, light/dark), vanilla JS ES modules, `localStorage`, Service Worker + Web App Manifest, `node --test` for logic tests. No build step, no runtime dependencies, no CDNs.

---

## Conventions

- **No CDNs / no external runtime requests anywhere.** Fonts = system stack. Icons = inline SVG.
- Pure-logic modules are written so they run in **both** the browser and Node (no direct `window`/`localStorage` references inside logic — inject the storage backend).
- Tests use `node --test` (Node 18+, zero dependencies). Run from project root.
- Commit after each task. The repo is initialized in Task 1.
- All paths are relative to project root: `c:/Users/JJ Galicio/Downloads/alex-hormozi-playbook-app`.

---

## File Structure

```
index.html                  app shell: header, <main id="view">, bottom nav, module scripts
netlify.toml                publish dir + cache headers (sw.js/index.html no-cache)
README.md                   run + deploy instructions
.gitignore
manifest.webmanifest        PWA manifest (SVG icons, theme colors)
sw.js                       service worker: versioned precache, cache-first
/icons/icon.svg             app icon (any size)
/icons/maskable.svg         maskable icon
/css/styles.css             design tokens, light/dark, typography, components
/js/app.js                  bootstrap: SW register, store init, router start, theme
/js/router.js               parseHash(), Router (pure parse + browser binding)
/js/store.js                createStore(backend): state + pub/sub + actions
/js/progress.js             progress %, streak update (pure functions)
/js/builders.js             buildOfferSummary(), buildMoneyModelPlan() (pure)
/js/util.js                 el(), html-escape, clipboard, download, dateKey
/js/data/content.js         BOOKS: all concepts (books → modules → concepts)
/js/components/card.js       renderConceptListItem(), renderProgressRing(), renderChecklist(), renderConceptCard()
/js/views/home.js
/js/views/library.js
/js/views/concept.js
/js/views/tools.js
/js/views/saved.js
/tests/content.test.js
/tests/store.test.js
/tests/progress.test.js
/tests/router.test.js
/tests/builders.test.js
```

---

## Task 1: Project scaffold + git

**Files:**
- Create: `index.html`, `netlify.toml`, `README.md`, `.gitignore`

- [ ] **Step 1: Init repo**

```bash
cd "c:/Users/JJ Galicio/Downloads/alex-hormozi-playbook-app"
git init
```

- [ ] **Step 2: Create `.gitignore`**

```
node_modules/
.DS_Store
*.log
.netlify/
```

- [ ] **Step 3: Create `index.html` (app shell)**

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#0F5132" />
  <title>The Playbook — Hormozi Offers & Money Models</title>
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="icon" href="icons/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="icons/icon.svg" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <header class="app-header">
    <button class="hdr-btn" id="backBtn" aria-label="Back" hidden>‹</button>
    <h1 class="app-title" id="appTitle">The Playbook</h1>
    <button class="hdr-btn" id="themeBtn" aria-label="Toggle theme">◐</button>
  </header>

  <main id="view" class="view" tabindex="-1"></main>

  <nav class="tabbar" aria-label="Primary">
    <a href="#/home" class="tab" data-tab="home"><span class="tab-ico">⌂</span><span>Home</span></a>
    <a href="#/library" class="tab" data-tab="library"><span class="tab-ico">▦</span><span>Library</span></a>
    <a href="#/tools" class="tab" data-tab="tools"><span class="tab-ico">⚒</span><span>Tools</span></a>
    <a href="#/saved" class="tab" data-tab="saved"><span class="tab-ico">★</span><span>Saved</span></a>
  </nav>

  <script type="module" src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create `netlify.toml`**

```toml
[build]
  publish = "."

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "no-cache"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

- [ ] **Step 5: Create `README.md`**

````markdown
# The Playbook — Hormozi Offers & Money Models (PWA)

A mobile-first, fully-offline Progressive Web App that turns Alex Hormozi's
*$100M Offers* and *$100M Money Models* into an action-first learning playbook.

## Run locally
Any static server works (service workers need http://, not file://):

```bash
npx serve .
# or
python -m http.server 8080
```
Open the printed URL on your phone or desktop.

## Tests
```bash
node --test
```

## Deploy to Netlify
- **Drag & drop:** zip the project folder (or the folder itself) into the Netlify
  dashboard "Deploys" drop zone.
- **Git:** push this repo and "Add new site → Import from Git". No build command;
  publish directory is `.` (configured in `netlify.toml`).

## Offline
After the first load the service worker caches everything; the app then works with
no network. Use "Add to Home Screen" / "Install" to run it full-screen.
````

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: scaffold static PWA shell, netlify config, readme"
```

---

## Task 2: Content data + integrity test (TDD)

Author every concept from the transcripts. Write the test first so it enforces completeness.

**Files:**
- Create: `js/data/content.js`, `tests/content.test.js`

- [ ] **Step 1: Write the failing test**

`tests/content.test.js`:
```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BOOKS } from '../js/data/content.js';

const concepts = BOOKS.flatMap(b => b.modules.flatMap(m => m.concepts));
const ids = concepts.map(c => c.id);

test('two books with stable ids', () => {
  assert.equal(BOOKS.length, 2);
  assert.deepEqual(BOOKS.map(b => b.id), ['offers', 'money-models']);
});

test('at least 24 concepts', () => {
  assert.ok(concepts.length >= 24, `only ${concepts.length} concepts`);
});

test('concept ids are unique and slug-shaped', () => {
  assert.equal(new Set(ids).size, ids.length, 'duplicate id');
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/, `bad id: ${id}`);
});

test('every concept has all required non-empty fields', () => {
  for (const c of concepts) {
    for (const f of ['id', 'title', 'hook', 'principle', 'why', 'story', 'apply']) {
      assert.ok(typeof c[f] === 'string' && c[f].trim().length > 0, `${c.id}.${f} empty`);
    }
    assert.ok(Array.isArray(c.actions) && c.actions.length >= 2, `${c.id}.actions too few`);
    assert.ok(Array.isArray(c.related), `${c.id}.related missing`);
  }
});

test('every related id resolves to a real concept', () => {
  const set = new Set(ids);
  for (const c of concepts)
    for (const r of c.related) assert.ok(set.has(r), `${c.id} -> unknown ${r}`);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/content.test.js`
Expected: FAIL — cannot find `../js/data/content.js`.

- [ ] **Step 3: Create `js/data/content.js` with the schema + canonical example**

Structure (author ALL concepts; this shows the exact shape with one fully-written card):
```js
// books → modules → concepts. Add a new transcript by pushing a new book object.
export const BOOKS = [
  {
    id: 'offers',
    title: '$100M Offers',
    subtitle: 'How to make offers so good people feel stupid saying no',
    tagline: 'What to sell, to whom, at what price.',
    modules: [
      {
        id: 'product',
        title: 'Your Product',
        summary: 'Stop competing on price. Build something that can’t be compared.',
        concepts: [
          {
            id: 'differentiate',
            title: 'Differentiate — never compete on price',
            hook: 'If your product is like everything else, you’re forced to sell it cheaper.',
            principle:
              'A commodity is available many places at similar quality, so buyers pick on price and you race to the bottom. A differentiated offer can’t be price-compared, so the prospect must judge it on value instead.',
            why:
              'When nothing compares to your offer, the decision becomes “your product vs nothing,” not “your product vs a cheaper one.” You sell in a vacuum and protect your margin.',
            story:
              'Hormozi contrasts two weight-loss offers: a plain “$1,000 down + $500/mo consultations” versus “pay once, only if you get results, guaranteed 5kg in month one or next month free, plus a personalized program and an app.” Asked to choose, almost everyone picks the second — it isn’t comparable to anything.',
            apply:
              'Selling resume help? Don’t list “resume edits for $99.” Package “Land-the-interview system: tailored resume + 3 mock interviews + a 30-day apply plan, or I keep working free until you get a callback.” Now there’s no apples-to-apples competitor.',
            actions: [
              'Write down how a customer could price-compare you today.',
              'List 3 ways to make your offer un-comparable (guarantee, bundle, outcome-based pricing, unique mechanism).',
              'Rewrite your headline to sell the outcome, not the deliverable.',
            ],
            related: ['four-value-drivers', 'offer-build-5-steps'],
          },
          // ... author the remaining concepts below following this exact shape ...
        ],
      },
      // ... modules: market, pricing, the-offer ...
    ],
  },
  {
    id: 'money-models',
    title: '$100M Money Models',
    subtitle: 'How to make money',
    tagline: 'How to structure offers so customers buy, buy again, and stay.',
    modules: [ /* attraction, upsell, downsell, continuity */ ],
  },
];
```

Author the **full concept set** (id — title — source transcript region):

Book `offers`:
- `product`: `differentiate` (commodity vs differentiated).
- `market`: `market-pain` (sell painkillers not vitamins), `market-purchasing-power` ($300 course story), `market-targetable` (find them on lists/groups), `market-growing` (health/wealth/relationships, growing niche), `pick-a-niche` (night-shift nurse example).
- `pricing`: `price-vs-value` ($5k course reframed), `charge-premium` (emotional investment + quality snowball), `four-value-drivers` (dream outcome↑, likelihood↑, time↓, effort↓), `psychological-solutions` (mirrors in elevators / train clocks).
- `the-offer`: `offer-build-5-steps` (dream outcome → problems → solutions → delivery vehicles → trim & stack; grocery bundle example).

Book `money-models`:
- `attraction`: `giveaways`, `decoy-offer`, `buy-x-get-y-free`, `win-your-money-back`, `pay-now-or-later`.
- `upsell`: `menu-upsell` (unsell→prescribe→A/B→easy pay), `anchor-upsell` ($16k suit), `rollover-upsell` (Justin’s $50/mo×12), `classic-upsell` (car rental stack, “can’t have X without Y”).
- `downsell`: `payment-plan-downsell` (7 steps), `free-trial-condition` (HR software / Leila), `feature-downsell` (cut features not price; remove guarantee).
- `continuity`: `bonus-offer` (gym perks + prepay discount), `continuity-discount` (trash business free year), `waved-fee-offer` (pay $5k or commit 12mo).

Each card’s prose must be authored faithfully from the cited transcript content, in the action-first voice shown above. `related` should cross-link sensibly (e.g. `win-your-money-back` ↔ `rollover-upsell`; `four-value-drivers` ↔ `differentiate`).

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/content.test.js`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add js/data/content.js tests/content.test.js
git commit -m "feat: author full Hormozi concept dataset + integrity tests"
```

---

## Task 3: Store (state + persistence) (TDD)

**Files:**
- Create: `js/store.js`, `tests/store.test.js`

`createStore(backend)` takes a storage backend (`getItem`/`setItem`) so it’s testable in Node. In the browser we pass `localStorage`.

- [ ] **Step 1: Write the failing test**

`tests/store.test.js`:
```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createStore } from '../js/store.js';

function memoryBackend() {
  const m = new Map();
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, v) };
}

test('defaults are sane', () => {
  const s = createStore(memoryBackend());
  assert.equal(s.get().theme, 'light');
  assert.deepEqual(s.get().bookmarks, []);
});

test('toggleBookmark adds then removes', () => {
  const s = createStore(memoryBackend());
  s.toggleBookmark('giveaways');
  assert.deepEqual(s.get().bookmarks, ['giveaways']);
  s.toggleBookmark('giveaways');
  assert.deepEqual(s.get().bookmarks, []);
});

test('markLearned records a timestamp and persists', () => {
  const be = memoryBackend();
  const s = createStore(be);
  s.markLearned('decoy-offer', '2026-06-07');
  assert.ok(s.get().progress['decoy-offer'].learnedAt);
  const s2 = createStore(be); // reload from same backend
  assert.ok(s2.get().progress['decoy-offer']);
});

test('setNote and toggleChecklistItem persist', () => {
  const s = createStore(memoryBackend());
  s.setNote('anchor-upsell', 'try on suits');
  assert.equal(s.get().notes['anchor-upsell'], 'try on suits');
  s.toggleChecklistItem('anchor-upsell', 2, true);
  assert.equal(s.get().checklists['anchor-upsell'][2], true);
});

test('subscribe fires on change', () => {
  const s = createStore(memoryBackend());
  let n = 0;
  s.subscribe(() => n++);
  s.toggleBookmark('x');
  assert.equal(n, 1);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/store.test.js`
Expected: FAIL — cannot find `../js/store.js`.

- [ ] **Step 3: Implement `js/store.js`**

```js
const KEY = 'hpb.v1';
const DEFAULTS = {
  progress: {}, bookmarks: [], notes: {}, checklists: {},
  streak: { count: 0, lastActiveDate: null },
  theme: 'light',
  builders: { offer: [], moneyModel: [] },
};

export function createStore(backend) {
  let state;
  try { state = { ...DEFAULTS, ...(JSON.parse(backend.getItem(KEY)) || {}) }; }
  catch { state = { ...DEFAULTS }; }
  const subs = new Set();
  const persist = () => backend.setItem(KEY, JSON.stringify(state));
  const emit = () => subs.forEach(fn => fn(state));
  const commit = () => { persist(); emit(); };

  return {
    get: () => state,
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },
    setTheme(t) { state.theme = t; commit(); },
    toggleBookmark(id) {
      const i = state.bookmarks.indexOf(id);
      if (i === -1) state.bookmarks.push(id); else state.bookmarks.splice(i, 1);
      commit();
    },
    isBookmarked(id) { return state.bookmarks.includes(id); },
    markLearned(id, dateKey) {
      state.progress[id] = { learnedAt: dateKey };
      commit();
    },
    unmarkLearned(id) { delete state.progress[id]; commit(); },
    isLearned(id) { return !!state.progress[id]; },
    setNote(id, text) {
      if (text && text.trim()) state.notes[id] = text; else delete state.notes[id];
      commit();
    },
    toggleChecklistItem(id, index, value) {
      const arr = state.checklists[id] || (state.checklists[id] = []);
      arr[index] = value;
      commit();
    },
    setStreak(streak) { state.streak = streak; commit(); },
    saveBuilderDraft(kind, draft) {
      const list = state.builders[kind];
      const i = list.findIndex(d => d.id === draft.id);
      if (i === -1) list.push(draft); else list[i] = draft;
      commit();
    },
    deleteBuilderDraft(kind, draftId) {
      state.builders[kind] = state.builders[kind].filter(d => d.id !== draftId);
      commit();
    },
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/store.test.js`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add js/store.js tests/store.test.js
git commit -m "feat: localStorage-backed store with pub/sub"
```

---

## Task 4: Progress + streak logic (TDD)

**Files:**
- Create: `js/progress.js`, `tests/progress.test.js`

- [ ] **Step 1: Write the failing test**

`tests/progress.test.js`:
```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { progressPct, nextStreak } from '../js/progress.js';

test('progressPct rounds learned/total', () => {
  assert.equal(progressPct(0, 25), 0);
  assert.equal(progressPct(25, 25), 100);
  assert.equal(progressPct(1, 25), 4);
});
test('progressPct handles zero total', () => {
  assert.equal(progressPct(0, 0), 0);
});

test('first activity sets streak to 1', () => {
  assert.deepEqual(nextStreak({ count: 0, lastActiveDate: null }, '2026-06-07'),
    { count: 1, lastActiveDate: '2026-06-07' });
});
test('same day does not increment', () => {
  assert.deepEqual(nextStreak({ count: 3, lastActiveDate: '2026-06-07' }, '2026-06-07'),
    { count: 3, lastActiveDate: '2026-06-07' });
});
test('consecutive day increments', () => {
  assert.deepEqual(nextStreak({ count: 3, lastActiveDate: '2026-06-06' }, '2026-06-07'),
    { count: 4, lastActiveDate: '2026-06-07' });
});
test('gap resets to 1', () => {
  assert.deepEqual(nextStreak({ count: 9, lastActiveDate: '2026-06-01' }, '2026-06-07'),
    { count: 1, lastActiveDate: '2026-06-07' });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/progress.test.js`
Expected: FAIL — cannot find module.

- [ ] **Step 3: Implement `js/progress.js`**

```js
export function progressPct(learned, total) {
  if (!total) return 0;
  return Math.round((learned / total) * 100);
}

// dateKey strings are 'YYYY-MM-DD' (UTC day). Compare by day difference.
function dayDiff(a, b) {
  const da = Date.parse(a + 'T00:00:00Z');
  const db = Date.parse(b + 'T00:00:00Z');
  return Math.round((db - da) / 86400000);
}

export function nextStreak(streak, todayKey) {
  if (!streak.lastActiveDate) return { count: 1, lastActiveDate: todayKey };
  const diff = dayDiff(streak.lastActiveDate, todayKey);
  if (diff === 0) return { ...streak };
  if (diff === 1) return { count: streak.count + 1, lastActiveDate: todayKey };
  return { count: 1, lastActiveDate: todayKey };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/progress.test.js`
Expected: PASS (6 tests).

- [ ] **Step 5: Commit**

```bash
git add js/progress.js tests/progress.test.js
git commit -m "feat: progress percentage and streak logic"
```

---

## Task 5: Router (TDD)

**Files:**
- Create: `js/router.js`, `tests/router.test.js`

- [ ] **Step 1: Write the failing test**

`tests/router.test.js`:
```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseHash } from '../js/router.js';

test('empty hash -> home', () => {
  assert.deepEqual(parseHash(''), { name: 'home', param: null });
  assert.deepEqual(parseHash('#/'), { name: 'home', param: null });
});
test('named routes', () => {
  assert.deepEqual(parseHash('#/library'), { name: 'library', param: null });
  assert.deepEqual(parseHash('#/tools'), { name: 'tools', param: null });
});
test('concept route carries id param', () => {
  assert.deepEqual(parseHash('#/concept/anchor-upsell'),
    { name: 'concept', param: 'anchor-upsell' });
});
test('unknown route -> home', () => {
  assert.deepEqual(parseHash('#/nope'), { name: 'home', param: null });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/router.test.js`
Expected: FAIL — cannot find module.

- [ ] **Step 3: Implement `js/router.js`**

```js
const KNOWN = new Set(['home', 'library', 'tools', 'saved', 'concept']);

export function parseHash(hash) {
  const path = (hash || '').replace(/^#\/?/, '');
  if (!path) return { name: 'home', param: null };
  const [name, param] = path.split('/');
  if (!KNOWN.has(name)) return { name: 'home', param: null };
  return { name, param: param || null };
}

// Browser binding: calls onRoute(route) on load + hashchange.
export function startRouter(onRoute) {
  const fire = () => onRoute(parseHash(window.location.hash));
  window.addEventListener('hashchange', fire);
  fire();
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/router.test.js`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add js/router.js tests/router.test.js
git commit -m "feat: hash router with pure parseHash"
```

---

## Task 6: Builder text generation (TDD)

**Files:**
- Create: `js/builders.js`, `tests/builders.test.js`

- [ ] **Step 1: Write the failing test**

`tests/builders.test.js`:
```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildOfferSummary, buildMoneyModelPlan } from '../js/builders.js';

test('offer summary includes dream outcome and solutions', () => {
  const out = buildOfferSummary({
    name: 'Fit in 12',
    dreamOutcome: 'Lose 14kg in 7 weeks',
    problems: ['Healthy food is hard to buy'],
    solutions: ['How to buy healthy food fast and cheap'],
    deliverables: ['Recorded grocery tour', 'Weekly shopping list'],
  });
  assert.match(out, /Fit in 12/);
  assert.match(out, /Lose 14kg in 7 weeks/);
  assert.match(out, /grocery tour/i);
});

test('money model plan lists the four stages', () => {
  const out = buildMoneyModelPlan({
    business: 'Gym',
    attraction: 'Win your money back',
    upsell: 'Rollover upsell',
    downsell: 'Payment plan',
    continuity: 'Waved-fee offer',
  });
  for (const s of ['Attraction', 'Upsell', 'Downsell', 'Continuity'])
    assert.match(out, new RegExp(s));
  assert.match(out, /Win your money back/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/builders.test.js`
Expected: FAIL — cannot find module.

- [ ] **Step 3: Implement `js/builders.js`**

```js
export function buildOfferSummary(d) {
  const lines = [];
  lines.push(`OFFER: ${d.name || 'Untitled offer'}`);
  lines.push('');
  lines.push(`Dream outcome: ${d.dreamOutcome || '—'}`);
  if (d.problems?.length) {
    lines.push('', 'Problems solved:');
    d.problems.forEach(p => lines.push(`  • ${p}`));
  }
  if (d.solutions?.length) {
    lines.push('', 'Solutions:');
    d.solutions.forEach(s => lines.push(`  • ${s}`));
  }
  if (d.deliverables?.length) {
    lines.push('', 'What they get (delivery vehicles):');
    d.deliverables.forEach(v => lines.push(`  • ${v}`));
  }
  return lines.join('\n');
}

export function buildMoneyModelPlan(d) {
  return [
    `MONEY MODEL: ${d.business || 'My business'}`,
    '',
    `1. Attraction  → ${d.attraction || '—'}`,
    `2. Upsell      → ${d.upsell || '—'}`,
    `3. Downsell    → ${d.downsell || '—'}`,
    `4. Continuity  → ${d.continuity || '—'}`,
  ].join('\n');
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/builders.test.js`
Expected: PASS (2 tests).

- [ ] **Step 5: Run the full suite + commit**

Run: `node --test`
Expected: all suites PASS.
```bash
git add js/builders.js tests/builders.test.js
git commit -m "feat: offer + money model text builders"
```

---

## Task 7: Design system CSS + icons + manifest

**Files:**
- Create: `css/styles.css`, `icons/icon.svg`, `icons/maskable.svg`, `manifest.webmanifest`

- [ ] **Step 1: Create `css/styles.css` (tokens, light/dark, base, components)**

Include: CSS custom properties for the premium-editorial palette and a system font stack; light theme on `:root`, dark on `[data-theme="dark"]`; base typography; `.app-header`, `.view`, `.tabbar` layout (fixed bottom, safe-area insets); cards, pull-quote, numbered steps, chips, buttons, progress ring (SVG), checklist, form controls; `prefers-reduced-motion` guard.

```css
:root{
  --paper:#FBF7EF; --ink:#1A1A17; --muted:#5C5750; --line:#E7DFD1;
  --accent:#0F5132; --accent-soft:#0f513215; --gold:#B8860B; --card:#FFFFFFcc;
  --radius:14px; --maxw:680px;
  --serif: "Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Times New Roman",serif;
  --sans: ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
[data-theme="dark"]{
  --paper:#16140F; --ink:#F2ECDD; --muted:#A89F8E; --line:#2E2A22;
  --accent:#5FB58B; --accent-soft:#5fb58b1f; --gold:#E0B košice; --card:#1F1C16cc;
}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);
  line-height:1.6;-webkit-font-smoothing:antialiased;padding-bottom:72px}
h1,h2,h3,.serif{font-family:var(--serif);line-height:1.2}
/* ...header, view container (max-width centered, padding), tabbar fixed bottom with
   env(safe-area-inset-bottom), cards, .hook pull-quote, .steps ol, .chip, .btn,
   .ring svg, .check item, inputs/textareas, motion guard... */
@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}
```
> NOTE: fix the placeholder token `--gold:#E0B košice` to a real hex (e.g. `#E6C566`) when implementing — it is intentionally flagged here so it is not copy-pasted blindly.

- [ ] **Step 2: Create `icons/icon.svg`** — a simple editorial monogram (e.g. ivory ground, emerald rounded square, gold serif “P”). Single self-contained SVG, `viewBox="0 0 512 512"`.

- [ ] **Step 3: Create `icons/maskable.svg`** — same mark with extra safe-zone padding (mark within central 80%).

- [ ] **Step 4: Create `manifest.webmanifest`**

```json
{
  "name": "The Playbook — Hormozi Offers & Money Models",
  "short_name": "The Playbook",
  "description": "Action-first playbook from Alex Hormozi's $100M Offers & Money Models.",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#FBF7EF",
  "theme_color": "#0F5132",
  "icons": [
    { "src": "icons/icon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any" },
    { "src": "icons/maskable.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "maskable" }
  ]
}
```

- [ ] **Step 5: Verify visually**

Run: `npx serve .` and open the URL. Header + tab bar render with editorial styling; toggling `data-theme="dark"` on `<html>` in devtools flips colors.

- [ ] **Step 6: Commit**

```bash
git add css/styles.css icons/ manifest.webmanifest
git commit -m "feat: premium-editorial design system, icons, manifest"
```

---

## Task 8: Utilities + app bootstrap + router wiring + theme

**Files:**
- Create: `js/util.js`, `js/app.js`

- [ ] **Step 1: Create `js/util.js`**

```js
export function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) n.setAttribute(k, v);
  }
  for (const kid of kids.flat()) if (kid != null)
    n.append(kid.nodeType ? kid : document.createTextNode(kid));
  return n;
}
export const escapeHtml = s => String(s).replace(/[&<>"']/g,
  c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
export const dateKey = (d = new Date()) => d.toISOString().slice(0, 10);
export async function copyText(t) {
  try { await navigator.clipboard.writeText(t); return true; } catch { return false; }
}
export function downloadText(filename, text) {
  const a = el('a', { href: URL.createObjectURL(new Blob([text], { type: 'text/plain' })),
    download: filename });
  document.body.append(a); a.click(); a.remove();
}
```

- [ ] **Step 2: Create `js/app.js` (bootstrap)**

```js
import { createStore } from './store.js';
import { startRouter } from './router.js';
import { nextStreak } from './progress.js';
import { dateKey } from './util.js';
import { renderHome } from './views/home.js';
import { renderLibrary } from './views/library.js';
import { renderConcept } from './views/concept.js';
import { renderTools } from './views/tools.js';
import { renderSaved } from './views/saved.js';

const store = createStore(window.localStorage);
const view = document.getElementById('view');
const backBtn = document.getElementById('backBtn');
const themeBtn = document.getElementById('themeBtn');

function applyTheme() { document.documentElement.dataset.theme = store.get().theme; }
applyTheme();
themeBtn.addEventListener('click', () => {
  store.setTheme(store.get().theme === 'dark' ? 'light' : 'dark'); applyTheme();
});

// Count any in-app activity as a day toward the streak.
store.setStreak(nextStreak(store.get().streak, dateKey()));

const VIEWS = { home: renderHome, library: renderLibrary, concept: renderConcept,
  tools: renderTools, saved: renderSaved };

function render(route) {
  const fn = VIEWS[route.name] || renderHome;
  view.replaceChildren(fn({ store, param: route.param }));
  backBtn.hidden = route.name === 'home';
  backBtn.onclick = () => history.back();
  document.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === route.name));
  view.focus(); window.scrollTo(0, 0);
}

startRouter(render);

if ('serviceWorker' in navigator)
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
```

- [ ] **Step 3: Create placeholder view modules so imports resolve**

Create `js/views/{home,library,concept,tools,saved}.js`, each exporting a render function returning a simple element, e.g. `js/views/home.js`:
```js
import { el } from '../util.js';
export function renderHome() { return el('section', { class: 'card' }, 'Home'); }
```
(Same shape for the other four; they are fully built in later tasks.)

- [ ] **Step 4: Verify**

Run: `npx serve .`; tapping tabs swaps placeholder content, URL hash changes, back button appears off-home, theme toggle persists across reload.

- [ ] **Step 5: Commit**

```bash
git add js/util.js js/app.js js/views/
git commit -m "feat: app bootstrap, router wiring, theme, streak tick"
```

---

## Task 9: Shared components

**Files:**
- Create: `js/components/card.js`

- [ ] **Step 1: Implement components**

```js
import { el } from '../util.js';

export function renderProgressRing(pct) {
  const r = 26, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
  const wrap = el('div', { class: 'ring' });
  wrap.innerHTML =
    `<svg viewBox="0 0 64 64" width="64" height="64" aria-label="${pct}% learned">
      <circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--line)" stroke-width="6"/>
      <circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--accent)" stroke-width="6"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"
        transform="rotate(-90 32 32)"/>
      <text x="32" y="37" text-anchor="middle" font-size="15" fill="var(--ink)">${pct}%</text>
    </svg>`;
  return wrap;
}

export function renderConceptListItem(concept, { learned, bookmarked }) {
  return el('a', { href: `#/concept/${concept.id}`, class: 'concept-item' },
    el('div', { class: 'ci-main' },
      el('div', { class: 'ci-title serif' }, concept.title),
      el('div', { class: 'ci-hook' }, concept.hook)),
    el('div', { class: 'ci-badges' },
      learned ? el('span', { class: 'badge learned', title: 'Learned' }, '✓') : null,
      bookmarked ? el('span', { class: 'badge', title: 'Bookmarked' }, '★') : null));
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
```

- [ ] **Step 2: Verify** — temporarily render a ring + list item in Home placeholder via `npx serve .`, confirm they display, then revert the temp edit.

- [ ] **Step 3: Commit**

```bash
git add js/components/card.js
git commit -m "feat: progress ring, concept list item, checklist components"
```

---

## Task 10: Home view

**Files:**
- Modify: `js/views/home.js`

- [ ] **Step 1: Implement Home**

Render: progress ring (learned/total concepts), streak count, "Continue" link to last viewed concept (store last id in `localStorage` via a tiny helper or `sessionStorage`; if none, link to first concept), a **Concept of the day** card chosen deterministically by `dateKey` (hash the date to an index so it’s stable offline), and two book entry cards linking into Library.

```js
import { el } from '../util.js';
import { BOOKS } from '../data/content.js';
import { progressPct } from '../progress.js';
import { renderProgressRing } from '../components/card.js';
import { dateKey } from '../util.js';

const ALL = BOOKS.flatMap(b => b.modules.flatMap(m => m.concepts));
function conceptOfDay() {
  const key = dateKey();
  let h = 0; for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return ALL[h % ALL.length];
}

export function renderHome({ store }) {
  const s = store.get();
  const learned = Object.keys(s.progress).length;
  const pct = progressPct(learned, ALL.length);
  const cod = conceptOfDay();
  return el('section', { class: 'home' },
    el('div', { class: 'card hero' },
      renderProgressRing(pct),
      el('div', {},
        el('div', { class: 'hero-stat' }, `${learned}/${ALL.length} concepts learned`),
        el('div', { class: 'hero-streak' }, `🔥 ${s.streak.count}-day streak`))),
    el('h2', { class: 'serif' }, 'Concept of the day'),
    el('a', { href: `#/concept/${cod.id}`, class: 'card cod' },
      el('div', { class: 'cod-title serif' }, cod.title),
      el('div', { class: 'cod-hook' }, cod.hook)),
    el('h2', { class: 'serif' }, 'The books'),
    ...BOOKS.map(b => el('a', { href: `#/library`, class: 'card book' },
      el('div', { class: 'book-title serif' }, b.title),
      el('div', { class: 'book-tag' }, b.tagline))));
}
```

- [ ] **Step 2: Verify** — `npx serve .`: Home shows ring, streak, concept-of-day (tap → concept route placeholder for now), book cards.

- [ ] **Step 3: Commit**

```bash
git add js/views/home.js
git commit -m "feat: home dashboard with progress, streak, concept of the day"
```

---

## Task 11: Library view (browse + search + filter)

**Files:**
- Modify: `js/views/library.js`

- [ ] **Step 1: Implement Library**

Render a search input, filter chips (All / Learned / Not learned / Bookmarked), and the books → modules → concept-items list. Searching filters concepts by title/hook/principle/why text (case-insensitive); filter chips narrow by status; empty results show a friendly message. Re-render on input/chip change.

```js
import { el } from '../util.js';
import { BOOKS } from '../data/content.js';
import { renderConceptListItem } from '../components/card.js';

export function renderLibrary({ store }) {
  const root = el('section', { class: 'library' });
  let query = '', filter = 'all';

  const matches = c => {
    const q = query.toLowerCase();
    const text = `${c.title} ${c.hook} ${c.principle} ${c.why}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (filter === 'learned' && !store.isLearned(c.id)) return false;
    if (filter === 'unlearned' && store.isLearned(c.id)) return false;
    if (filter === 'bookmarked' && !store.isBookmarked(c.id)) return false;
    return true;
  };

  function paint() {
    body.replaceChildren();
    let shown = 0;
    for (const book of BOOKS) {
      for (const mod of book.modules) {
        const items = mod.concepts.filter(matches);
        if (!items.length) continue;
        shown += items.length;
        body.append(el('div', { class: 'mod-head' },
          el('span', { class: 'mod-book' }, book.title),
          el('h3', { class: 'serif' }, mod.title)));
        items.forEach(c => body.append(renderConceptListItem(c,
          { learned: store.isLearned(c.id), bookmarked: store.isBookmarked(c.id) })));
      }
    }
    if (!shown) body.append(el('p', { class: 'empty' }, 'No concepts match.'));
  }

  const search = el('input', { class: 'search', type: 'search',
    placeholder: 'Search concepts…', oninput: e => { query = e.target.value; paint(); } });

  const chips = el('div', { class: 'chips' },
    ...[['all','All'],['learned','Learned'],['unlearned','To learn'],['bookmarked','Saved']]
      .map(([k, label]) => {
        const chip = el('button', { class: 'chip', onclick: () => {
          filter = k; chips.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
          chip.classList.add('on'); paint();
        } }, label);
        if (k === 'all') chip.classList.add('on');
        return chip;
      }));

  const body = el('div', { class: 'lib-body' });
  root.append(search, chips, body);
  paint();
  return root;
}
```

- [ ] **Step 2: Verify** — `npx serve .`: search narrows live; chips filter; module headers group results.

- [ ] **Step 3: Commit**

```bash
git add js/views/library.js
git commit -m "feat: library browse with search and status filters"
```

---

## Task 12: Concept detail view

**Files:**
- Modify: `js/views/concept.js`

- [ ] **Step 1: Implement Concept**

Look up concept by `param`. Render breadcrumb, title, hook pull-quote, sections (Principle, Why it works, Story, Apply it), action **checklist** (persists via `store.toggleChecklistItem`), and a footer with bookmark toggle, learned toggle (records `dateKey`, bumps streak), note textarea (saves on input via `store.setNote`), and related chips. Persist "last viewed" id for Home’s Continue. If not found, show a not-found card.

```js
import { el, dateKey } from '../util.js';
import { BOOKS } from '../data/content.js';
import { renderChecklist } from '../components/card.js';
import { nextStreak } from '../progress.js';

function find(id) {
  for (const b of BOOKS) for (const m of b.modules)
    for (const c of m.concepts) if (c.id === id) return { book: b, mod: m, concept: c };
  return null;
}

export function renderConcept({ store, param }) {
  const hit = find(param);
  if (!hit) return el('section', { class: 'card' }, 'Concept not found.');
  const { book, mod, concept: c } = hit;
  try { localStorage.setItem('hpb.last', c.id); } catch {}

  const section = (title, text) => el('div', { class: 'c-sec' },
    el('h3', { class: 'serif' }, title), el('p', {}, text));

  const checked = store.get().checklists[c.id] || [];
  const checklist = renderChecklist(c.actions, checked,
    (i, v) => store.toggleChecklistItem(c.id, i, v));

  const bookmarkBtn = el('button', { class: 'btn', onclick: () => {
    store.toggleBookmark(c.id); bookmarkBtn.textContent = store.isBookmarked(c.id) ? '★ Saved' : '☆ Save';
  } }, store.isBookmarked(c.id) ? '★ Saved' : '☆ Save');

  const learnedBtn = el('button', { class: 'btn primary', onclick: () => {
    if (store.isLearned(c.id)) { store.unmarkLearned(c.id); }
    else { store.markLearned(c.id, dateKey()); store.setStreak(nextStreak(store.get().streak, dateKey())); }
    learnedBtn.textContent = store.isLearned(c.id) ? '✓ Learned' : 'Mark learned';
  } }, store.isLearned(c.id) ? '✓ Learned' : 'Mark learned');

  const note = el('textarea', { class: 'note', placeholder: 'Your notes / how you’ll apply this…',
    oninput: e => store.setNote(c.id, e.target.value) });
  note.value = store.get().notes[c.id] || '';

  const related = el('div', { class: 'chips' },
    ...c.related.map(id => {
      const t = find(id); return t ? el('a', { class: 'chip', href: `#/concept/${id}` }, t.concept.title) : null;
    }));

  return el('section', { class: 'concept' },
    el('div', { class: 'crumb' }, `${book.title} › ${mod.title}`),
    el('h1', { class: 'serif' }, c.title),
    el('blockquote', { class: 'hook' }, c.hook),
    section('The principle', c.principle),
    section('Why it works', c.why),
    section('Story', c.story),
    section('Apply it', c.apply),
    el('h3', { class: 'serif' }, 'Action checklist'), checklist,
    el('div', { class: 'note-wrap' }, el('h3', { class: 'serif' }, 'Notes'), note),
    c.related.length ? el('div', {}, el('h3', { class: 'serif' }, 'Related'), related) : null,
    el('div', { class: 'c-actions' }, learnedBtn, bookmarkBtn));
}
```

- [ ] **Step 2: Verify** — `npx serve .`: open a concept, tick checklist + reload (persists), Save/Learned toggle, type a note + reload (persists), related chips navigate.

- [ ] **Step 3: Commit**

```bash
git add js/views/concept.js
git commit -m "feat: concept detail with checklist, notes, bookmark, learned"
```

---

## Task 13: Saved view

**Files:**
- Modify: `js/views/saved.js`

- [ ] **Step 1: Implement Saved**

Aggregate: bookmarked concepts (list items), all notes (concept title + note text, linking to the concept), and a checklist-progress summary (concepts with any ticked actions, x/total). Empty states for each section.

```js
import { el } from '../util.js';
import { BOOKS } from '../data/content.js';
import { renderConceptListItem } from '../components/card.js';

const ALL = BOOKS.flatMap(b => b.modules.flatMap(m => m.concepts));
const byId = id => ALL.find(c => c.id === id);

export function renderSaved({ store }) {
  const s = store.get();
  const root = el('section', { class: 'saved' });

  root.append(el('h2', { class: 'serif' }, 'Bookmarks'));
  if (s.bookmarks.length) s.bookmarks.forEach(id => {
    const c = byId(id); if (c) root.append(renderConceptListItem(c,
      { learned: store.isLearned(id), bookmarked: true }));
  }); else root.append(el('p', { class: 'empty' }, 'No bookmarks yet. Tap ☆ on any concept.'));

  root.append(el('h2', { class: 'serif' }, 'Notes'));
  const noteIds = Object.keys(s.notes);
  if (noteIds.length) noteIds.forEach(id => {
    const c = byId(id); if (!c) return;
    root.append(el('a', { class: 'card note-card', href: `#/concept/${id}` },
      el('div', { class: 'serif' }, c.title), el('div', { class: 'note-text' }, s.notes[id])));
  }); else root.append(el('p', { class: 'empty' }, 'No notes yet.'));

  root.append(el('h2', { class: 'serif' }, 'Checklists in progress'));
  const inProg = Object.entries(s.checklists)
    .map(([id, arr]) => ({ c: byId(id), done: arr.filter(Boolean).length, total: byId(id)?.actions.length || 0 }))
    .filter(x => x.c && x.done > 0);
  if (inProg.length) inProg.forEach(({ c, done, total }) =>
    root.append(el('a', { class: 'card', href: `#/concept/${c.id}` },
      el('div', { class: 'serif' }, c.title), el('div', { class: 'muted' }, `${done}/${total} steps done`))));
  else root.append(el('p', { class: 'empty' }, 'No checklists started.'));

  return root;
}
```

- [ ] **Step 2: Verify** — `npx serve .`: after bookmarking/noting/ticking elsewhere, Saved aggregates them and links back.

- [ ] **Step 3: Commit**

```bash
git add js/views/saved.js
git commit -m "feat: saved view aggregating bookmarks, notes, checklists"
```

---

## Task 14: Tools index + Offer Builder

**Files:**
- Modify: `js/views/tools.js`

- [ ] **Step 1: Implement Tools index + Offer Builder**

Tools view shows two cards (Offer Builder, Money Model Builder) that swap an inner panel. Offer Builder: inputs for name, dream outcome, problems (multiline → array by line), solutions (auto-suggest "How to " prefix), deliverables (multiline). A "Generate" button calls `buildOfferSummary`, shows the result in a `<pre>`, with Copy and Download buttons (`copyText`, `downloadText`) and a Save-draft button (`store.saveBuilderDraft('offer', …)`). Saved drafts list with load/delete.

```js
import { el, copyText, downloadText } from '../util.js';
import { buildOfferSummary, buildMoneyModelPlan } from '../builders.js';
import { renderMoneyModel } from './tools-moneymodel.js';

const lines = v => v.split('\n').map(s => s.trim()).filter(Boolean);

export function renderTools({ store }) {
  const root = el('section', { class: 'tools' });
  const panel = el('div', { class: 'tool-panel' });
  const pick = (which) => panel.replaceChildren(
    which === 'offer' ? offerBuilder(store) : renderMoneyModel(store));
  root.append(
    el('div', { class: 'chips' },
      el('button', { class: 'chip on', onclick: e => { sel(e); pick('offer'); } }, 'Offer Builder'),
      el('button', { class: 'chip', onclick: e => { sel(e); pick('mm'); } }, 'Money Model')),
    panel);
  pick('offer');
  return root;

  function sel(e){ root.querySelectorAll('.chip').forEach(c=>c.classList.remove('on')); e.target.classList.add('on'); }
}

function offerBuilder(store) {
  const f = {};
  const field = (key, label, ph, multi) => {
    const input = multi
      ? el('textarea', { class: 'inp', placeholder: ph, rows: 3, oninput: e => f[key] = e.target.value })
      : el('input', { class: 'inp', placeholder: ph, oninput: e => f[key] = e.target.value });
    return el('label', { class: 'field' }, el('span', {}, label), input);
  };
  const out = el('pre', { class: 'out', hidden: true });
  const wrap = el('div', { class: 'builder' },
    el('h2', { class: 'serif' }, 'Offer Builder'),
    el('p', { class: 'muted' }, 'The 5-step $100M Offers process.'),
    field('name', 'Offer name', 'e.g. Fit in 12'),
    field('dreamOutcome', '1 · Dream outcome', 'What does the customer ultimately want?'),
    field('problems', '2 · Problems (one per line)', 'List what blocks the outcome', true),
    field('solutions', '3 · Solutions (one per line)', 'Each problem → “How to …”', true),
    field('deliverables', '4 · Delivery vehicles (one per line)', 'How you deliver each solution', true),
    el('div', { class: 'c-actions' },
      el('button', { class: 'btn primary', onclick: () => {
        const txt = buildOfferSummary({ name: f.name, dreamOutcome: f.dreamOutcome,
          problems: lines(f.problems || ''), solutions: lines(f.solutions || ''),
          deliverables: lines(f.deliverables || '') });
        out.textContent = txt; out.hidden = false;
      } }, 'Generate'),
      el('button', { class: 'btn', onclick: () => copyText(out.textContent) }, 'Copy'),
      el('button', { class: 'btn', onclick: () => downloadText('offer.txt', out.textContent) }, 'Download')),
    out);
  return wrap;
}
```

- [ ] **Step 2: Verify** — `npx serve .`: fill fields → Generate shows summary; Copy/Download work; switching to Money Model swaps panel.

- [ ] **Step 3: Commit**

```bash
git add js/views/tools.js
git commit -m "feat: tools index and offer builder"
```

---

## Task 15: Money Model Builder

**Files:**
- Create: `js/views/tools-moneymodel.js`

- [ ] **Step 1: Implement Money Model Builder**

Business name input + four `<select>`s (Attraction/Upsell/Downsell/Continuity) populated from the money-models concept titles, each with a short "specifics" textarea. Generate → `buildMoneyModelPlan`, with Copy/Download. Options come from `BOOKS` money-models modules so they stay in sync with content.

```js
import { el, copyText, downloadText } from '../util.js';
import { BOOKS } from '../data/content.js';
import { buildMoneyModelPlan } from '../builders.js';

const mm = BOOKS.find(b => b.id === 'money-models');
const opts = modId => mm.modules.find(m => m.id === modId).concepts.map(c => c.title);

function select(label, modId, onchange) {
  const sel = el('select', { class: 'inp', onchange: e => onchange(e.target.value) },
    el('option', { value: '' }, `Choose ${label.toLowerCase()}…`),
    ...opts(modId).map(t => el('option', { value: t }, t)));
  return el('label', { class: 'field' }, el('span', {}, label), sel);
}

export function renderMoneyModel(store) {
  const f = { business: '' };
  const out = el('pre', { class: 'out', hidden: true });
  return el('div', { class: 'builder' },
    el('h2', { class: 'serif' }, 'Money Model Builder'),
    el('p', { class: 'muted' }, 'Sequence your attraction → upsell → downsell → continuity.'),
    el('label', { class: 'field' }, el('span', {}, 'Business'),
      el('input', { class: 'inp', placeholder: 'e.g. Local gym', oninput: e => f.business = e.target.value })),
    select('Attraction', 'attraction', v => f.attraction = v),
    select('Upsell', 'upsell', v => f.upsell = v),
    select('Downsell', 'downsell', v => f.downsell = v),
    select('Continuity', 'continuity', v => f.continuity = v),
    el('div', { class: 'c-actions' },
      el('button', { class: 'btn primary', onclick: () => {
        out.textContent = buildMoneyModelPlan(f); out.hidden = false;
      } }, 'Generate'),
      el('button', { class: 'btn', onclick: () => copyText(out.textContent) }, 'Copy'),
      el('button', { class: 'btn', onclick: () => downloadText('money-model.txt', out.textContent) }, 'Download')),
    out);
}
```

- [ ] **Step 2: Verify** — `npx serve .`: selects list the real money-model tactics; Generate produces the 4-stage plan; Copy/Download work.

- [ ] **Step 3: Commit**

```bash
git add js/views/tools-moneymodel.js
git commit -m "feat: money model builder"
```

---

## Task 16: Service worker (offline precache)

**Files:**
- Create: `sw.js`

- [ ] **Step 1: Implement `sw.js`**

Precache the full app shell + all modules + content + css + icons + manifest. Cache-first for same-origin GETs; navigations fall back to cached `index.html`. Bump `CACHE` on changes; purge old caches on activate.

```js
const CACHE = 'hpb-v1';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './css/styles.css',
  './js/app.js', './js/router.js', './js/store.js', './js/progress.js',
  './js/builders.js', './js/util.js', './js/data/content.js',
  './js/components/card.js',
  './js/views/home.js', './js/views/library.js', './js/views/concept.js',
  './js/views/tools.js', './js/views/tools-moneymodel.js', './js/views/saved.js',
  './icons/icon.svg', './icons/maskable.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;
  e.respondWith(
    caches.match(request).then(hit => hit || fetch(request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(request, copy)).catch(() => {});
      return res;
    }).catch(() => request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))
  );
});
```

- [ ] **Step 2: Verify offline**

Run: `npx serve .`, load the app, then in DevTools → Application: confirm SW active and cache populated. Network tab → "Offline", reload: app still loads and all views/tools work. On mobile/desktop Chromium, confirm Install prompt appears.

- [ ] **Step 3: Commit**

```bash
git add sw.js
git commit -m "feat: service worker precache for full offline use"
```

---

## Task 17: Final verification + polish + deploy docs

**Files:**
- Modify: as needed (`css/styles.css`, `README.md`)

- [ ] **Step 1: Run full test suite**

Run: `node --test`
Expected: all suites PASS.

- [ ] **Step 2: Manual QA pass (`npx serve .`)**

Verify against spec §13: mobile viewport (DevTools device mode), all four tabs, search + filters, concept checklist/notes/bookmark/learned persistence across reload, streak increments, both builders generate + copy + download, dark mode toggle persists, offline reload works, install prompt.

- [ ] **Step 3: Polish** — fix any contrast/spacing/safe-area issues found; confirm `--gold` token placeholder from Task 7 was replaced with a real hex; confirm no console errors and no network requests to third parties (Network tab shows same-origin only).

- [ ] **Step 4: Finalize README deploy section** — confirm drag-drop + git steps are accurate; add an "Add to Home Screen" note.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: final QA polish and deploy docs"
```

---

## Self-Review

**Spec coverage**
- Mobile-first PWA, plain HTML/CSS/JS, no build → Tasks 1, 7, 8 ✓
- Fully offline / no CDNs (system fonts, SVG icons, SW precache) → Tasks 7, 16 ✓
- Installable manifest → Task 7 ✓
- Netlify deploy → Tasks 1 (netlify.toml), 17 (README) ✓
- Local state only (localStorage) → Task 3 ✓
- Content model + ~25 concepts + integrity → Task 2 ✓
- Action-first concept card (hook/principle/why/story/apply/checklist) → Tasks 2, 12 ✓
- Nav: Home/Library/Tools/Saved → Tasks 8, 10–15 ✓
- Home: progress ring, streak, continue, concept of day → Task 10 ✓
- Library: browse + search + filters → Task 11 ✓
- Concept: checklist, bookmark, learned, notes, related → Task 12 ✓
- Tools: Offer Builder + Money Model Builder, copy/download → Tasks 14, 15 ✓
- Saved: bookmarks/notes/checklists aggregated → Task 13 ✓
- Premium-editorial visual + dark mode → Task 7 ✓
- Progress %, streak logic, builders, router parsing tested → Tasks 4, 5, 6 ✓

**Placeholder scan:** The only intentional placeholder is the deliberately-flagged `--gold` token in Task 7 (and the "author remaining concepts" instruction in Task 2, which is content authoring with a full template + an enforcing test, not a logic gap). Task 17 Step 3 verifies the token fix.

**Type/name consistency:** Store method names (`toggleBookmark`, `markLearned`, `unmarkLearned`, `isLearned`, `isBookmarked`, `setNote`, `toggleChecklistItem`, `setStreak`, `saveBuilderDraft`, `deleteBuilderDraft`) are used identically across views. `parseHash`/`startRouter`, `progressPct`/`nextStreak`, `buildOfferSummary`/`buildMoneyModelPlan`, `el`/`copyText`/`downloadText`/`dateKey`, and `renderProgressRing`/`renderConceptListItem`/`renderChecklist` match their definitions and call sites.

**Deviation from spec (noted & justified):** Spec §5/§10 mentioned optional self-hosted webfonts; to maximize the "fully offline" requirement and avoid binary asset downloads, the plan uses a premium system serif/sans stack and inline SVG icons. Self-hosted fonts/PNG icons remain a later optional upgrade.
