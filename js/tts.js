// Read-aloud engine built on the Web Speech API (SpeechSynthesis) — the most
// reliable, fully-offline TTS available in the browser. Handles the common
// gotchas: long-text cutoff (chunk by sentence), Chrome's ~15s pause bug
// (keep-alive resume), and stale callbacks after seek/stop (generation guard).

// ---- Pure: build an audiobook "script" from a concept (testable in Node) ----

const clean = (s) => String(s)
  .replace(/→/g, ' then ')
  .replace(/[•◆✕✓★☆]/g, '')
  .replace(/\s[—–]\s/g, ', ')
  .replace(/\s+/g, ' ')
  .trim();

// Returns ordered segments; the concept view tags matching blocks with data-seg
// indices so the spoken segment can be highlighted in sync.
export function buildConceptScript(c) {
  const list = (items) =>
    items.map(clean).map(t => (/[.!?]$/.test(t) ? t : t + '.')).join(' ');
  return [
    { label: 'Overview', text: `${clean(c.title)}. ${clean(c.hook)}` },
    { label: 'The principle', text: clean(c.principle) },
    { label: 'Why it works', text: clean(c.why) },
    { label: 'Coach’s note', text: clean(c.coachNote) },
    { label: 'Story', text: clean(c.story) },
    { label: 'Apply it', text: clean(c.apply) },
    { label: 'Real-world examples', text: `Real-world examples. ${list(c.examples)}` },
    { label: 'Case studies', text: `Case studies. ${list(c.cases)}` },
    { label: 'Common mistakes', text: `Common mistakes. ${list(c.mistakes)}` },
    { label: 'By the numbers', text: `By the numbers. ${list(c.stats)}` },
    { label: 'Action checklist', text: `Action checklist. ${list(c.actions)}` },
  ];
}

export function isSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

// Split a segment into speakable chunks (sentence-sized, length-capped).
function chunkText(text) {
  const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];
  const out = [];
  for (let s of sentences) {
    s = s.trim();
    if (!s) continue;
    while (s.length > 220) {
      let cut = s.lastIndexOf(',', 220);
      if (cut < 80) cut = s.lastIndexOf(' ', 220);
      if (cut < 80) cut = 220;
      out.push(s.slice(0, cut).trim());
      s = s.slice(cut).trim();
    }
    out.push(s);
  }
  return out;
}

// ---- Controller ----------------------------------------------------------

