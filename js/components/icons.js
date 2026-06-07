// Offline line-style industry icons + a keyword matcher, so every example gets a
// relevant visual cue for visual learners. 24x24, stroke = currentColor.

const ICONS = {
  fitness:  '<path d="M2 9v6M5 7v10M19 7v10M22 9v6M5 12h14"/>',
  coffee:   '<path d="M4 8h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M16 9h2.5a2.5 2.5 0 0 1 0 5H16"/><path d="M7 2.5v2M10 2.5v2M13 2.5v2"/>',
  food:     '<circle cx="11" cy="12" r="7.5"/><path d="M20 4v16M20 4c-1.3.6-2 2-2 3.6S18.7 11 20 11"/>',
  software: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/>',
  home:     '<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
  car:      '<path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13"/><path d="M4 13h16v4H4z"/><circle cx="7.5" cy="17.5" r="1.4"/><circle cx="16.5" cy="17.5" r="1.4"/>',
  beauty:   '<path d="M12 3l1.9 5.5L19.5 10l-5.6 1.5L12 17l-1.9-5.5L4.5 10l5.6-1.5z"/>',
  pet:      '<circle cx="7" cy="9" r="1.5"/><circle cx="12" cy="7.5" r="1.5"/><circle cx="17" cy="9" r="1.5"/><path d="M12 11c-3 0-5 2.2-5 4.5S9 19 12 19s5-1.2 5-3.5S15 11 12 11z"/>',
  camera:   '<rect x="3" y="7" width="18" height="12" rx="2"/><circle cx="12" cy="13" r="3.2"/><path d="M8.5 7l1.2-2h4.6l1.2 2"/>',
  finance:  '<path d="M4 19V5M4 19h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
  education:'<path d="M3 8l9-4 9 4-9 4z"/><path d="M7 10.5V15c0 1 2.2 2 5 2s5-1 5-2v-4.5"/>',
  retail:   '<path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  health:   '<path d="M12 20s-7-4.4-7-9.4A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.6C19 15.6 12 20 12 20z"/>',
  gift:     '<rect x="4" y="9" width="16" height="11" rx="1"/><path d="M3 9h18M12 9v11M12 9C9.5 9 8 5.5 9.8 4.2S13 7 12 9c-1-2 .8-4.8 2.6-3.6S15 9 12 9"/>',
  briefcase:'<rect x="3" y="8" width="18" height="11" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  spark:    '<path d="M12 4l1.6 5.4L19 11l-5.4 1.6L12 18l-1.6-5.4L5 11l5.4-1.6z"/>',
};

// ordered most-specific first
const RULES = [
  ['fitness',  ['gym', 'fitness', 'trainer', 'workout', 'crossfit', 'weight loss', 'weight-loss', 'shred', 'challenge']],
  ['coffee',   ['coffee', 'café', 'cafe', 'latte', 'espresso']],
  ['food',     ['restaurant', 'meal', 'grocery', 'catering', 'entrée', 'entree', 'pizza', 'bread', 'buffet', 'chef', 'cook', 'recipe', 'food']],
  ['beauty',   ['salon', 'spa', 'med spa', 'med-spa', 'botox', 'facial', 'whiten', 'dentist', 'teeth', 'jewel', 'ring', 'hair', 'gloss', 'nail']],
  ['camera',   ['photograph', 'camera', 'photo', 'wedding', 'video']],
  ['car',      ['car ', 'cars', 'rental', 'dealer', 'mechanic', 'detailer', 'detail ', 'auto', ' ev ', 'vehicle', 'truck']],
  ['pet',      ['pet', 'dog', 'cat ', 'vet ', 'veterin']],
  ['home',     ['plumb', 'roof', 'renovat', 'remodel', 'landscap', 'lawn', 'furniture', 'mattress', 'locksmith', 'real estate', 'realtor', 'apartment', 'trash', 'kitchen remodel', 'home ', 'house']],
  ['software', ['saas', 'software', 'app ', ' app', 'platform', 'website', 'web ', 'tool', 'funnel', 'landing', 'dashboard', 'tech', 'online tool']],
  ['education',['course', 'tutor', 'bootcamp', 'coaching', 'coach', 'language', 'mba', 'mastermind', 'workshop', 'class', 'curriculum', 'student', 'learn']],
  ['finance',  ['seo', 'agency', 'consult', 'b2b', 'bookkeep', 'tax', 'invest', 'financial', 'advisor', 'lead', 'sales', 'revenue', 'retainer']],
  ['health',   ['supplement', 'telehealth', 'health', 'wellness', 'nutrition', 'protein', 'vitamin']],
  ['gift',     ['giveaway', 'prize', 'contest', 'win ', 'sweepstake', 'raffle', 'free year']],
  ['retail',   ['store', 'shop', 'retail', 'boot', 'shirt', 'sock', 'product', 'bike', 'camera store', 'e-commerce', 'ecommerce', 'subscription box']],
];

export function pickIcon(text) {
  const t = ' ' + String(text).toLowerCase() + ' ';
  for (const [name, keys] of RULES) if (keys.some(k => t.includes(k))) return name;
  return 'spark';
}

export function icon(name, cls = '') {
  const inner = ICONS[name] || ICONS.spark;
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

export function iconFor(text, cls = '') { return icon(pickIcon(text), cls); }
