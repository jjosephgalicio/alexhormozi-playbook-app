# The Playbook — Hormozi *Offers* & *Money Models* (PWA)

A mobile-first, **fully-offline** Progressive Web App that turns Alex Hormozi's
*$100M Offers* and *$100M Money Models* into an action-first learning playbook —
built so an entrepreneur can digest the ideas and actually implement them day to day.

- **Reference library** of 26 action-first concept cards, each with: principle → why →
  coach's note → story → applied example → **more real-world examples** → **case studies**
  → **common mistakes** → **by-the-numbers** (researched, attributed) → action checklist
- 🔊 **Offline audiobook read-aloud** — a built-in player (Web Speech API) with voice
  picker, speed control, live section highlighting, and a continuous "Listen to all"
  playlist. Shareable deep link: `?play=<conceptId>`
- 🖼️ **Visual example cards** with per-industry icons (for visual learners) and generative
  per-module cover art
- **Progress & streaks**, **bookmarks & notes**, **action checklists**
- Two **builder tools**: an Offer Builder and a Money Model Builder
- **Premium-editorial** design with light/dark reading modes
- Plain HTML/CSS/JS, **no build step**, **no CDNs**, works with zero network after first load

> Read-aloud uses your device's installed voices, so it works fully offline. Voice
> quality depends on the device — modern phones (iOS/Android) and Edge on Windows have
> excellent natural voices you can select in the player.

## Run locally

Service workers require `http://` (not `file://`), so use any static server:

```bash
npx serve .
# or
python -m http.server 8080
```

Then open the printed URL on your phone or desktop browser.

## Tests

Pure logic (store, progress/streak, router, builders, content integrity) is unit-tested
with Node's built-in runner — no dependencies:

```bash
node --test
```

## Deploy to Netlify

This is a pure static site (publish directory `.`, configured in `netlify.toml` — no build command).

- **Drag & drop:** drag the project folder onto the Netlify dashboard's *Deploys* drop zone.
- **Git:** push this repo, then *Add new site → Import from an existing project*.

## Install / offline

After the first load, the service worker caches everything; the app then works fully
offline. Use your browser's **Install** / **Add to Home Screen** to run it full-screen
like a native app.

## Project structure

```
index.html              app shell (header, view container, bottom nav)
css/styles.css          design system (tokens, light/dark, components)
js/app.js               bootstrap: SW register, store, router, theme, streak
js/router.js            hash router (parseHash + browser binding)
js/store.js             localStorage state + pub/sub + actions
js/progress.js          progress % + streak logic (pure)
js/builders.js          offer / money-model text generators (pure)
js/util.js              DOM + clipboard + download helpers
js/data/content.js      all learning content (books → modules → concepts)
js/components/card.js    reusable render helpers
js/views/*.js           home, library, concept, tools, tools-moneymodel, saved
manifest.webmanifest    PWA manifest
sw.js                   service worker (precache, cache-first)
icons/*.svg             app + maskable icons
tests/*.test.js         node --test suites
```
