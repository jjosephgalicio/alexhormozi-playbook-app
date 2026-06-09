// Per-concept "how it works" mechanic diagrams — small, offline, theme-aware inline
// SVGs that visualize each concept's core mechanic for visual learners. Colors come
// from CSS classes (see styles.css .diagram .*) so they adapt to light/dark.
//
// Canvas is 300 x 140. Reusable primitives compose into per-concept compositions,
// which are mapped in DIAGRAMS at the bottom.

const text = (x, y, str, cls = '', fs) =>
  `<text x="${x}" y="${y}" text-anchor="middle" class="${cls}"${fs ? ` font-size="${fs}"` : ''}>${str}</text>`;
const textL = (x, y, str, cls = '') =>
  `<text x="${x}" y="${y}" text-anchor="start" class="${cls}">${str}</text>`;

// shrink a label's font so it fits within a box of width w (keeps short labels at base)
function fitFont(label, w, base = 12) {
  const inner = w - 14, perChar = 0.56;
  return Math.round(Math.max(7, Math.min(base, inner / (String(label).length * perChar))) * 10) / 10;
}

function box(x, y, w, h, label, cls = 'dgbox', sub = '') {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" class="${cls}"/>`;
  if (label) s += text(x + w / 2, y + h / 2 + (sub ? -2 : 4), label, '', fitFont(label, w));
  if (sub) s += text(x + w / 2, y + h / 2 + 13, sub, 's', fitFont(sub, w, 10));
  return s;
}

// horizontal arrow pointing right, length len, stroke class sc, fill class fc
function arrowR(x, y, len, sc = 'stroke', fc = 'mf') {
  const x2 = x + len;
  return `<line x1="${x}" y1="${y}" x2="${x2 - 7}" y2="${y}" class="${sc}"/>`
    + `<path d="M${x2 - 7} ${y - 4.5} L${x2} ${y} L${x2 - 7} ${y + 4.5} Z" class="${fc}"/>`;
}

// ---- compositions --------------------------------------------------------

function oddOneOut() {
  let s = '';
  [44, 96, 148].forEach(x => { s += `<circle cx="${x}" cy="58" r="18" class="dgbox"/>`; });
  s += `<rect x="212" y="40" width="36" height="36" rx="8" transform="rotate(45 230 58)" class="dgbox a"/>`;
  s += text(96, 104, 'commodities', 's') + text(230, 104, 'you', 'sa');
  return s;
}

function bars(items) {
  const base = 110, bw = 56, gap = (300 - items.length * bw) / (items.length + 1);
  let s = '';
  items.forEach((it, i) => {
    const x = gap + i * (bw + gap), h = it.h, y = base - h;
    s += `<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="6" class="bar ${it.cls || ''}"/>`;
    s += text(x + bw / 2, base + 18, it.label);
    if (it.sub) s += text(x + bw / 2, y - 7, it.sub, 's');
  });
  return s;
}

function targetRings(label) {
  let s = '';
  for (let i = 3; i >= 1; i--) s += `<circle cx="150" cy="58" r="${i * 20}" class="stroke ${i === 1 ? 'a' : ''}"/>`;
  s += `<circle cx="150" cy="58" r="8" class="af"/>`;
  s += text(150, 126, label, 's');
  return s;
}

function upTrend() {
  const base = 110;
  let s = '';
  [26, 44, 64, 88].forEach((h, i) => { s += `<rect x="${44 + i * 46}" y="${base - h}" width="34" height="${h}" rx="5" class="bar"/>`; });
  s += `<path d="M50 92 L214 34" class="stroke a"/><path d="M214 34 l-13 0 l5 11 z" class="af"/>`;
  s += text(150, 130, 'ride a growing market', 's');
  return s;
}

function funnel(topL, botL) {
  let s = `<path d="M36 36 L264 36 L184 92 L184 112 L116 112 L116 92 Z" class="dgbox a"/>`;
  s += text(150, 28, topL, 's') + text(150, 105, botL, 'big');
  return s;
}

function scale() {
  let s = `<path d="M150 92 l-15 20 l30 0 z" class="mf"/>`;        // fulcrum
  s += `<line x1="62" y1="58" x2="238" y2="78" class="stroke a"/>`; // tilted beam (value heavier)
  s += `<circle cx="72" cy="54" r="15" class="dgbox"/>` + text(72, 58, '$');
  s += `<circle cx="230" cy="82" r="21" class="dgbox a"/>` + text(230, 86, 'value', 's');
  s += text(72, 32, 'price', 's');
  return s;
}

