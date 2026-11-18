// Medición de Enlace AR, independiente del proveedor.
// - Sin proveedor configurado: los eventos solo van a window.dataLayer (sin scripts de terceros ni cookies).
// - PUBLIC_PLAUSIBLE_DOMAIN: Plausible (sin cookies, no requiere consentimiento).
// - PUBLIC_GA4_ID: Google Analytics 4, que se carga recién cuando la persona acepta el aviso de cookies.

type Params = Record<string, string | number | undefined>;
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: ((event: string, opts?: { props?: Params }) => void) & { q?: unknown[] };
  }
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const UTM_STORE = 'enlace_utm';
const CONSENT_STORE = 'enlace_consent';

const safe = <T>(fn: () => T, fallback: T): T => {
  try {
    return fn();
  } catch {
    return fallback;
  }
};

/** Envía un evento a los proveedores activos. */
export function track(name: string, params: Params = {}) {
  const clean = Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined && v !== ''));
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...clean });
  window.gtag?.('event', name, clean);
  window.plausible?.(name, { props: clean });
}

/** UTM de la visita: se guardan al llegar y se conservan durante la sesión. */
export function getUtm(): Partial<Record<(typeof UTM_KEYS)[number], string>> {
  const qs = new URLSearchParams(location.search);
  const fromUrl = Object.fromEntries(UTM_KEYS.filter((k) => qs.get(k)).map((k) => [k, qs.get(k)!]));
  if (Object.keys(fromUrl).length) {
    safe(() => sessionStorage.setItem(UTM_STORE, JSON.stringify(fromUrl)), undefined);
    return fromUrl;
  }
  return safe(() => JSON.parse(sessionStorage.getItem(UTM_STORE) || '{}'), {});
}

/** Ubicación legible de un elemento: header, footer o la sección donde está, con la página. */
function locationOf(el: Element) {
  const own = (el as HTMLElement).dataset.ubicacion;
  if (own) return own;
  const page = location.pathname.replace(/\.html$/, '') || '/';
  if (el.closest('header')) return `${page} · header`;
  if (el.closest('footer')) return `${page} · footer`;
  const section = el.closest('section, aside');
  const id = section?.id || section?.getAttribute('aria-labelledby') || section?.getAttribute('aria-label') || 'contenido';
  return `${page} · ${id.replace(/-title$/, '')}`;
}

function loadScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.append(s);
}

function loadGa4(id: string) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag necesita el objeto `arguments` original
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

function setupConsent(ga4Id: string) {
  const banner = document.querySelector<HTMLElement>('[data-consent]');
  const choice = safe(() => localStorage.getItem(CONSENT_STORE), null);
  if (choice === 'granted') return loadGa4(ga4Id);
  if (choice === 'denied' || !banner) return;
  banner.hidden = false;
  banner.querySelectorAll<HTMLButtonElement>('[data-consent-choice]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const value = btn.dataset.consentChoice!;
      safe(() => localStorage.setItem(CONSENT_STORE, value), undefined);
      banner.hidden = true;
      if (value === 'granted') loadGa4(ga4Id);
    }),
  );
}

export function initAnalytics({ ga4Id, plausibleDomain }: { ga4Id: string; plausibleDomain: string }) {
  window.dataLayer = window.dataLayer || [];
  getUtm();

  if (plausibleDomain) {
    window.plausible = window.plausible || Object.assign((...args: unknown[]) => (window.plausible!.q = window.plausible!.q || []).push(args), {});
    loadScript('https://plausible.io/js/script.js', { 'data-domain': plausibleDomain, defer: '' });
  }
  if (ga4Id) setupConsent(ga4Id);

  // Clics medidos (delegación: cubre cualquier enlace presente o futuro)
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('a, button');
    if (!el) return;
    const href = el instanceof HTMLAnchorElement ? el.href : '';
    if (href.includes('wa.me/')) track('click_whatsapp', { ubicacion: locationOf(el) });
    if (el.dataset.cta) track('click_cta', { cta: el.dataset.cta, ubicacion: locationOf(el) });
  });
}
