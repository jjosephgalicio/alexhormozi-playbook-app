# Hormozi Playbook PWA — Design Spec

**Date:** 2026-06-07
**Status:** Approved (design), pending implementation plan

## 1. Purpose

Transform the raw video transcripts in `transcripts/` (Alex Hormozi's *$100M Offers*
and *$100M Money Models*) into a beautiful, mobile-first **Progressive Web App** that
a learning entrepreneur can use day to day to digest the knowledge and actually
implement it.

The app is a **reference library** of action-first concept cards, with progress
tracking, bookmarks/notes, action checklists, and two interactive builder tools.

## 2. Hard requirements

- **Mobile-first**, responsive up to desktop.
- **Plain HTML / CSS / JS** — ES modules, **no build step**.
- **Fully offline-capable**: no CDNs, no external runtime calls of any kind. Every
  asset (fonts, icons, content data, scripts, styles) is self-hosted and cached by a
  service worker. After the first load the app works with zero connectivity.
- **Installable PWA** (manifest + service worker), opens full-screen.
- **Deployable to Netlify** as a static site (drag-and-drop folder or git connect).
- All user state persisted locally (`localStorage`) — no backend, no accounts.

## 3. Non-goals (YAGNI)

- No backend, auth, sync, or analytics.
- No guided/sequential "daily course" path (user chose free-browse reference library;
  a light "Concept of the day" nudge on Home is the only daily touch).
- No framework/build tooling (Vite/React/etc.).
- No content beyond the two provided transcripts (architecture must make adding more
  trivial, but we ship only these two).

## 4. Architecture

Static, data-driven, vanilla ES-module SPA with hash routing.

```
index.html              app shell (header, <main>, bottom tab bar)
/css/styles.css         design system + components (light + dark)
/js/app.js              bootstrap: register SW, init store, start router
/js/router.js           tiny hash router (#/route/param)
/js/store.js            localStorage-backed state (progress, bookmarks, notes,
                        checklists, streak, builder drafts, theme) + pub/sub
/js/data/content.js     ALL learning content (books → modules → concepts)
/js/views/home.js       dashboard: progress ring, streak, continue, concept of day
/js/views/library.js    browse books/modules + search + filters
/js/views/concept.js    single concept card detail
/js/views/tools.js      tools index + Offer Builder + Money Model Builder
/js/views/saved.js      bookmarks, notes, checklist progress aggregated
/js/components/*.js      reusable render helpers (card, progressRing, checklist, etc.)
manifest.webmanifest    PWA manifest
sw.js                   service worker (precache app shell + assets, cache-first)
/icons/*                app icons (192/512 + maskable) — SVG-generated PNGs
/fonts/*                self-hosted serif + sans (woff2)
netlify.toml            static config + caching headers
README.md               local-run + Netlify deploy instructions
```

**Why hash routing:** works from `file://` and offline with no server rewrites; no
Netlify redirect rules needed for deep links.

**Scalability:** `content.js` exports an array of book objects. A new transcript =
one new book object; every view iterates the data generically. No view code changes.

## 5. Content model

```
Book   { id, title, subtitle, tagline, modules[] }
Module { id, title, summary, concepts[] }
Concept {
  id,                // stable slug, used in routes + storage keys
  title,
  hook,              // one punchy essence line
  principle,         // what it is, plainly (1-2 short paragraphs)
  why,               // the mechanism — why it works
  story,             // the memorable example from the book
  apply,             // a worked example in a different business
  actions: [string], // tickable implementation steps (the checklist)
  related: [id],     // related concept ids
}
```

### Content inventory (~25 concepts)

**Book 1 — $100M Offers** (*what* to sell, to whom, at what price)
- **Product:** Differentiate, never compete on price (commodity vs differentiated).
- **Market:** The 4 indicators — Pain, Purchasing Power, Easy to Target, Growing;
  the 3 evergreen markets (health/wealth/relationships); Pick a niche.
- **Pricing:** Price vs Value; Charge premium (emotional investment + quality
  snowball); The 4 Value Drivers (Dream Outcome ↑, Perceived Likelihood ↑, Time
  Delay ↓, Effort & Sacrifice ↓); Psychological vs logical solutions.
- **The Offer (5-step build):** Identify dream outcome → List problems → Solutions
  list (how-to + reverse) → Delivery vehicles → Trim & stack.

**Book 2 — $100M Money Models** (*how* to structure offers to make money)
- **Attraction offers (5):** Giveaways; Decoy offer; Buy X get Y free; Win your money
  back; Pay less now or pay more later.
