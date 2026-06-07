// Flattened views over the content tree, so UI code can resolve a concept and its
// module/book in one call.

import { BOOKS } from './content.js';

export const ALL = BOOKS.flatMap(b =>
  b.modules.flatMap(m => m.concepts.map(concept => ({ book: b, module: m, concept }))));

export const byId = (id) => ALL.find(x => x.concept.id === id) || null;