export function createTTS(store) {
  const supported = isSupported();
  const synth = supported ? window.speechSynthesis : null;

  let state = { items: [], i: 0, seg: 0, playing: false, paused: false };
  let gen = 0;            // bumped on any cancel/seek so stale callbacks no-op
  let keepAlive = null;
  let onAdvance = null;   // (conceptId) => void, for follow-along navigation

  const subs = new Set();
  const voiceSubs = new Set();

  const snapshot = () => {
    const item = state.items[state.i];
    return {
      supported,
      playing: state.playing,
      paused: state.paused,
      conceptId: item ? item.conceptId : null,
      title: item ? item.title : null,
      seg: state.seg,
      total: item ? item.segments.length : 0,
      label: item && item.segments[state.seg] ? item.segments[state.seg].label : null,
      hasPlaylist: state.items.length > 1,
      index: state.i,
      count: state.items.length,
    };
  };
  const emit = () => subs.forEach(fn => fn(snapshot()));
  const getVoices = () => (supported ? synth.getVoices() : []);
  const emitVoices = () => voiceSubs.forEach(fn => fn(getVoices()));

  if (supported) {
    getVoices();
    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', emitVoices);
    }
  }

  function pickVoice() {
    const voices = getVoices();
    if (!voices.length) return null;
    const want = store.get().audio.voiceURI;
    if (want) { const v = voices.find(x => x.voiceURI === want); if (v) return v; }
    const lang = (navigator.language || 'en').slice(0, 2).toLowerCase();
    const priority = ['natural', 'neural', 'premium', 'enhanced', 'google', 'siri',
      'samantha', 'aria', 'jenny', 'libby', 'sonia', 'eva', 'zira'];
    const byLang = voices.filter(v => (v.lang || '').toLowerCase().startsWith(lang));
    const pool = byLang.length ? byLang : voices;
    for (const key of priority) {
      const v = pool.find(x => x.name.toLowerCase().includes(key));
      if (v) return v;
    }
    return pool.find(v => v.default) || pool[0];
  }

  function applyVoice(u) {
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = store.get().audio.rate || 1;
    u.pitch = 1;
  }

  function startKeepAlive() {
    stopKeepAlive();
    keepAlive = setInterval(() => {
      if (state.playing && !state.paused) { try { synth.resume(); } catch {} }
    }, 9000);
  }
  function stopKeepAlive() { if (keepAlive) { clearInterval(keepAlive); keepAlive = null; } }

  function speakSegment() {
    if (!supported) return;
    gen++; const myGen = gen;
    try { synth.cancel(); } catch {}

    let item = state.items[state.i];
    if (!item) { return finishAll(); }
    if (state.seg >= item.segments.length) {       // roll to next item
      state.i++; state.seg = 0;
      item = state.items[state.i];
      if (!item) { return finishAll(); }
      if (onAdvance) onAdvance(item.conceptId);
    }
    emit();

    const chunks = chunkText(item.segments[state.seg].text);
    let ci = 0;
    const next = () => {
      if (myGen !== gen) return;
      if (ci >= chunks.length) { state.seg++; return speakSegment(); }
      const u = new SpeechSynthesisUtterance(chunks[ci++]);
      applyVoice(u);
      u.onend = () => { if (myGen === gen) next(); };
      u.onerror = () => { if (myGen === gen) next(); };
      try { synth.speak(u); } catch {}
    };
    next();
  }

  function finishAll() {
    state.playing = false; state.paused = false; state.i = 0; state.seg = 0;
    stopKeepAlive(); emit();
  }

  function play(items, i = 0, seg = 0) {
    if (!supported || !items.length) return;
    state.items = items; state.i = i; state.seg = seg;
    state.playing = true; state.paused = false;
    startKeepAlive();
    speakSegment();
  }

  function pause() { if (!state.playing) return; try { synth.pause(); } catch {}; state.paused = true; emit(); }
  function resume() { try { synth.resume(); } catch {}; state.playing = true; state.paused = false; emit(); }

  function togglePlay() {
    if (!state.items.length) return;
    if (state.playing && !state.paused) return pause();
    if (state.playing && state.paused) return resume();
    play(state.items, state.i, state.seg);   // was finished/stopped
  }

  function next() {
    if (!state.items.length) return;
    state.playing = true; state.paused = false;
    state.seg++; speakSegment();
  }
  function prev() {
    if (!state.items.length) return;
    state.playing = true; state.paused = false;
    if (state.seg > 0) state.seg--;
    else if (state.i > 0) { state.i--; state.seg = 0; }
    speakSegment();
  }

  function stop() {
    gen++; try { synth.cancel(); } catch {}
    stopKeepAlive();
    state = { items: [], i: 0, seg: 0, playing: false, paused: false };
    emit();
  }

  function setRate(r) { store.setAudio({ rate: r }); if (state.playing) speakSegment(); else emit(); }
  function setVoice(uri) { store.setAudio({ voiceURI: uri }); if (state.playing) speakSegment(); else emit(); }

  return {
    supported,
    play, togglePlay, pause, resume, next, prev, stop, setRate, setVoice,
    getState: snapshot,
    getVoices,
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },
    onVoices(fn) { voiceSubs.add(fn); fn(getVoices()); return () => voiceSubs.delete(fn); },
    setOnAdvance(fn) { onAdvance = fn; },
  };
}