function cycle(labels) {
  const y = 42, h = 44, w = 74, xs = [12, 113, 214];
  let s = '';
  labels.forEach((l, i) => {
    s += box(xs[i], y, w, h, l, 'dgbox' + (i === labels.length - 1 ? ' a' : ''));
    if (i < labels.length - 1) s += arrowR(xs[i] + w + 1, y + h / 2, xs[i + 1] - (xs[i] + w) - 3, 'stroke a', 'af');
  });
  s += `<path d="M249 ${y + h + 5} q3 24 -99 24 q-102 0 -99 -24" class="stroke a" fill="none"/>`;
  s += `<path d="M51 ${y + h + 28} l-7 -8 l13 -1 z" class="af"/>`;
  return s;
}

function equation() {
  let s = text(40, 70, 'Value', 'big') + text(80, 70, '=', 'big');
  s += `<line x1="96" y1="70" x2="288" y2="70" class="stroke a"/>`;
  s += text(192, 54, 'Dream ↑    Likelihood ↑', '');
  s += text(192, 92, 'Time ↓    Effort ↓', '');
  return s;
}

function perception() {
  let s = text(150, 26, 'same reality, better perception', 's');
  s += box(30, 48, 110, 30, 'logic', 'dgbox', 'costly');
  s += `<rect x="160" y="48" width="110" height="30" rx="8" class="dgbox a"/>`;
  s += `<rect x="164" y="52" width="64" height="22" rx="5" class="bar a"/>`;
  s += text(215, 67, 'psychology', '') + text(215, 96, 'cheap win', 's');
  return s;
}

function stack(baseLabel, addons) {
  const w = 156, x = 72, baseY = 102;
  let s = box(x, baseY, w, 28, baseLabel, 'dgbox a');
  addons.forEach((a, i) => { s += box(x + 10, baseY - (i + 1) * 25, w - 20, 21, a, 'dgbox'); });
  return s;
}

function giveaway() {
  let s = `<path d="M150 14 l4.5 11 12 1 -9 8.5 2.5 12 -10 -6.5 -10 6.5 2.5 -12 -9 -8.5 12 -1 z" class="gf"/>`;
  s += text(150, 52, '1 winner — free', 's');
  for (let i = 0; i < 8; i++) s += `<circle cx="${54 + i * 28}" cy="78" r="6" class="mf"/>`;
  s += text(150, 96, 'everyone who entered', 's');
  s += box(92, 104, 116, 28, 'discount offer', 'dgbox g', 'time-limited');
  return s;
}

function compareBoxes(lL, lS, rL, rS, hl = 'right') {
  const lc = 'dgbox' + (hl === 'left' ? ' a' : '');
  const rc = 'dgbox' + (hl === 'right' ? ' a' : '');
  return box(16, 38, 116, 72, lL, lc, lS) + arrowR(140, 74, 22, 'stroke a', 'af') + box(168, 38, 116, 72, rL, rc, rS);
}

function freePlus() {
  return box(14, 46, 76, 58, '$', 'dgbox a', 'you pay')
    + text(104, 80, '+', 'big')
    + box(118, 46, 76, 58, 'FREE', 'dgbox')
    + text(208, 80, '+', 'big')
    + box(212, 46, 76, 58, 'FREE', 'dgbox');
}

function crossoff() {
  let s = '';
  const rows = [['cross off', true], ['cross off', true], ['prescribe this', false]];
  rows.forEach((r, i) => {
    const y = 34 + i * 27;
    s += `<rect x="16" y="${y - 14}" width="150" height="22" rx="5" class="dgbox${r[1] ? '' : ' a'}"/>`;
    s += textL(28, y + 1, r[0], 's');
    if (r[1]) s += `<line x1="24" y1="${y - 3}" x2="158" y2="${y - 3}" class="stroke"/>`;
  });
  s += box(186, 38, 44, 44, 'A', 'dgbox') + box(240, 38, 44, 44, 'B', 'dgbox a');
  s += text(235, 104, 'A or B?', 's');
  return s;
}

function merge() {
  return box(14, 50, 84, 46, 'Past spend', 'dgbox', 'credit')
    + arrowR(102, 73, 40, 'stroke a', 'af')
    + box(150, 36, 136, 74, 'Bigger offer', 'dgbox a', 'credit applied');
}

function installments() {
  let s = text(150, 28, 'same price, split up', 's');
  const x = 24, w = 252, y = 48, h = 36, seg = w / 3;
  for (let i = 0; i < 3; i++) {
    s += `<rect x="${x + i * seg}" y="${y}" width="${seg - 6}" height="${h}" rx="6" class="dgbox a"/>`;
    s += text(x + i * seg + (seg - 6) / 2, y + h / 2 + 5, '$', 'big');
  }
  s += text(150, 110, 'on each payday', 's');
  return s;
}

