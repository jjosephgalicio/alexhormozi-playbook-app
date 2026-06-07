// Pure text generators for the builder tools. They take a plain draft object and
// return a copyable/downloadable plain-text plan.

export function buildOfferSummary(d = {}) {
  const lines = [];
  lines.push(`OFFER: ${d.name || 'Untitled offer'}`);
  lines.push('='.repeat(40));
  lines.push('');
  lines.push(`Dream outcome: ${d.dreamOutcome || '—'}`);

  if (d.problems?.length) {
    lines.push('', 'Problems solved:');
    d.problems.forEach(p => lines.push(`  • ${p}`));
  }
  if (d.solutions?.length) {
    lines.push('', 'Solutions:');
    d.solutions.forEach(s => lines.push(`  • ${s}`));
  }
  if (d.deliverables?.length) {
    lines.push('', 'What they get (delivery vehicles):');
    d.deliverables.forEach(v => lines.push(`  • ${v}`));
  }
  lines.push('', '— Built with The Playbook (Hormozi $100M Offers)');
  return lines.join('\n');
}

export function buildMoneyModelPlan(d = {}) {
  const row = (n, label, value, note) => {
    const base = `${n}. ${label.padEnd(11)} → ${value || '—'}`;
    return note && note.trim() ? `${base}\n     ${note.trim()}` : base;
  };
  return [
    `MONEY MODEL: ${d.business || 'My business'}`,
    '='.repeat(40),
    '',
    row(1, 'Attraction', d.attraction, d.attractionNote),
    row(2, 'Upsell', d.upsell, d.upsellNote),
    row(3, 'Downsell', d.downsell, d.downsellNote),
    row(4, 'Continuity', d.continuity, d.continuityNote),
    '',
    '— Built with The Playbook (Hormozi $100M Money Models)',
  ].join('\n');
}
