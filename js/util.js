// Small DOM + browser helpers shared across views.

// el('div', {class:'x', onclick: fn, html:'<b>'}, child1, child2)
export function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) {
    if (kid == null || kid === false) continue;
    n.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  return n;
}

// Set inner HTML to a trusted SVG string and return the host element.
export function svgHost(className, svgString) {
  const host = el('div', { class: className });
  host.innerHTML = svgString;
  return host;
}

export const dateKey = (d = new Date()) => {
  const z = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
};

export async function copyText(t) {
  try { await navigator.clipboard.writeText(t); return true; }
  catch { return false; }
}

export function downloadText(filename, text) {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  const a = el('a', { href: url, download: filename });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// brief inline confirmation on a button without external libs
export function flashButton(btn, label, ms = 1400) {
  const prev = btn.textContent;
  btn.textContent = label;
  btn.disabled = true;
  setTimeout(() => { btn.textContent = prev; btn.disabled = false; }, ms);
}