function gate() {
  return box(14, 48, 74, 54, 'Free', 'dgbox', 'trial')
    + arrowR(90, 75, 22)
    + box(116, 40, 64, 70, 'use it', 'dgbox a', 'condition')
    + arrowR(182, 75, 22, 'stroke a', 'af')
    + box(210, 48, 76, 54, 'Converts', 'dgbox a');
}

function timeline(segs) {
  let s = text(150, 26, 'commit over time', 's');
  const x = 20, w = 260, y = 50, h = 38, sw = w / segs.length;
  segs.forEach((g, i) => {
    s += `<rect x="${x + i * sw}" y="${y}" width="${sw - 5}" height="${h}" rx="5" class="${g.cls || 'dgbox'}"/>`;
    s += text(x + i * sw + (sw - 5) / 2, y + h / 2 + 4, g.label, 's');
  });
  return s;
}

// N boxes left-to-right joined by arrows (optionally highlight one).
// Box width adapts to the count so 4-5 boxes still fit the 300-wide canvas.
function flow(labels, hl = -1) {
  const n = labels.length, gap = 12, w = (300 - (n + 1) * gap) / n, y = 46, h = 48;
  let s = '';
  labels.forEach((l, i) => {
    const x = gap + i * (w + gap);
    s += box(x, y, w, h, l, 'dgbox' + (i === hl ? ' a' : ''));
    if (i < n - 1) s += arrowR(x + w + 1, y + h / 2, gap - 2, 'stroke a', 'af');
  });
  return s;
}

// 2x2 matrix (warm/cold × one-to-one/one-to-many) for the Core Four
function quad() {
  const x = 80, y = 32, w = 100, h = 42, g = 8;
  const P = [[x, y], [x + w + g, y], [x, y + h + g], [x + w + g, y + h + g]];
  const L = [['Warm outreach', 'dgbox a'], ['Cold outreach', 'dgbox'],
    ['Post content', 'dgbox'], ['Paid ads', 'dgbox']];
  let s = '';
  L.forEach((l, i) => { s += box(P[i][0], P[i][1], w, h, l[0], l[1]); });
  s += text(x + w / 2, y - 9, 'WARM', 'sa') + text(x + w + g + w / 2, y - 9, 'COLD', 's');
  s += textL(6, y + h / 2 + 4, '1-to-1', 's') + textL(6, y + h + g + h / 2 + 4, '1-many', 's');
  return s;
}

// one node fanning out to N (one-to-many / multipliers)
function branch(center, items) {
  const cw = 88, cx = 8, midY = 70;
  let s = box(cx, midY - 26, cw, 52, center, 'dgbox a');
  const n = items.length, ih = 22, gp = 8, total = n * ih + (n - 1) * gp, start = midY - total / 2;
  items.forEach((it, i) => {
    const cy = start + ih / 2 + i * (ih + gp);
    s += `<line x1="${cx + cw}" y1="${midY}" x2="200" y2="${cy}" class="stroke a"/>`;
    s += box(202, cy - ih / 2, 88, ih, it, 'dgbox');
  });
  return s;
}

// ---- concept -> diagram --------------------------------------------------