- **Upsell offers (4):** Menu upsells (unsell → prescribe → A/B → easy pay); Anchor
  upsells; Rollover upsells; Classic upsell (can't have X without Y).
- **Downsell offers (3):** Payment-plan downsells (7 steps); Free trial with a
  condition; Feature downsells.
- **Continuity offers (3):** Bonus offers; Continuity discount offers; Waved-fee offer.

All copy is authored from the transcripts — faithful to the ideas and stories,
rewritten into clean action-first cards (not verbatim).

## 6. Views & navigation

Bottom tab bar (thumb-reachable): **Home · Library · Tools · Saved**.
Header shows title, theme toggle, and contextual back button.

- **Home** — overall progress ring (% concepts learned), current streak, "Continue"
  (last viewed concept), and **Concept of the day** (deterministic by date so it's
  stable offline). Quick entry into each book.
- **Library** — list of books → modules → concepts; live **search** across titles,
  hooks, and body text; filters: All / Learned / Not learned / Bookmarked.
- **Concept detail** — full card (see §7). Footer actions: bookmark, mark learned,
  add/edit note, jump to related concepts.
- **Tools** — index linking to Offer Builder and Money Model Builder.
- **Saved** — aggregated bookmarks, all notes, and checklist completion across concepts.

## 7. Concept card (action-first layout)

Order, top to bottom:
1. Breadcrumb (Book › Module) + title + hook (pull-quote styling).
2. **The principle**
3. **Why it works**
4. **Story** (from the book) — editorial treatment, optional drop cap.
5. **Apply it** (worked example in another business).
6. **✓ Action checklist** — each step a tickable item; ticks persist; completing all
   steps suggests marking the concept learned.
7. Footer: bookmark · mark learned · add note · related chips.

## 8. Interactive tools

### Offer Builder (from $100M Offers 5-step process)
Guided form with the steps: dream outcome → list problems → convert problems to
solutions (auto-prefix "How to…") → delivery vehicles per solution → trim & stack
(tag each high/low value & cost). Output: a generated, copyable **offer summary**.
Draft auto-saves to `localStorage`; supports multiple named drafts.

### Money Model Builder (from $100M Money Models)
Pick one option from each stage for your business — Attraction, Upsell, Downsell,
Continuity — with a short fill-in for specifics, plus inline reminders of the chosen
tactic. Output: a sequenced **money-model plan** (copyable). Auto-saves drafts.

Both tools include a "copy to clipboard" and "download as .txt" (offline-safe export).

## 9. State & persistence (localStorage)

Single namespaced object, e.g. `hpb.v1`:
```
{
  progress:   { [conceptId]: { learnedAt } },
  bookmarks:  [conceptId],
  notes:      { [conceptId]: text },
  checklists: { [conceptId]: [bool] },
  streak:     { count, lastActiveDate },
  theme:      "light" | "dark",
  builders:   { offer: [...drafts], moneyModel: [...drafts] }
}
```
`store.js` is the single source of truth with a small pub/sub so views re-render on
change. Streak increments once per calendar day of activity; resets if a day is missed.

## 10. Visual design — premium editorial

- **Palette (light):** warm ivory paper `#FBF7EF`, near-black ink `#1A1A17`, deep
  emerald accent `#0F5132` with a restrained gold highlight `#B8860B` for emphasis.
- **Dark "reading" mode:** deep charcoal/ink background, warm off-white text, same
  emerald/gold accents tuned for contrast.
- **Type:** refined serif for headings (self-hosted variable serif, e.g. Fraunces),
  clean humanist sans for body (e.g. Inter). System fallbacks if fonts fail.
- **Feel:** generous whitespace, strong type hierarchy, pull-quotes for hooks/memorable
  lines, editorial numbered steps, subtle progress rings, soft dividers. Restrained
  motion (small fades/slides), respects `prefers-reduced-motion`.
- Accessibility: WCAG-AA contrast, focus states, semantic landmarks, labelled controls.

## 11. Offline strategy

- `sw.js` precaches the full app shell, `content.js`, CSS, JS, fonts, and icons on
  install; serves **cache-first** for app assets. Versioned cache name; old caches
  purged on activate.
- No network is required for any feature. No third-party requests exist in the code.
- Manifest enables install; `theme_color`/`background_color` match the palette.

## 12. Deployment (Netlify)

- Pure static — publish directory is the project root.
- `netlify.toml`: set publish dir, long-cache immutable assets, no-cache for `sw.js`
  and `index.html` (so updates roll out). No redirects needed (hash routing).
- README documents: run locally (any static server / open index.html) and deploy
  (drag-drop folder into Netlify, or connect git).

## 13. Testing / verification

- Manual: load with network throttled to offline after first load; verify all views,
  search, checklist persistence, theme toggle, both builders, install prompt.
- Lighthouse PWA check (installable, offline) once running.
- Data integrity: every `related` id resolves; every concept has all required fields.

## 14. Risks / decisions

- **Self-hosted fonts** add a few hundred KB; acceptable for an installable offline app
  and chosen over CDN to meet the offline requirement. System fallback if needed.
- **localStorage only** means state is per-device; acceptable (no accounts in scope).
- **Hash routing** chosen over history API for offline robustness and zero server config.
