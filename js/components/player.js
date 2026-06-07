// Persistent audiobook player bar. Created once and appended to <body> so it keeps
// playing across view changes. Subscribes to the TTS controller for state + voices.

import { el } from '../util.js';

const RATES = [0.8, 1, 1.15, 1.3, 1.5, 1.75];

export function createPlayer(tts, store) {
  const title = el('div', { class: 'player-title' }, '');
  const sub = el('div', { class: 'player-sub' }, '');
  const bar = el('div', { class: 'player-bar-fill' });

  const playBtn = el('button', { class: 'pl-btn pl-play', 'aria-label': 'Play or pause' }, '▶');
  const prevBtn = el('button', { class: 'pl-btn', 'aria-label': 'Previous section', onclick: () => tts.prev() }, '⏮');
  const nextBtn = el('button', { class: 'pl-btn', 'aria-label': 'Next section', onclick: () => tts.next() }, '⏭');
  playBtn.addEventListener('click', () => tts.togglePlay());

  const rateBtn = el('button', { class: 'pl-chip', 'aria-label': 'Playback speed', onclick: () => {
    const cur = store.get().audio.rate || 1;
    const idx = RATES.indexOf(cur);
    tts.setRate(RATES[(idx + 1) % RATES.length]);
  } }, '1×');

  const voiceSel = el('select', { class: 'pl-voice', 'aria-label': 'Voice' });
  voiceSel.addEventListener('change', () => tts.setVoice(voiceSel.value));

  const closeBtn = el('button', { class: 'pl-btn pl-close', 'aria-label': 'Close player', onclick: () => tts.stop() }, '✕');

  const root = el('div', { class: 'player', hidden: true, role: 'region', 'aria-label': 'Audiobook player' },
    el('div', { class: 'player-bar' }, bar),
    el('div', { class: 'player-row1' }, title, sub),
    el('div', { class: 'player-row2' },
      el('div', { class: 'pl-group' }, prevBtn, playBtn, nextBtn),
      el('div', { class: 'pl-spacer' }),
      el('div', { class: 'pl-group' }, rateBtn, voiceSel, closeBtn)));

  // populate voice list (re-runs when the browser loads voices)
  tts.onVoices((voices) => {
    const want = store.get().audio.voiceURI;
    voiceSel.replaceChildren(
      ...voices.map(v => el('option', { value: v.voiceURI }, `${v.name} (${v.lang})`)));
    if (want && voices.some(v => v.voiceURI === want)) voiceSel.value = want;
  });

  tts.subscribe((s) => {
    root.hidden = s.count === 0;
    document.body.classList.toggle('player-open', s.count > 0);
    playBtn.textContent = (s.playing && !s.paused) ? '⏸' : '▶';
    title.textContent = s.title || '';
    const parts = [];
    if (s.label) parts.push(s.label);
    if (s.total) parts.push(`${s.seg + 1} / ${s.total}`);
    if (s.hasPlaylist) parts.push(`track ${s.index + 1} of ${s.count}`);
    sub.textContent = parts.join('  ·  ');
    bar.style.width = s.total ? `${Math.round(((s.seg + 1) / s.total) * 100)}%` : '0%';
    rateBtn.textContent = `${store.get().audio.rate || 1}×`;
    const want = store.get().audio.voiceURI;
    if (want && voiceSel.value !== want) voiceSel.value = want;
  });

  rateBtn.textContent = `${store.get().audio.rate || 1}×`;
  return root;
}
