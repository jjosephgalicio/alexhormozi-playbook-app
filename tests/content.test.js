import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BOOKS } from '../js/data/content.js';

const concepts = BOOKS.flatMap(b => b.modules.flatMap(m => m.concepts));
const ids = concepts.map(c => c.id);

test('two books with stable ids', () => {
  assert.equal(BOOKS.length, 2);
  assert.deepEqual(BOOKS.map(b => b.id), ['offers', 'money-models']);
});

test('every book and module has title + summary/tagline', () => {
  for (const b of BOOKS) {
    assert.ok(b.title && b.subtitle && b.tagline, `book ${b.id} missing meta`);
    for (const m of b.modules)
      assert.ok(m.title && m.summary, `module ${m.id} missing meta`);
  }
});

test('at least 24 concepts', () => {
  assert.ok(concepts.length >= 24, `only ${concepts.length} concepts`);
});

test('concept ids are unique and slug-shaped', () => {
  assert.equal(new Set(ids).size, ids.length, 'duplicate id');
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/, `bad id: ${id}`);
});

test('every concept has all required non-empty text fields', () => {
  for (const c of concepts) {
    for (const f of ['id', 'title', 'hook', 'principle', 'why', 'story', 'apply']) {
      assert.ok(typeof c[f] === 'string' && c[f].trim().length > 0, `${c.id}.${f} empty`);
    }
  }
});

test('every concept has rich examples and actions', () => {
  for (const c of concepts) {
    assert.ok(Array.isArray(c.examples) && c.examples.length >= 3,
      `${c.id} needs >=3 examples, has ${c.examples?.length}`);
    assert.ok(c.examples.every(e => typeof e === 'string' && e.trim()),
      `${c.id} has an empty example`);
    assert.ok(Array.isArray(c.actions) && c.actions.length >= 2,
      `${c.id} needs >=2 actions`);
    assert.ok(Array.isArray(c.related), `${c.id}.related missing`);
  }
});

test('every concept has research enrichment (coachNote, mistakes, stats, cases)', () => {
  for (const c of concepts) {
    assert.ok(typeof c.coachNote === 'string' && c.coachNote.trim().length > 0,
      `${c.id}.coachNote empty`);
    for (const field of ['mistakes', 'stats', 'cases']) {
      assert.ok(Array.isArray(c[field]) && c[field].length >= 2,
        `${c.id}.${field} needs >=2 entries, has ${c[field]?.length}`);
      assert.ok(c[field].every(e => typeof e === 'string' && e.trim()),
        `${c.id}.${field} has an empty entry`);
    }
  }
});

test('every related id resolves to a real concept', () => {
  const set = new Set(ids);
  for (const c of concepts)
    for (const r of c.related) assert.ok(set.has(r), `${c.id} -> unknown ${r}`);
});
