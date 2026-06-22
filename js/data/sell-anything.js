// Book 6 — How to Sell Anything. Distilled from Shelby's full "How to Sell Anything
// (Full Course)" sales masterclass (see /transcripts/). Each module maps to a section
// of the course and lives in ./sell-anything/*.js, assembled here and added to BOOKS
// in content.js. Same concept shape as the other books, so all views/tests work
// generically.

import { MODULE as M_WHAT } from './sell-anything/sa-what.js';
import { MODULE as M_PSYCHOLOGY } from './sell-anything/sa-psychology.js';
import { MODULE as M_MINDSET } from './sell-anything/sa-mindset.js';
import { MODULE as M_DISCOVERY } from './sell-anything/sa-discovery.js';
import { MODULE as M_THE_SALE } from './sell-anything/sa-the-sale.js';
import { MODULE as M_OBJECTIONS } from './sell-anything/sa-objections.js';
import { MODULE as M_AFTER } from './sell-anything/sa-after.js';
import { MODULE as M_BUSINESS } from './sell-anything/sa-business.js';

export const SELL_ANYTHING_BOOK = {
  id: 'sell-anything',
  title: 'How to Sell Anything',
  subtitle: 'The complete course — from first call to commission',
  tagline: 'Psychology, mindset, discovery, the close, objections, and the sales career.',
  modules: [
    M_WHAT, M_PSYCHOLOGY, M_MINDSET, M_DISCOVERY,
    M_THE_SALE, M_OBJECTIONS, M_AFTER, M_BUSINESS,
  ],
};
