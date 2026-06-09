import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTTS } from '../js/tts.js';

// --- mock Web Speech API ---------------------------------------------------
class MockUtterance {
  constructor(text) { this.text = text; this.onend = null; this.onerror = null; }
}
let calls = [];
let current = null;
const synth = {
  paused: false,
  getVoices: () => [{ voiceURI: 'v1', name: 'Test Natural', lang: 'en-US', default: true }],
  addEventListener: () => {},
  cancel() { calls.push('cancel'); current = null; },
  speak(u) { calls.push('speak'); current = u; },
  pause() { calls.push('pause'); this.paused = true; },
  resume() { calls.push('resume'); this.paused = false; },
};
globalThis.window = { speechSynthesis: synth };
globalThis.SpeechSynthesisUtterance = MockUtterance;

function fireEnd() { const u = current; current = null; if (u && u.onend) u.onend(); }
function reset() { calls = []; current = null; synth.paused = false; }
function newStore() {
  return { _a: { voiceURI: null, rate: 1 }, get() { return { audio: this._a }; }, setAudio(p) { Object.assign(this._a, p); } };
}
const item = (id = 'x') => ({
  conceptId: id, title: 'X',
  segments: [{ label: 'Overview', text: 'One.' }, { label: 'B', text: 'Two.' }, { label: 'C', text: 'Three.' }],
});

test('supported in mock env', () => { reset(); const tts = createTTS(newStore()); assert.equal(tts.supported, true); });

test('play starts and reports state', () => {
  reset(); const tts = createTTS(newStore());
  tts.play([item()]);
  const s = tts.getState();
  assert.equal(s.playing, true);
  assert.equal(s.paused, false);
  assert.equal(s.seg, 0);
  assert.equal(s.total, 3);
  assert.equal(s.label, 'Overview');
  assert.equal(s.count, 1);
  assert.ok(calls.includes('speak'));
});

test('segments advance on utterance end, then finishes', () => {
  reset(); const tts = createTTS(newStore());
  tts.play([item()]);
  fireEnd(); assert.equal(tts.getState().seg, 1);
  fireEnd(); assert.equal(tts.getState().seg, 2);
  fireEnd(); assert.equal(tts.getState().playing, false);  // finished
});

test('pause then resume', () => {
  reset(); const tts = createTTS(newStore());
  tts.play([item()]);
  tts.pause();
  assert.equal(tts.getState().paused, true);
  assert.ok(calls.includes('pause'));
  tts.resume();
  assert.equal(tts.getState().paused, false);
});

test('paused then next resumes the engine (Chrome quirk fix)', () => {
  reset(); const tts = createTTS(newStore());
  tts.play([item()]);
  tts.pause();
  calls = [];
  tts.next();
  const ci = calls.indexOf('cancel'), ri = calls.indexOf('resume'), si = calls.indexOf('speak');
  assert.ok(ci >= 0 && ri > ci && si > ri, `expected cancel<resume<speak, got ${calls}`);
  assert.equal(tts.getState().paused, false);
});

test('setRate while paused does not un-pause or speak', () => {
  reset(); const store = newStore(); const tts = createTTS(store);
  tts.play([item()]);
  tts.pause();
  calls = [];
  tts.setRate(1.3);
  assert.equal(store.get().audio.rate, 1.3);
  assert.equal(tts.getState().paused, true);
  assert.ok(!calls.includes('speak'), `should not speak while paused, got ${calls}`);
});

test('stop clears the queue', () => {
  reset(); const tts = createTTS(newStore());
  tts.play([item()]);
  tts.stop();
  const s = tts.getState();
  assert.equal(s.count, 0);
  assert.equal(s.playing, false);
});

test('playlist auto-advances to the next concept', () => {
  reset(); const tts = createTTS(newStore());
  const advanced = [];
  tts.setOnAdvance(id => advanced.push(id));
  tts.play([item('a'), item('b')]);
  fireEnd(); fireEnd(); fireEnd();   // drain all 3 segments of 'a'
  assert.deepEqual(advanced, ['b']);
  assert.equal(tts.getState().conceptId, 'b');
});

test('currentVoiceURI returns a voice', () => {
  reset(); const tts = createTTS(newStore());
  assert.equal(tts.currentVoiceURI(), 'v1');
});
