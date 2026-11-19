// QA end-to-end sobre el build de producción (requiere `npm run build`).
// Uso: npm run qa  → capturas en qa-output/, informe en consola, exit 1 si hay fallas.
import { mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { chromium } from 'playwright-core';
import { chromePath } from './chrome.mjs';
import { startPreview } from './preview.mjs';

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const PORT = 4331;
const BASE = `http://localhost:${PORT}`;
const OUT = 'qa-output';
mkdirSync(OUT, { recursive: true });

const ROUTES = ['/', '/soluciones/desarrollo-web', '/soluciones/inteligencia-artificial', '/soluciones/automatizacion-e-integraciones', '/nosotros', '/contacto', '/privacidad', '/gracias', '/404'];
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1280, height: 760 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 },
];

const failures = [];
const fail = (msg) => {
  failures.push(msg);
  console.log('  ✗', msg);
};
const ok = (msg) => console.log('  ✓', msg);
const slug = (r) => (r === '/' ? 'home' : r.slice(1).replace(/\//g, '_'));

const stopPreview = await startPreview(PORT);
const browser = await chromium.launch({ executablePath: chromePath });

// `astro preview` no aplica las cabeceras de netlify.toml: inyectamos la misma CSP.
const CSP = readFileSync('netlify.toml', 'utf8').match(/Content-Security-Policy = "([^"]+)"/)?.[1];
const newContext = async (opts = {}) => {
  const ctx = await browser.newContext({ deviceScaleFactor: 1, ...opts });
  await ctx.route(`${BASE}/**`, async (route) => {
    if (route.request().resourceType() !== 'document') return route.continue();
    const res = await route.fetch();
    await route.fulfill({ response: res, headers: { ...res.headers(), 'content-security-policy': CSP } });
  });
  return ctx;
};

async function axe(page, label) {
  await page.addScriptTag({ content: axeSource });
  const res = await page.evaluate(() =>
    // @ts-ignore
    axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] }),
  );
  if (res.violations.length === 0) ok(`axe ${label}: 0 violaciones`);
  for (const v of res.violations) fail(`axe ${label}: ${v.id} (${v.impact}) — ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`);
}

async function revealAll(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-visible'));
  });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2600);
}

