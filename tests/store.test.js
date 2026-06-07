import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createStore } from '../js/store.js';

function memoryBackend(seed) {
  const m = new Map(seed ? [['hpb.v1', seed]] : []);
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, v), _m: m };
}

test('defaults are sane', () => {
  const s = createStore(memoryBackend());
  assert.equal(s.get().theme, 'light');
  assert.deepEqual(s.get().bookmarks, []);
  assert.deepEqual(s.get().streak, { count: 0, lastActiveDate: null });
});

test('toggleBookmark adds then removes', () => {
  const s = createStore(memoryBackend());
  s.toggleBookmark('giveaways');
  assert.deepEqual(s.get().bookmarks, ['giveaways']);
  assert.equal(s.isBookmarked('giveaways'), true);
  s.toggleBookmark('giveaways');
  assert.deepEqual(s.get().bookmarks, []);
});

test('markLearned records a timestamp and persists across reload', () => {
  const be = memoryBackend();
  const s = createStore(be);
  s.markLearned('decoy-offer', '2026-06-07');
  assert.equal(s.get().progress['decoy-offer'].learnedAt, '2026-06-07');
  const s2 = createStore(be);
  assert.equal(s2.isLearned('decoy-offer'), true);
});

test('unmarkLearned removes it', () => {
  const s = createStore(memoryBackend());
  s.markLearned('decoy-offer', '2026-06-07');
  s.unmarkLearned('decoy-offer');
  assert.equal(s.isLearned('decoy-offer'), false);
});

test('setNote stores and clears on empty', () => {
  const s = createStore(memoryBackend());
  s.setNote('anchor-upsell', 'try on suits');
  assert.equal(s.get().notes['anchor-upsell'], 'try on suits');
  s.setNote('anchor-upsell', '   ');
  assert.equal(s.get().notes['anchor-upsell'], undefined);
});

test('toggleChecklistItem persists by index', () => {
  const s = createStore(memoryBackend());
  s.toggleChecklistItem('anchor-upsell', 2, true);
  assert.equal(s.get().checklists['anchor-upsell'][2], true);
});

test('builder drafts save (update) and delete', () => {
  const s = createStore(memoryBackend());
  s.saveBuilderDraft('offer', { id: 'a', name: 'One' });
  s.saveBuilderDraft('offer', { id: 'a', name: 'Updated' });
  assert.equal(s.get().builders.offer.length, 1);
  assert.equal(s.get().builders.offer[0].name, 'Updated');
  s.deleteBuilderDraft('offer', 'a');
  assert.equal(s.get().builders.offer.length, 0);
});

test('subscribe fires on change and can unsubscribe', () => {
  const s = createStore(memoryBackend());
  let n = 0;
  const off = s.subscribe(() => n++);
  s.toggleBookmark('x');
  assert.equal(n, 1);
  off();
  s.toggleBookmark('y');
  assert.equal(n, 1);
});

test('corrupt backend data falls back to defaults', () => {
  const s = createStore(memoryBackend('{not json'));
  assert.equal(s.get().theme, 'light');
});
