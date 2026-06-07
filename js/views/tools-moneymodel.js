import { el, copyText, downloadText, flashButton } from '../util.js';
import { BOOKS } from '../data/content.js';
import { buildMoneyModelPlan } from '../builders.js';

const newId = () => 'm' + Date.now().toString(36);
const mm = BOOKS.find(b => b.id === 'money-models');
const stageConcepts = (modId) => mm.modules.find(m => m.id === modId).concepts;

export function renderMoneyModel(store) {
  const f = {
    id: null, business: '',
    attraction: '', attractionNote: '',
    upsell: '', upsellNote: '',
    downsell: '', downsellNote: '',
    continuity: '', continuityNote: '',
  };

  const out = el('pre', { class: 'out', hidden: true });
  const inputs = {};

  const businessField = (() => {
    const input = el('input', { class: 'inp', placeholder: 'e.g. Local gym' });
    input.addEventListener('input', e => { f.business = e.target.value; });
    inputs.business = input;
    return el('label', { class: 'field' }, el('span', {}, 'Business'), input);
  })();

  const stage = (label, modId, key) => {
    const opts = stageConcepts(modId);
    const select = el('select', { class: 'inp' },
      el('option', { value: '' }, `Choose your ${label.toLowerCase()} offer…`),
      ...opts.map(c => el('option', { value: c.title }, c.title)));
    select.addEventListener('change', e => { f[key] = e.target.value; });
    inputs[key] = select;

    const note = el('textarea', { class: 'inp', rows: 2, placeholder: 'Specifics for your business (optional)' });
    note.addEventListener('input', e => { f[key + 'Note'] = e.target.value; });
    inputs[key + 'Note'] = note;

    return el('label', { class: 'field' }, el('span', {}, label), select, el('div', { style: 'height:8px' }), note);
  };

  const generate = () => { out.textContent = buildMoneyModelPlan(f); out.hidden = false; };

  const draftsBox = el('div', { class: 'drafts' });
  const refreshDrafts = () => {
    draftsBox.replaceChildren();
    const list = store.get().builders.moneyModel;
    if (!list.length) return;
    draftsBox.append(el('div', { class: 'section-label' }, 'Saved models'));
    for (const d of list) {
      draftsBox.append(el('div', { class: 'draft-row' },
        el('span', {}, d.business || 'My business'),
        el('span', {},
          el('button', { class: 'btn', onclick: () => loadDraft(d) }, 'Load'),
          ' ',
          el('button', { class: 'btn', onclick: () => { store.deleteBuilderDraft('moneyModel', d.id); refreshDrafts(); } }, 'Delete'))));
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
    store.saveBuilderDraft('moneyModel', { ...f });
    refreshDrafts();
    flashButton(btn, '✓ Saved');
  };

  const wrap = el('div', { class: 'builder' },
    el('h2', { class: 'serif' }, 'Money Model Builder'),
    el('span', { class: 'muted' }, 'Sequence attraction → upsell → downsell → continuity for your business.'),
    businessField,
    stage('Attraction', 'attraction', 'attraction'),
    stage('Upsell', 'upsell', 'upsell'),
    stage('Downsell', 'downsell', 'downsell'),
    stage('Continuity', 'continuity', 'continuity'),
    el('div', { class: 'c-actions', style: 'position:static;border:0;padding:0;margin-top:6px' },
      el('button', { class: 'btn primary', onclick: generate }, 'Generate'),
      el('button', { class: 'btn', onclick: (e) => copyText(out.textContent).then(ok => flashButton(e.target, ok ? '✓ Copied' : 'Copy failed')) }, 'Copy'),
      el('button', { class: 'btn', onclick: () => downloadText('money-model.txt', out.textContent || buildMoneyModelPlan(f)) }, 'Download'),
      el('button', { class: 'btn', onclick: (e) => save(e.target) }, 'Save')),
    out,
    draftsBox);

  refreshDrafts();
  return wrap;
}
