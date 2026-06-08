// Book 4 — $100M Leads · In Depth. Each module is distilled from one in-depth Alex
// Hormozi lecture transcript (see /transcripts/$100M Leads - In Depth/). Modules live
// in ./deep/*.js and are assembled here, then added to BOOKS in content.js.

import { MODULE as M_CONTEXT } from './deep/ldx-context.js';
import { MODULE as M_PROBLEM } from './deep/ldx-problem.js';
import { MODULE as M_MBN } from './deep/ldx-mbn.js';
import { MODULE as M_LEADMAGNET } from './deep/ldx-leadmagnet.js';
import { MODULE as M_FIRST5 } from './deep/ldx-first5.js';
import { MODULE as M_CONTENT1 } from './deep/ldx-content1.js';
import { MODULE as M_CONTENT2 } from './deep/ldx-content2.js';
import { MODULE as M_COLD } from './deep/ldx-cold.js';
import { MODULE as M_ADS1 } from './deep/ldx-ads1.js';
import { MODULE as M_ADS2 } from './deep/ldx-ads2.js';
import { MODULE as M_EMPLOYEES } from './deep/ldx-employees.js';

export const LEADS_DEEP_BOOK = {
  id: 'leads-deep',
  title: '$100M Leads · In Depth',
  subtitle: 'The full lead-generation system, lecture by lecture',
  tagline: 'The in-depth masterclass: lead magnets, content, outreach, paid ads, and teams.',
  modules: [
    M_CONTEXT, M_PROBLEM, M_MBN, M_LEADMAGNET, M_FIRST5,
    M_CONTENT1, M_CONTENT2, M_COLD, M_ADS1, M_ADS2, M_EMPLOYEES,
  ],
};
