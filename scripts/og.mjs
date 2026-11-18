// Genera la imagen social (public/og.png, 1200×630) con el logo oficial.
// Uso: npm run assets:og
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright-core';
import { chromePath } from './chrome.mjs';

const font = (p) => 'data:font/woff2;base64,' + readFileSync(p).toString('base64');
const sans = font('node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2');
const mono = font('node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2');
const lockup = 'data:image/svg+xml;base64,' + readFileSync('src/assets/brand/logo-horizontal-negativo.svg').toString('base64');

const browser = await chromium.launch({ executablePath: chromePath });
try {
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.setContent(`<!doctype html><html><head><style>
    @font-face{font-family:G;src:url(${sans})} @font-face{font-family:M;src:url(${mono})}
    *{margin:0;box-sizing:border-box}
    body{width:1200px;height:630px;background:#0a0f19;color:#f5f6f7;font-family:G;padding:72px 80px;position:relative;overflow:hidden;
      background-image:linear-gradient(to right,rgba(170,181,197,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(170,181,197,.07) 1px,transparent 1px);background-size:72px 72px}
    .glow{position:absolute;right:-160px;bottom:-260px;width:760px;height:760px;background:radial-gradient(closest-side,rgba(31,107,255,.34),transparent)}
    .brand{height:62px}
    .k{margin-top:70px;font-family:M;font-size:20px;letter-spacing:.06em;text-transform:uppercase;color:#8c98a9;display:flex;align-items:center;gap:14px}
    .k:before{content:'';width:12px;height:12px;border-radius:50%;background:#1f6bff;box-shadow:0 0 0 6px rgba(31,107,255,.22)}
    h1{margin-top:22px;font-size:76px;line-height:1.02;letter-spacing:-.045em;font-weight:620;max-width:900px}
    h1 i{font-style:normal;color:#8c98a9}
    p{position:absolute;left:80px;bottom:64px;font-size:24px;color:#c3cbd6}
    svg.l{position:absolute;right:0;bottom:0;width:640px;height:300px}
  </style></head><body><div class="glow"></div>
  <svg class="l" viewBox="0 0 640 300" fill="none"><path d="M0 260 C 200 260 260 90 420 90 S 600 200 640 180" stroke="#1f6bff" stroke-opacity=".5"/><circle cx="420" cy="90" r="6" fill="#1f6bff"/></svg>
  <img class="brand" src="${lockup}" alt="">
  <div class="k">Tecnología con propósito</div>
  <h1>Primero entendemos tu negocio. <i>Después elegimos la tecnología.</i></h1>
  <p>Desarrollo web · Inteligencia artificial · Automatización e integraciones</p>
  </body></html>`);
  await og.evaluate(() => document.fonts.ready);
  await og.screenshot({ path: 'public/og.png' });
  console.log('✓ public/og.png');

} finally {
  await browser.close();
}
