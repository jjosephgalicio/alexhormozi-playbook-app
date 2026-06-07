// Single source of truth for user state, persisted to a storage backend.
// The backend (localStorage in the browser, an in-memory shim in tests) is injected
// so this module stays pure and testable in Node.

const KEY = 'hpb.v1';

const DEFAULTS = {
  progress: {},        // { [conceptId]: { learnedAt: 'YYYY-MM-DD' } }
  bookmarks: [],       // [conceptId]
  notes: {},           // { [conceptId]: text }
  checklists: {},      // { [conceptId]: [bool] }
  streak: { count: 0, lastActiveDate: null },
  theme: 'light',      // 'light' | 'dark'
  audio: { voiceURI: null, rate: 1 },  // read-aloud preferences
  builders: { offer: [], moneyModel: [] },
};

export function createStore(backend) {
  let state;
  try {
    state = { ...structuredClone(DEFAULTS), ...(JSON.parse(backend.getItem(KEY)) || {}) };
  } catch {
    state = structuredClone(DEFAULTS);
  }

  const subs = new Set();
  const persist = () => { try { backend.setItem(KEY, JSON.stringify(state)); } catch {} };
  const commit = () => { persist(); subs.forEach(fn => fn(state)); };

  return {
    get: () => state,
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },

    setTheme(t) { state.theme = t; commit(); },

    toggleBookmark(id) {
      const i = state.bookmarks.indexOf(id);
      if (i === -1) state.bookmarks.push(id); else state.bookmarks.splice(i, 1);
      commit();
    },
    isBookmarked(id) { return state.bookmarks.includes(id); },

    markLearned(id, dateKey) { state.progress[id] = { learnedAt: dateKey }; commit(); },
    unmarkLearned(id) { delete state.progress[id]; commit(); },
    isLearned(id) { return !!state.progress[id]; },

    setNote(id, text) {
      if (text && text.trim()) state.notes[id] = text; else delete state.notes[id];
      commit();
    },

    toggleChecklistItem(id, index, value) {
      const arr = state.checklists[id] || (state.checklists[id] = []);
      arr[index] = value;
      commit();
    },

    setStreak(streak) { state.streak = streak; commit(); },

    setAudio(patch) { state.audio = { ...state.audio, ...patch }; commit(); },

    saveBuilderDraft(kind, draft) {
      const list = state.builders[kind];
      const i = list.findIndex(d => d.id === draft.id);
      if (i === -1) list.push(draft); else list[i] = draft;
      commit();
    },
    deleteBuilderDraft(kind, draftId) {
      state.builders[kind] = state.builders[kind].filter(d => d.id !== draftId);
      commit();
    },
  };
}