const DIAGRAMS = {
  differentiate: oddOneOut,
  'market-pain': () => bars([{ label: 'NEED', sub: 'painkiller', h: 94, cls: 'a' }, { label: 'WANT', sub: 'vitamin', h: 32 }]),
  'market-purchasing-power': () => bars([{ label: 'big reach', sub: '$0', h: 30 }, { label: 'right buyer', sub: '$$$', h: 94, cls: 'a' }]),
  'market-targetable': () => targetRings('reach them where they gather'),
  'market-growing': upTrend,
  'pick-a-niche': () => funnel('everyone', 'your niche'),
  'price-vs-value': scale,
  'charge-premium': () => cycle(['Price ↑', 'Quality ↑', 'Results ↑']),
  'four-value-drivers': equation,
  'psychological-solutions': perception,
  'offer-build-5-steps': () => stack('Your Offer', ['solve a problem', 'solve a problem', 'solve a problem']),
  giveaways: giveaway,
  'decoy-offer': () => compareBoxes('Cheap', 'decoy', 'Premium', 'real result', 'right'),
  'buy-x-get-y-free': freePlus,
  'win-your-money-back': () => cycle(['Pay', 'Hit goal', 'Refund']),
  'pay-now-or-later': () => compareBoxes('Pay now', 'a little', '$0 now', 'pay if it works', 'right'),
  'menu-upsell': crossoff,
  'anchor-upsell': () => bars([{ label: 'anchor', sub: '$16k', h: 94 }, { label: 'your offer', sub: '$2k', h: 34, cls: 'a' }]),
  'rollover-upsell': merge,
  'classic-upsell': () => stack('Main purchase', ['+ upgrade', '+ add-on', '+ protection']),
  'payment-plan-downsell': installments,
  'free-trial-condition': gate,
  'feature-downsell': () => compareBoxes('Full', '$$$', 'Lite', 'fewer features', 'right'),
  'bonus-offer': () => stack('Membership', ['+ bonus', '+ bonus', '+ bonus']),
  'continuity-discount': () => timeline([{ label: 'FREE', cls: 'dgbox g' }, { label: '$' }, { label: '$' }, { label: '$' }, { label: '$' }]),
  'waved-fee-offer': () => compareBoxes('A: pay fee', 'quit = lose it', 'B: commit', 'fee waived', 'right'),

  // $100M Leads
  'engaged-leads': () => compareBoxes('Lead', 'contact info', 'Engaged', 'wants it', 'right'),
  'promote-or-die': () => flow(['Product', 'Promotion', 'Customers'], 1),
  'lead-magnet': () => flow(['Free win', 'Reveals B', 'Your offer'], 2),
  'lm-uncover-problem': () => flow(['Free audit', 'Find issue', 'Your fix'], 1),
  'lm-free-sample': () => compareBoxes('Sample', 'a taste', 'Full product', 'the rest', 'right'),
  'lm-first-step': () => flow(['Step 1 free', 'Step 2', 'Step 3'], 0),
  'give-away-secrets': () => bars([{ label: 'Free magnet', sub: 'value', h: 94, cls: 'a' }, { label: 'Paid product', sub: 'value', h: 62 }]),
  'core-four': quad,
  'warm-outreach': () => flow(['Reconnect', 'Build trust', 'Soft offer'], 2),
  'post-content': () => branch('1 post', ['reach', 'reach', 'reach', 'reach']),
  'cold-outreach': () => funnel('100 messages', 'a few leads'),
  'paid-ads': () => flow(['Call out', 'Value', 'CTA'], 2),
  'lead-getters': () => branch('You', ['Customers', 'Affiliates', 'Employees', 'Agencies']),
  'referrals': () => branch('Customer', ['friend', 'friend', 'friend']),
  'affiliates': () => flow(['Affiliate', 'Audience', 'Your leads'], 2),
  'employees': () => branch('Your team', ['lead', 'lead', 'lead']),
  'agencies': () => flow(['Agency', 'Runs ads', 'Leads'], 2),
};

export function diagramSVG(conceptId) {
  const fn = DIAGRAMS[conceptId];
  if (!fn) return '';
  return `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${fn()}</svg>`;
}

// Data-driven diagram: render from a concept's `diagram` spec object (used by the
// In-Depth book). Labels are clipped to keep them inside the boxes; box() font-fits.
const clip = (s, n = 14) => {
  s = String(s == null ? '' : s);
  return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s;
};

export function diagramSpecSVG(spec) {
  if (!spec || !spec.type) return '';
  let inner = '';
  switch (spec.type) {
    case 'flow': {
      const labs = spec.labels || [];
      const max = labs.length >= 5 ? 9 : labs.length >= 4 ? 11 : 16;
      inner = flow(labs.map(l => clip(l, max)), spec.hl ?? -1);
      break;
    }
    case 'compare':
      inner = compareBoxes(clip(spec.left), clip(spec.leftSub, 16), clip(spec.right), clip(spec.rightSub, 16), spec.hl || 'right');
      break;
    case 'bars': {
      const items = (spec.items || []).slice(0, 4);
      inner = bars(items.map(it => ({
        label: clip(it.label, 11),
        sub: (items.length <= 2 && it.sub) ? clip(it.sub, 14) : '',
        h: it.big ? 94 : 52,
        cls: it.big ? 'a' : '',
      })));
      break;
    }
    case 'branch':
      inner = branch(clip(spec.center, 12), (spec.items || []).slice(0, 4).map(i => clip(i, 13)));
      break;
    case 'funnel':
      inner = funnel(clip(spec.top, 16), clip(spec.bottom, 12));
      break;
    case 'cycle':
      inner = cycle((spec.labels || []).slice(0, 3).map(l => clip(l, 12)));
      break;
    case 'stack':
      inner = stack(clip(spec.base, 16), (spec.items || []).slice(0, 4).map(i => clip(i)));
      break;
    default:
      return '';
  }
  return `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${inner}</svg>`;
}
