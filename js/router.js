// Tiny hash router. parseHash is pure (testable); startRouter binds it to the browser.

const KNOWN = new Set(['home', 'library', 'tools', 'saved', 'concept']);

export function parseHash(hash) {
  const path = (hash || '').replace(/^#\/?/, '');
  if (!path) return { name: 'home', param: null };
  const [name, param] = path.split('/');
  if (!KNOWN.has(name)) return { name: 'home', param: null };
  return { name, param: param ? decodeURIComponent(param) : null };
}

// Calls onRoute(route) once on load and again on every hashchange.
export function startRouter(onRoute) {
  const fire = () => onRoute(parseHash(window.location.hash));
  window.addEventListener('hashchange', fire);
  fire();
}
