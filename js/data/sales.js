// Book 5 — The Sales Skill. Distilled from the Jay Shetty × Shelby "On Purpose"
// interview on sales as a life skill (see /transcripts/#1 Sales Tactic...). Each
// module lives in ./sales/*.js and is assembled here, then added to BOOKS in
// content.js. Same concept shape as the other books, so all views/tests work
// generically.

import { MODULE as M_WHY } from './sales/sl-why.js';
import { MODULE as M_CORE } from './sales/sl-core.js';
import { MODULE as M_PROCESS } from './sales/sl-process.js';
import { MODULE as M_OBJECTIONS } from './sales/sl-objections.js';
import { MODULE as M_MINDSET } from './sales/sl-mindset.js';
import { MODULE as M_CAREER } from './sales/sl-career.js';
import { MODULE as M_MONEY } from './sales/sl-money.js';

export const SALES_BOOK = {
  id: 'sales',
  title: 'The Sales Skill',
  subtitle: 'Turn selling into your highest-paid life skill',
  tagline: 'Sales as freedom: find the leverage, build value, roll any objection, and ask.',
  modules: [
    M_WHY, M_CORE, M_PROCESS, M_OBJECTIONS, M_MINDSET, M_CAREER, M_MONEY,
  ],
};
