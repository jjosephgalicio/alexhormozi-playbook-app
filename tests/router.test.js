import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseHash } from '../js/router.js';

test('empty hash -> home', () => {
  assert.deepEqual(parseHash(''), { name: 'home', param: null });
  assert.deepEqual(parseHash('#/'), { name: 'home', param: null });
  assert.deepEqual(parseHash('#'), { name: 'home', param: null });
});

test('named routes', () => {
  assert.deepEqual(parseHash('#/library'), { name: 'library', param: null });
  assert.deepEqual(parseHash('#/tools'), { name: 'tools', param: null });
  assert.deepEqual(parseHash('#/saved'), { name: 'saved', param: null });
});

test('concept route carries id param', () => {
  assert.deepEqual(parseHash('#/concept/anchor-upsell'),
    { name: 'concept', param: 'anchor-upsell' });
});

test('unknown route -> home', () => {
  assert.deepEqual(parseHash('#/nope'), { name: 'home', param: null });
});