try {
  // ---- Todas las rutas × todos los anchos ----
  for (const vp of VIEWPORTS) {
    console.log(`\n▶ ${vp.name} (${vp.width}px)`);
    const ctx = await newContext({ viewport: vp });
    for (const route of ROUTES) {
      const page = await ctx.newPage();
      const errors = [];
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
      page.on('pageerror', (e) => errors.push(e.message));
      const res = await page.goto(BASE + route, { waitUntil: 'networkidle' });
      const expected = route === '/404' ? 404 : 200;
      if (route !== '/404' && res.status() !== expected) fail(`${route} devuelve ${res.status()}`);
      await revealAll(page);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) fail(`${route} @${vp.name}: scroll horizontal de ${overflow}px`);
      const broken = await page.evaluate(() => [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.currentSrc || i.src));
      if (broken.length) fail(`${route} @${vp.name}: imágenes sin cargar ${broken.join(', ')}`);
      if (errors.length) fail(`${route} @${vp.name}: errores de consola ${errors.join(' | ')}`);
      if (!overflow && !broken.length && !errors.length) ok(`${route}: sin overflow, imágenes OK, consola limpia`);
      await page.screenshot({ path: `${OUT}/${vp.name}-${slug(route)}.jpg`, fullPage: true, type: 'jpeg', quality: 70 });
      if (vp.name === 'desktop' || vp.name === 'mobile') await axe(page, `${route} @${vp.name}`);

      if (vp.name === 'mobile') {
        const small = await page.evaluate(() =>
          [...document.querySelectorAll('a, button, input, textarea, summary')]
            .filter((el) => {
              const r = el.getBoundingClientRect();
              const cs = getComputedStyle(el);
              if (r.width === 0 || cs.visibility === 'hidden' || el.closest('.hp, .skip-link, [hidden], .nav:not(.is-open)')) return false;
              if (el.matches('input[type=radio], input[type=checkbox]')) return false; // el objetivo es su <label>
              if (el.closest('p, li, dd') && el.tagName === 'A' && getComputedStyle(el).display === 'inline') return false; // enlace en línea dentro de texto (excepción WCAG 2.5.8)
              return r.height < 24 || r.width < 24;
            })
            .map((el) => el.textContent.trim().slice(0, 30) || el.getAttribute('aria-label') || el.outerHTML.slice(0, 40)),
        );
        if (small.length) fail(`${route}: objetivos táctiles < 24px: ${small.join(', ')}`);
      }
      await page.close();
    }
    await ctx.close();
  }

  // ---- Navegación ----
  console.log('\n▶ navegación');
  {
    const ctx = await newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.keyboard.press('Tab');
    const first = await page.evaluate(() => document.activeElement?.textContent?.trim());
    first === 'Saltar al contenido' ? ok('primer Tab = enlace de salto') : fail(`primer Tab = ${first}`);
    await page.keyboard.press('Enter');
    const focused = await page.evaluate(() => document.activeElement?.id);
    focused === 'contenido' ? ok('el enlace de salto lleva al contenido') : fail(`salto lleva a ${focused}`);

    const sub = page.locator('[data-sub-toggle]');
    await sub.focus();
    await page.keyboard.press('Enter');
    (await sub.getAttribute('aria-expanded')) === 'true' ? ok('submenú Soluciones abre con teclado') : fail('submenú no abre');
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/submenu.png` });
    await page.keyboard.press('Escape');
    (await sub.getAttribute('aria-expanded')) === 'false' && (await page.evaluate(() => document.activeElement?.hasAttribute('data-sub-toggle')))
      ? ok('submenú cierra con Escape y devuelve el foco')
      : fail('submenú no cierra con Escape');
    await sub.click();
    await page.click('#sub-soluciones a[href="/soluciones/inteligencia-artificial"]');
    await page.waitForURL('**/soluciones/inteligencia-artificial');
    ok('submenú navega a una solución');
    await ctx.close();

    const m = await newContext({ viewport: { width: 390, height: 844 } });
    const mp = await m.newPage();
    await mp.goto(BASE + '/', { waitUntil: 'networkidle' });
    const toggle = mp.locator('[data-menu-toggle]');
    await toggle.focus();
    await mp.keyboard.press('Enter');
    (await toggle.getAttribute('aria-expanded')) === 'true' ? ok('menú móvil abre con teclado') : fail('menú móvil no abre');
    await mp.click('[data-sub-toggle]');
    await mp.waitForTimeout(300);
    await mp.screenshot({ path: `${OUT}/mobile-menu.png` });
    await mp.keyboard.press('Escape');
    await mp.keyboard.press('Escape');
    (await toggle.getAttribute('aria-expanded')) === 'false' ? ok('menú móvil cierra con Escape') : fail('menú móvil no cierra');
    await toggle.click();
    await mp.click('#site-nav a[href="/#metodo"]');
    await mp.waitForTimeout(800);
    (await toggle.getAttribute('aria-expanded')) === 'false' && (await mp.evaluate(() => location.hash)) === '#metodo'
      ? ok('menú móvil se cierra al navegar a una sección')
      : fail('menú móvil no se cierra al navegar');
    await m.close();

    // Anclas exactas (las secciones usan content-visibility)
    for (const vp of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
      const c = await newContext({ viewport: vp });
      const p = await c.newPage();
      const bad = [];
      for (const id of ['soluciones', 'metodo', 'preguntas']) {
        await p.goto(BASE + '/nosotros', { waitUntil: 'networkidle' });
        await p.goto(`${BASE}/#${id}`, { waitUntil: 'networkidle' });
        await p.waitForTimeout(900);
        const top = await p.evaluate((i) => document.getElementById(i).getBoundingClientRect().top, id);
        if (top < 0 || top > 110) bad.push(`${id}=${Math.round(top)}px`);
      }
      bad.length ? fail(`anclas mal posicionadas @${vp.width}: ${bad.join(', ')}`) : ok(`anclas desde otra página quedan bajo el header @${vp.width}px`);
      await c.close();
    }
  }

  // ---- Formulario ----
  console.log('\n▶ formulario de contacto');
  {
    const ctx = await newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    let posted = null;
    let mode = 'ok';
    await page.route(`${BASE}/`, async (route) => {
      if (route.request().method() !== 'POST') return route.continue();
      posted = new URLSearchParams(route.request().postData() || '');
      return mode === 'ok' ? route.fulfill({ status: 200, body: 'ok' }) : route.fulfill({ status: 500, body: 'error' });
    });

    // Preselección contextual
    await page.goto(BASE + '/contacto?perfil=empresa&necesidad=ia', { waitUntil: 'networkidle' });
    const pre = await page.evaluate(() => ({
      perfil: document.querySelector('input[name=perfil]:checked')?.value,
      need: [...document.querySelectorAll('input[name=necesidad]:checked')].map((i) => i.value),
    }));
    pre.perfil === 'empresa' && pre.need.join() === 'ia' ? ok('preselección desde la URL (perfil + necesidad)') : fail(`preselección: ${JSON.stringify(pre)}`);

    // Estado inicial: solo el formulario visible
    await page.goto(BASE + '/contacto', { waitUntil: 'networkidle' });
    const vis = await Promise.all(['[data-form]', '[data-result-ok]', '[data-result-fail]', '[data-err-summary]'].map((s) => page.isVisible(s)));
    vis.join() === 'true,false,false,false' ? ok('estado inicial: solo el formulario visible') : fail(`visibilidad inicial incorrecta (form, ok, falla, errores) = ${vis}`);

    // Validación vacía
    await page.click('[data-submit]');
    const v = await page.evaluate(() => ({
      summaryVisible: !document.querySelector('[data-err-summary]').hidden,
      focusIsSummary: document.activeElement?.hasAttribute('data-err-summary'),
      invalid: [...new Set([...document.querySelectorAll('[aria-invalid=true]')].map((e) => e.name))],
    }));
    v.summaryVisible && v.focusIsSummary && ['perfil', 'necesidad', 'nombre', 'email', 'mensaje'].every((n) => v.invalid.includes(n))
      ? ok(`validación: resumen de errores enfocado, campos marcados (${v.invalid.join(', ')})`)
      : fail(`validación vacía: ${JSON.stringify(v)}`);
    posted === null ? ok('no envía con errores') : fail('envió con errores');
    await page.screenshot({ path: `${OUT}/form-errores.png`, fullPage: true });
    await page.click('[data-err-summary] a >> nth=2');
    (await page.evaluate(() => document.activeElement?.name)) === 'nombre' ? ok('los enlaces del resumen enfocan el campo') : fail('enlace del resumen no enfoca');

    // Email inválido y revalidación en vivo
    await page.fill('#f-email', 'no-es-email');
    await page.click('[data-submit]');
    (await page.textContent('#err-email')).includes('formato') ? ok('detecta email con formato inválido') : fail('no detecta email inválido');
    await page.fill('#f-email', 'cliente@empresa.com');
    (await page.getAttribute('#f-email', 'aria-invalid')) === null ? ok('revalida en vivo al corregir') : fail('no revalida en vivo');

    // Envío correcto
    const fillAll = async () => {
      await page.check('input[name=perfil][value=empresa]');
      await page.check('input[name=necesidad][value=automatizacion]');
      await page.check('input[name=necesidad][value=ia]');
      await page.fill('#f-nombre', 'María Pérez');
      await page.fill('#f-empresa', 'Distribuidora Norte');
      await page.fill('#f-email', 'maria@empresa.com');
      await page.fill('#f-tel', '+54 381 555-1234');
      await page.fill('#f-mensaje', 'Cargamos los pedidos a mano en tres planillas distintas y perdemos mucho tiempo.');
    };
    await fillAll();
    await page.click('[data-submit]');
    await page.waitForSelector('[data-result-ok]:not([hidden])');
    posted?.get('form-name') === 'contacto' && posted.getAll('necesidad').length === 2 && posted.get('email') === 'maria@empresa.com'
      ? ok(`envío correcto: POST a Netlify Forms con ${[...posted.keys()].length} campos (form-name=contacto)`)
      : fail(`payload incorrecto: ${posted}`);
    (await page.evaluate(() => document.activeElement?.hasAttribute('data-result-ok'))) && !(await page.isVisible('[data-form]')) && !(await page.isVisible('[data-result-fail]'))
      ? ok('mensaje de éxito visible y enfocado; formulario y error ocultos')
      : fail('estado de éxito incorrecto');
    await page.locator('[data-result-ok]').screenshot({ path: `${OUT}/form-ok.png` });

    // Falla del servidor → alternativa por WhatsApp con la consulta redactada
    mode = 'fail';
    await page.goto(BASE + '/contacto', { waitUntil: 'networkidle' });
    await fillAll();
    await page.click('[data-submit]');
    await page.waitForSelector('[data-result-fail]:not([hidden])');
    const wa = new URL(await page.getAttribute('[data-wa-fallback]', 'href'));
    const text = wa.searchParams.get('text') || '';
    text.includes('María Pérez') && text.includes('Automatizar tareas repetitivas') && text.includes('planillas')
      ? ok('ante una falla ofrece WhatsApp con la consulta ya redactada')
      : fail(`fallback de WhatsApp: ${text}`);
    await page.locator('[data-result-fail]').screenshot({ path: `${OUT}/form-falla.png` });
    await page.click('[data-retry]');
    (await page.isVisible('[data-form]')) && (await page.inputValue('#f-nombre')) === 'María Pérez'
      ? ok('«Volver al formulario» conserva los datos')
      : fail('reintento pierde datos');
    await ctx.close();
  }

  // ---- Medición ----
  console.log('\n▶ medición (analítica y UTM)');
  {
    const ctx = await newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const external = [];
    page.on('request', (r) => {
      const h = new URL(r.url()).hostname;
      if (!['localhost', '127.0.0.1', 'wa.me'].includes(h)) external.push(h);
    });
    const events = () => page.evaluate(() => (window.dataLayer || []).filter((e) => e && e.event));
    // Evita navegar al hacer clic: el rastreo escucha en document (burbujeo), esto corre antes en captura
    const stopNav = () => page.evaluate(() => window.addEventListener('click', (e) => e.preventDefault(), true));

    // 1) UTM al llegar desde redes, se conservan al navegar
    await page.goto(BASE + '/?utm_source=instagram&utm_medium=social&utm_campaign=lanzamiento', { waitUntil: 'networkidle' });
    (await page.isVisible('[data-consent]').catch(() => false)) ? fail('aviso de cookies visible sin GA4 configurado') : ok('sin GA4 configurado no hay aviso de cookies');

    // 2) CTAs y WhatsApp
    await stopNav();
    await page.click('.hero [data-cta]');
    for (const sel of ['a[data-cta="Quiero optimizar mi empresa"]', 'a[data-cta="Quiero potenciar mi proyecto"]']) await page.locator(sel).click();
    await page.locator('section.cta a[href*="wa.me"]').click();
    let ev = await events();
    const ctas = ev.filter((e) => e.event === 'click_cta').map((e) => e.cta);
    ['Contanos qué necesitás mejorar', 'Quiero optimizar mi empresa', 'Quiero potenciar mi proyecto'].every((c) => ctas.includes(c))
      ? ok(`click_cta en los 3 botones (${ctas.join(' | ')})`)
      : fail(`click_cta: ${JSON.stringify(ctas)}`);
    const wa = ev.find((e) => e.event === 'click_whatsapp');
    wa?.ubicacion ? ok(`click_whatsapp con ubicación «${wa.ubicacion}»`) : fail('click_whatsapp sin ubicación');

    // 3) Navegar a otra página y luego a /contacto: el formulario lleva las UTM
    await page.goto(BASE + '/nosotros', { waitUntil: 'networkidle' });
    await page.goto(BASE + '/contacto', { waitUntil: 'networkidle' });
    const utm = await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('[data-utm]')].map((i) => [i.name, i.value])));
    utm.utm_source === 'instagram' && utm.utm_medium === 'social' && utm.utm_campaign === 'lanzamiento'
      ? ok('UTM conservadas hasta el formulario de /contacto')
      : fail(`UTM en el formulario: ${JSON.stringify(utm)}`);

    // 4) generate_lead al enviar con éxito, con perfil
    let posted = null;
    await page.route(`${BASE}/`, (route) => {
      if (route.request().method() !== 'POST') return route.continue();
      posted = new URLSearchParams(route.request().postData() || '');
      return route.fulfill({ status: 200, body: 'ok' });
    });
    await page.check('input[name=perfil][value=profesional]');
    await page.check('input[name=necesidad][value=presencia-web]');
    await page.fill('#f-nombre', 'Lucía Gómez');
    await page.fill('#f-email', 'lucia@ejemplo.com');
    await page.fill('#f-mensaje', 'Quiero un sitio para mi estudio y automatizar los turnos.');
    await page.click('[data-submit]');
    await page.waitForSelector('[data-result-ok]:not([hidden])');
    posted?.get('utm_source') === 'instagram' ? ok('la consulta enviada incluye utm_source=instagram') : fail(`UTM en el envío: ${posted}`);
    ev = await events();
    const lead = ev.find((e) => e.event === 'generate_lead');
    lead?.perfil === 'profesional' ? ok(`generate_lead con perfil=${lead.perfil} y utm_source=${lead.utm_source}`) : fail(`generate_lead: ${JSON.stringify(lead)}`);

    external.length ? fail(`peticiones a terceros sin analítica configurada: ${[...new Set(external)].join(', ')}`) : ok('sin peticiones a terceros (sin cookies ni scripts externos)');
    await ctx.close();
  }

  // ---- FAQ ----
  console.log('\n▶ FAQ');
  {
    const ctx = await newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(BASE + '/#preguntas', { waitUntil: 'networkidle' });
    const s = page.locator('#preguntas summary').first();
    await s.focus();
    await page.keyboard.press('Enter');
    (await page.locator('#preguntas details').first().getAttribute('open')) !== null ? ok('acordeón abre con teclado') : fail('acordeón no abre');
    await ctx.close();
  }

  // ---- Enlaces y SEO ----
  console.log('\n▶ enlaces y SEO');
  {
    const ctx = await newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const titles = new Set();
    const descs = new Set();
    const all = new Set();
    for (const route of ROUTES) {
      await page.goto(BASE + route, { waitUntil: 'networkidle' });
      const seo = await page.evaluate(() => ({
        title: document.title,
        desc: document.querySelector('meta[name=description]')?.content || '',
        canonical: document.querySelector('link[rel=canonical]')?.href,
        robots: document.querySelector('meta[name=robots]')?.content || '',
        h1: document.querySelectorAll('h1').length,
        ld: (() => {
          try {
            return JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'].map((n) => n['@type']);
          } catch {
            return null;
          }
        })(),
        headings: [...document.querySelectorAll('h1,h2,h3,h4')].map((h) => Number(h.tagName[1])),
        imgsNoAlt: document.querySelectorAll('img:not([alt])').length,
        links: [...document.querySelectorAll('a[href]')].map((a) => a.href),
        emptyLinks: [...document.querySelectorAll('a[href], button')].filter((a) => !a.textContent.trim() && !a.getAttribute('aria-label') && a.getAttribute('aria-hidden') !== 'true').length,
      }));
      seo.links.forEach((l) => all.add(l));
      const skips = seo.headings.some((h, i) => i > 0 && h - seo.headings[i - 1] > 1);
      const issues = [];
      if (seo.title.length > 65) issues.push(`title largo (${seo.title.length})`);
      if (titles.has(seo.title)) issues.push('title duplicado');
      if (descs.has(seo.desc)) issues.push('description duplicada');
      if (!seo.robots.includes('noindex') && (seo.desc.length < 70 || seo.desc.length > 170)) issues.push(`description ${seo.desc.length} car.`);
      if (!seo.canonical) issues.push('sin canonical');
      else if (route !== '/404' && new URL(seo.canonical).pathname !== route) issues.push(`canonical ${new URL(seo.canonical).pathname} ≠ ${route}`);
      if (seo.h1 !== 1) issues.push(`${seo.h1} h1`);
      if (skips) issues.push(`saltos de encabezado ${seo.headings.join('')}`);
      if (!seo.ld?.includes('ProfessionalService')) issues.push('sin JSON-LD de la organización');
      if (seo.imgsNoAlt) issues.push(`${seo.imgsNoAlt} img sin alt`);
      if (seo.emptyLinks) issues.push(`${seo.emptyLinks} enlaces/botones sin nombre`);
      titles.add(seo.title);
      descs.add(seo.desc);
      issues.length ? fail(`${route}: ${issues.join('; ')}`) : ok(`${route}: «${seo.title}» · ${seo.ld.join(', ')}${seo.robots ? ` · ${seo.robots}` : ''}`);
    }

    for (const href of all) {
      const u = new URL(href);
      if (u.hostname === 'wa.me' || u.protocol === 'mailto:') continue;
      if (u.origin === BASE) {
        const r = await fetch(u.origin + u.pathname);
        if (r.status !== 200) fail(`enlace interno roto ${u.pathname} (${r.status})`);
        if (u.hash && u.hash !== '#top') {
          const p2 = await ctx.newPage();
          await p2.goto(u.origin + u.pathname);
          (await p2.evaluate((id) => !!document.getElementById(id), u.hash.slice(1))) ? null : fail(`ancla rota ${u.pathname}${u.hash}`);
          await p2.close();
        }
        continue;
      }
      if (u.hostname.includes('linkedin.com') || u.hostname.includes('instagram.com')) {
        ok(`(omitido, bloquea bots) ${href}`);
        continue;
      }
      const r = await fetch(href, { redirect: 'follow' }).catch((e) => ({ status: String(e) }));
      r.status === 200 ? ok(`${r.status} ${href}`) : fail(`${r.status} ${href}`);
    }
    const waLinks = [...all].filter((l) => l.includes('wa.me'));
    waLinks.every((l) => new URL(l).pathname === '/543813198483' && new URL(l).searchParams.get('text'))
      ? ok(`${waLinks.length} enlaces de WhatsApp con mensaje prellenado`)
      : fail('enlaces de WhatsApp inválidos');

    // Marca: sin cuentas viejas, email visible, LinkedIn de Enlace AR, privacidad enlazada
    const old = [...all].filter((l) => /amsoluciones|am-soluciones/i.test(l));
    old.length ? fail(`enlaces a cuentas viejas: ${old.join(', ')}`) : ok('sin enlaces a las cuentas de AM Soluciones');
    [...all].some((l) => l.includes('linkedin.com/in/enlace-ar')) ? ok('LinkedIn apunta a /in/enlace-ar') : fail('falta LinkedIn de Enlace AR');
    [...all].some((l) => l.includes('linkedin.com/company')) ? fail('LinkedIn de empresa viejo visible') : ok('sin LinkedIn de empresa viejo');
    [...all].some((l) => l.includes('instagram.com/enlaceartuc')) ? ok('Instagram apunta a @enlaceartuc') : fail('falta Instagram @enlaceartuc');
    {
      const p3 = await ctx.newPage();
      await p3.goto(BASE + '/contacto', { waitUntil: 'networkidle' });
      const m = await p3.evaluate(() => ({
        aside: !!document.querySelector('.aside a[href="mailto:enlaceartuc@gmail.com"]'),
        footer: !!document.querySelector('footer a[href="mailto:enlaceartuc@gmail.com"]'),
        priv: !!document.querySelector('.privacy a[href="/privacidad"]'),
        footPriv: !!document.querySelector('footer a[href="/privacidad"]'),
      }));
      m.aside && m.footer ? ok('email enlaceartuc@gmail.com en /contacto y en el pie (mailto)') : fail(`email visible: ${JSON.stringify(m)}`);
      m.priv && m.footPriv ? ok('política de privacidad enlazada desde el formulario y el pie') : fail(`privacidad enlazada: ${JSON.stringify(m)}`);
      await p3.close();
    }

    for (const path of ['/robots.txt', '/sitemap-index.xml', '/sitemap-0.xml', '/og.png', '/favicon-32.png', '/favicon-48.png', '/icon-192.png', '/logo.png', '/apple-touch-icon.png', '/no-existe']) {
      const r = await fetch(BASE + path);
      const expected = path === '/no-existe' ? 404 : 200;
      r.status === expected ? ok(`${r.status} ${path}`) : fail(`${r.status} ${path} (esperado ${expected})`);
    }
    const sm = await (await fetch(BASE + '/sitemap-0.xml')).text();
    !sm.includes('/gracias') && !sm.includes('/404') && sm.includes('/soluciones/inteligencia-artificial')
      ? ok('sitemap sin páginas de servicio (gracias/404) y con todas las soluciones')
      : fail('sitemap incorrecto');
    await ctx.close();
  }

  // ---- Movimiento reducido ----
  console.log('\n▶ prefers-reduced-motion');
  {
    const ctx = await newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    const r = await page.evaluate(() => ({
      paused: document.querySelector('[data-graph] svg').animationsPaused(),
      pulses: getComputedStyle(document.querySelector('.pulse')).display,
      revealOpacity: getComputedStyle(document.querySelector('[data-reveal]')).opacity,
    }));
    r.paused && r.pulses === 'none' && r.revealOpacity === '1' ? ok('animaciones desactivadas y contenido visible sin animar') : fail(`reduced motion: ${JSON.stringify(r)}`);
    await ctx.close();
  }
} finally {
  await browser.close();
  stopPreview();
}

console.log(`\n${failures.length ? `✗ ${failures.length} falla(s)` : '✓ QA sin fallas'}`);
process.exit(failures.length ? 1 : 0);
