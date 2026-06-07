import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildOfferSummary, buildMoneyModelPlan } from '../js/builders.js';

test('offer summary includes name, dream outcome, and items', () => {
  const out = buildOfferSummary({
    name: 'Fit in 12',
    dreamOutcome: 'Lose 14kg in 7 weeks',
    problems: ['Healthy food is hard to buy'],
    solutions: ['How to buy healthy food fast and cheap'],
    deliverables: ['Recorded grocery tour', 'Weekly shopping list'],
  });
  assert.match(out, /Fit in 12/);
  assert.match(out, /Lose 14kg in 7 weeks/);
  assert.match(out, /grocery tour/i);
  assert.match(out, /Weekly shopping list/);
});

test('offer summary tolerates empty draft', () => {
  const out = buildOfferSummary();
  assert.match(out, /Untitled offer/);
});

test('money model plan lists the four stages and choices', () => {
  const out = buildMoneyModelPlan({
    business: 'Gym',
    attraction: 'Win your money back',
    upsell: 'Rollover upsell',
    downsell: 'Payment plan',
    continuity: 'Waved-fee offer',
  });
  for (const s of ['Attraction', 'Upsell', 'Downsell', 'Continuity'])
    assert.match(out, new RegExp(s));
  assert.match(out, /Win your money back/);
  assert.match(out, /Gym/);
});

test('money model plan renders notes when present', () => {
  const out = buildMoneyModelPlan({ business: 'Spa', attraction: 'Giveaways',
    attractionNote: 'Win a year of facials' });
  assert.match(out, /Win a year of facials/);
});
