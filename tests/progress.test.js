import { test } from 'node:test';
import assert from 'node:assert/strict';
import { progressPct, nextStreak } from '../js/progress.js';

test('progressPct rounds learned/total', () => {
  assert.equal(progressPct(0, 25), 0);
  assert.equal(progressPct(25, 25), 100);
  assert.equal(progressPct(1, 25), 4);
  assert.equal(progressPct(13, 26), 50);
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

test('handles month boundary as consecutive', () => {
  assert.deepEqual(nextStreak({ count: 2, lastActiveDate: '2026-05-31' }, '2026-06-01'),
    { count: 3, lastActiveDate: '2026-06-01' });
});
