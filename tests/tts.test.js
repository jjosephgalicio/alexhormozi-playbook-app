import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildConceptScript } from '../js/tts.js';
import { BOOKS } from '../js/data/content.js';

const sample = BOOKS[1].modules[0].concepts[0]; // money-models -> attraction -> giveaways

test('script has the 11 expected ordered segments', () => {
  const s = buildConceptScript(sample);
  assert.equal(s.length, 11);
  assert.deepEqual(s.map(x => x.label), [
    'Overview', 'The principle', 'Why it works', 'Coach’s note', 'Story', 'Apply it',
    'Real-world examples', 'Case studies', 'Common mistakes', 'By the numbers', 'Action checklist',
  ]);
});

test('overview segment includes the title and hook', () => {
  const s = buildConceptScript(sample);
  assert.ok(s[0].text.includes(sample.title));
});

test('arrows and bullets are cleaned for natural speech', () => {
  const s = buildConceptScript({
    title: 'X', hook: 'h', principle: 'p', why: 'w', coachNote: 'c', story: 's', apply: 'a',
    examples: ['camera → lens → bag'], cases: ['one'], mistakes: ['two'], stats: ['three'], actions: ['four'],
  });
  const ex = s.find(x => x.label === 'Real-world examples');
  assert.ok(!ex.text.includes('→'));
  assert.ok(ex.text.includes(' then '));
});

test('every segment has non-empty text for every real concept', () => {
  const all = BOOKS.flatMap(b => b.modules.flatMap(m => m.concepts));
  for (const c of all)
    for (const seg of buildConceptScript(c))
      assert.ok(seg.text.trim().length > 0, `${c.id} / ${seg.label} empty`);
});
