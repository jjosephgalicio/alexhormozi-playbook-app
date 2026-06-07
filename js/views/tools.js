import { el, copyText, downloadText, flashButton } from '../util.js';
import { buildOfferSummary } from '../builders.js';
import { renderMoneyModel } from './tools-moneymodel.js';

const lines = (v) => (v || '').split('\n').map(s => s.trim()).filter(Boolean);
const newId = () => 'd' + Date.now().toString(36);

export function renderTools({ store }) {
  const panel = el('div', { class: 'tool-panel' });

  const tabs = el('div', { class: 'chips' });
  const mkTab = (key, label, build) => {
    const chip = el('button', { class: 'chip', onclick: () => {
      tabs.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
      chip.classList.add('on');
      panel.replaceChildren(build());
    } }, label);
    return chip;
  };
  const offerTab = mkTab('offer', 'Offer Builder', () => offerBuilder(store));
  const mmTab = mkTab('mm', 'Money Model', () => renderMoneyModel(store));
  tabs.append(offerTab, mmTab);

  offerTab.classList.add('on');
  panel.replaceChildren(offerBuilder(store));

  return el('section', { class: 'tools' }, tabs, panel);
}

function offerBuilder(store) {
  const f = { id: null, name: '', dreamOutcome: '', problems: '', solutions: '', deliverables: '' };

  const out = el('pre', { class: 'out', hidden: true });
  const inputs = {};
  const field = (key, label, placeholder, multi) => {
    const input = multi
      ? el('textarea', { class: 'inp', rows: 3, placeholder })
      : el('input', { class: 'inp', placeholder });
    input.addEventListener('input', (e) => { f[key] = e.target.value; });
    inputs[key] = input;
    return el('label', { class: 'field' }, el('span', {}, label), input);
  };

  const generate = () => {
    out.textContent = buildOfferSummary({
      name: f.name, dreamOutcome: f.dreamOutcome,
      problems: lines(f.problems), solutions: lines(f.solutions),
      deliverables: lines(f.deliverables),
    });
    out.hidden = false;
  };

  const draftsBox = el('div', { class: 'drafts' });
  const refreshDrafts = () => {
    draftsBox.replaceChildren();
    const list = store.get().builders.offer;
    if (!list.length) return;
    draftsBox.append(el('div', { class: 'section-label' }, 'Saved offers'));
    for (const d of list) {
      draftsBox.append(el('div', { class: 'draft-row' },
        el('span', {}, d.name || 'Untitled offer'),
        el('span', {},
          el('button', { class: 'btn', onclick: () => loadDraft(d) }, 'Load'),
          ' ',
          el('button', { class: 'btn', onclick: () => { store.deleteBuilderDraft('offer', d.id); refreshDrafts(); } }, 'Delete'))));
    }
  };
  const loadDraft = (d) => {
    Object.assign(f, d);
    for (const k of Object.keys(inputs)) inputs[k].value = d[k] || '';
    generate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const save = (btn) => {
    if (!f.id) f.id = newId();
    store.saveBuilderDraft('offer', { ...f });
    refreshDrafts();
    flashButton(btn, '✓ Saved');
  };

  const wrap = el('div', { class: 'builder' },
    el('h2', { class: 'serif' }, 'Offer Builder'),
    el('span', { class: 'muted' }, 'The 5-step $100M Offers process — make it impossible to say no.'),
    field('name', 'Offer name', 'e.g. Fit in 12'),
    field('dreamOutcome', '1 · Dream outcome', 'What does the customer ultimately want?'),
    field('problems', '2 · Problems (one per line)', 'List everything blocking that outcome', true),
    field('solutions', '3 · Solutions (one per line)', 'Reverse each problem into a “How to…”', true),
    field('deliverables', '4 · Delivery vehicles (one per line)', 'How you deliver each solution', true),
    el('div', { class: 'c-actions', style: 'position:static;border:0;padding:0;margin-top:6px' },
      el('button', { class: 'btn primary', onclick: generate }, 'Generate'),
      el('button', { class: 'btn', onclick: (e) => copyText(out.textContent).then(ok => flashButton(e.target, ok ? '✓ Copied' : 'Copy failed')) }, 'Copy'),
      el('button', { class: 'btn', onclick: () => downloadText('offer.txt', out.textContent || buildOfferSummary(f)) }, 'Download'),
      el('button', { class: 'btn', onclick: (e) => save(e.target) }, 'Save')),
    out,
    draftsBox);

  refreshDrafts();
  return wrap;
}
