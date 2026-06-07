// Pure helpers for progress percentage and daily streak math.

export function progressPct(learned, total) {
  if (!total) return 0;
  return Math.round((learned / total) * 100);
}

// dateKey strings are 'YYYY-MM-DD'. Compare by whole-day difference (UTC).
function dayDiff(a, b) {
  const da = Date.parse(a + 'T00:00:00Z');
  const db = Date.parse(b + 'T00:00:00Z');
  return Math.round((db - da) / 86400000);
}

// Given the stored streak and today's key, return the next streak state.
// Same day: unchanged. Consecutive day: +1. Any gap: reset to 1.
export function nextStreak(streak, todayKey) {
  if (!streak || !streak.lastActiveDate) return { count: 1, lastActiveDate: todayKey };
  const diff = dayDiff(streak.lastActiveDate, todayKey);
  if (diff === 0) return { ...streak };
  if (diff === 1) return { count: streak.count + 1, lastActiveDate: todayKey };
  return { count: 1, lastActiveDate: todayKey };
}
