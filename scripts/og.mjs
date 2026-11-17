// Genera la imagen social (public/og.png, 1200×630) y el icono para iOS (public/apple-touch-icon.png).
// Uso: npm run assets:og
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright-core';
import { chromePath } from './chrome.mjs';

const font = (p) => 'data:font/woff2;base64,' + readFileSync(p).toString('base64');
const sans = font('node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2');
const mono = font('node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2');
const mark = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#1b222b" stroke="rgba(170,181,197,.3)"/><path d="M8.5 20.5c0-5 3.4-8.5 7.5-8.5s7.5 3.5 7.5 8.5" fill="none" stroke="#F5F6F7" stroke-width="1.8" stroke-linecap="round"/><circle cx="8.5" cy="20.5" r="2.3" fill="#0E1217" stroke="#F5F6F7" stroke-width="1.5"/><circle cx="16" cy="12" r="1.6" fill="#F5F6F7"/><circle cx="23.5" cy="20.5" r="2.7" fill="#477FF5"/></svg>`;

const browser = await chromium.launch({ executablePath: chromePath });
try {
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.setContent(`<!doctype html><html><head><style>
    @font-face{font-family:G;src:url(${sans})} @font-face{font-family:M;src:url(${mono})}
    *{margin:0;box-sizing:border-box}
    body{width:1200px;height:630px;background:#0e1217;color:#f5f6f7;font-family:G;padding:72px 80px;position:relative;overflow:hidden;
      background-image:linear-gradient(to right,rgba(170,181,197,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(170,181,197,.07) 1px,transparent 1px);background-size:72px 72px}
    .glow{position:absolute;right:-160px;bottom:-260px;width:760px;height:760px;background:radial-gradient(closest-side,rgba(71,127,245,.32),transparent)}
    .brand{display:flex;align-items:center;gap:18px;font-size:34px;font-weight:650;letter-spacing:-.04em}
    .brand span{font-family:M;font-weight:500;font-size:29px;color:#8db0ff;letter-spacing:0}
    .k{margin-top:70px;font-family:M;font-size:20px;letter-spacing:.06em;text-transform:uppercase;color:#8c98a9;display:flex;align-items:center;gap:14px}
    .k:before{content:'';width:12px;height:12px;border-radius:50%;background:#477ff5;box-shadow:0 0 0 6px rgba(71,127,245,.2)}
    h1{margin-top:22px;font-size:76px;line-height:1.02;letter-spacing:-.045em;font-weight:620;max-width:900px}
    h1 i{font-style:normal;color:#8c98a9}
    p{position:absolute;left:80px;bottom:64px;font-size:24px;color:#c3cbd6}
    svg.l{position:absolute;right:0;bottom:0;width:640px;height:300px}
  </style></head><body><div class="glow"></div>
  <svg class="l" viewBox="0 0 640 300" fill="none"><path d="M0 260 C 200 260 260 90 420 90 S 600 200 640 180" stroke="#477ff5" stroke-opacity=".5"/><circle cx="420" cy="90" r="6" fill="#477ff5"/></svg>
  <div class="brand">${mark(56)}<b style="font-weight:650">enlace<span>.ar</span></b></div>
  <div class="k">Tecnología con propósito</div>
  <h1>Primero entendemos tu negocio. <i>Después elegimos la tecnología.</i></h1>
  <p>Desarrollo web · Inteligencia artificial · Automatización e integraciones</p>
  </body></html>`);
  await og.evaluate(() => document.fonts.ready);
  await og.screenshot({ path: 'public/og.png' });
  console.log('✓ public/og.png');

  const icon = await browser.newPage({ viewport: { width: 180, height: 180 } });
  await icon.setContent(`<style>*{margin:0}body{width:180px;height:180px;background:#0e1217}</style>${mark(180).replace('rx="9"', 'rx="0"')}`);
  await icon.screenshot({ path: 'public/apple-touch-icon.png' });
  console.log('✓ public/apple-touch-icon.png');
} finally {
  await browser.close();
}
