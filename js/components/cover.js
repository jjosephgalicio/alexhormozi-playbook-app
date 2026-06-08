// Generative cover art — fully offline "stock images". Each module has its own
// sophisticated duotone + a thematic geometric motif; each concept gets a unique
// but on-theme variation (seeded by its id). Returns an inline SVG string.

export const MODULE_THEMES = {
  product:     { c1: '#0E5A4E', c2: '#7FC0AF', motif: 'arcs',  label: 'Product' },
  market:      { c1: '#9A5B2A', c2: '#E7B27E', motif: 'rings', label: 'Market' },
  pricing:     { c1: '#14533B', c2: '#D2AC54', motif: 'bars',  label: 'Pricing' },
  'the-offer': { c1: '#5A2A52', c2: '#C091B8', motif: 'stack', label: 'The Offer' },
  attraction:  { c1: '#A8431F', c2: '#EDA677', motif: 'burst', label: 'Attraction' },
  upsell:      { c1: '#243A6B', c2: '#8AA0DC', motif: 'rise',  label: 'Upsell' },
  downsell:    { c1: '#2F5552', c2: '#8FB0A9', motif: 'fall',  label: 'Downsell' },
  continuity:  { c1: '#2C4A24', c2: '#9BBC74', motif: 'loop',  label: 'Continuity' },
  // $100M Leads
  'leads-understanding': { c1: '#1F5C8B', c2: '#82B2D6', motif: 'rings', label: 'Understanding' },
  'lead-magnets':        { c1: '#8E2F5A', c2: '#CF8BAC', motif: 'burst', label: 'Lead Magnets' },
  'core-four':           { c1: '#176C72', c2: '#77C3C7', motif: 'stack', label: 'The Core Four' },
  'lead-getters':        { c1: '#9C6B1E', c2: '#E2B86E', motif: 'rise',  label: 'Lead Getters' },
};

const FALLBACK = { c1: '#3A4A57', c2: '#9FB0BC', motif: 'arcs', label: '' };

let _uid = 0;

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
// Seeded PRNG so each concept's art is deterministic (stable offline).
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 400, H = 230;
const r2 = (n) => Math.round(n * 100) / 100;

function motifMarkup(motif, c2, rnd) {
  const jit = (n) => r2((rnd() - 0.5) * n);
  const white = (o) => `#ffffff${Math.round(o * 255).toString(16).padStart(2, '0')}`;
  let s = '';

  if (motif === 'arcs') {
    const cx = 340 + jit(30), cy = 215 + jit(20);
    for (let i = 5; i >= 0; i--)
      s += `<circle cx="${cx}" cy="${cy}" r="${40 + i * 38}" fill="none" stroke="${white(0.13)}" stroke-width="2.5"/>`;
    s += `<circle cx="${r2(70 + jit(40))}" cy="${r2(60 + jit(30))}" r="34" fill="${c2}" opacity="0.6"/>`;
  } else if (motif === 'rings') {
    const cx = 300 + jit(40), cy = 110 + jit(30);
    for (let i = 0; i < 6; i++)
      s += `<circle cx="${cx}" cy="${cy}" r="${18 + i * 26}" fill="none" stroke="${white(0.14)}" stroke-width="2.5"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="11" fill="${c2}"/>`;
  } else if (motif === 'bars') {
    const base = 200, n = 6, bw = 34, gap = 20, x0 = 70 + jit(20);
    for (let i = 0; i < n; i++) {
      const h = 36 + i * 26 + jit(18);
      s += `<rect x="${r2(x0 + i * (bw + gap))}" y="${r2(base - h)}" width="${bw}" height="${r2(h)}" rx="5" fill="${i === n - 1 ? c2 : white(0.16)}" ${i === n - 1 ? 'opacity="0.75"' : ''}/>`;
    }
  } else if (motif === 'stack') {
    const n = 5;
    for (let i = 0; i < n; i++)
      s += `<rect x="${r2(120 + i * 6 + jit(8))}" y="${r2(40 + i * 32)}" width="200" height="26" rx="8" fill="${i === 2 ? c2 : white(0.14)}" ${i === 2 ? 'opacity="0.7"' : ''}/>`;
  } else if (motif === 'burst') {
    const cx = 200 + jit(40), cy = 115 + jit(20), rays = 12, rot = rnd() * 30;
    for (let i = 0; i < rays; i++) {
      const a = (i / rays) * Math.PI * 2 + rot;
      s += `<line x1="${cx}" y1="${cy}" x2="${r2(cx + Math.cos(a) * 150)}" y2="${r2(cy + Math.sin(a) * 150)}" stroke="${white(0.12)}" stroke-width="2.5"/>`;
    }
    s += `<circle cx="${cx}" cy="${cy}" r="26" fill="${c2}" opacity="0.8"/>`;
  } else if (motif === 'rise' || motif === 'fall') {
    const n = 5, bw = 50, gap = 14, x0 = 60 + jit(14), base = 195;
    for (let i = 0; i < n; i++) {
      const step = motif === 'rise' ? i : (n - 1 - i);
      const h = 34 + step * 30;
      s += `<rect x="${r2(x0 + i * (bw + gap))}" y="${r2(base - h)}" width="${bw}" height="${r2(h)}" rx="6" fill="${step === n - 1 ? c2 : white(0.15)}" ${step === n - 1 ? 'opacity="0.75"' : ''}/>`;
    }
  } else if (motif === 'loop') {
    const cx = 210 + jit(30), cy = 115, rr = 64;
    s += `<circle cx="${cx}" cy="${cy}" r="${rr}" fill="none" stroke="${white(0.16)}" stroke-width="9"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="${rr + 22}" fill="none" stroke="${white(0.08)}" stroke-width="3"/>`;
    // arrow head
    s += `<path d="M ${cx + rr - 8} ${cy - 14} l 16 8 l -16 10 z" fill="${c2}"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="16" fill="${c2}" opacity="0.5"/>`;
  }
  return s;
}

// moduleId selects the palette/motif; seed (usually the concept id) varies it.
export function coverSVG(moduleId, seed = '') {
  const t = MODULE_THEMES[moduleId] || FALLBACK;
  const id = ++_uid;
  const rnd = mulberry32(hashStr(moduleId + '|' + seed));
  const angle = Math.floor(rnd() * 90);
  const motif = motifMarkup(t.motif, t.c2, rnd);

  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
<defs>
<linearGradient id="g${id}" gradientTransform="rotate(${angle} 0.5 0.5)">
<stop offset="0" stop-color="${t.c1}"/>
<stop offset="1" stop-color="${shade(t.c1, -28)}"/>
</linearGradient>
<radialGradient id="v${id}" cx="0.5" cy="0.42" r="0.75">
<stop offset="0.55" stop-color="#000000" stop-opacity="0"/>
<stop offset="1" stop-color="#000000" stop-opacity="0.28"/>
</radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#g${id})"/>
${motif}
<rect width="${W}" height="${H}" fill="url(#v${id})"/>
</svg>`;
}

// darken/lighten a hex by amt (-100..100)
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const r = clamp((n >> 16) + amt), g = clamp(((n >> 8) & 255) + amt), b = clamp((n & 255) + amt);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
