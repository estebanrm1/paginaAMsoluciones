// Genera las piezas de marca desde los SVG vectoriales oficiales (src/assets/brand/source/vector,
// paquete Enlace-Ar-logo-vector.zip). Uso: npm run assets:brand
//  1. Recorta el viewBox de cada SVG al contorno real del dibujo (los originales traen márgenes amplios),
//     sin modificar trazos ni colores → src/assets/brand/*.svg (los usa el sitio).
//  2. Rasteriza iconos desde el isotipo: favicon 32/48, icon 192, apple-touch 180, logo 512 (buscadores),
//     sobre placa blanca para que el azul marino se lea en pestañas claras y oscuras.
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';
import { chromium } from 'playwright-core';
import { chromePath } from './chrome.mjs';

const SRC = 'src/assets/brand/source/vector';
const OUT = 'src/assets/brand';
const files = {
  'logo-horizontal-color.svg': 'logo-horizontal-color-transparente.svg',
  'logo-horizontal-negativo.svg': 'logo-horizontal-negativo-transparente.svg',
  'isotipo-color.svg': 'isotipo-color-transparente.svg',
};

// Contorno real de cada dibujo, medido en el navegador (getBBox respeta curvas y trazos).
const browser = await chromium.launch({ executablePath: chromePath });
const page = await browser.newPage();
const cropped = {};
for (const [out, src] of Object.entries(files)) {
  const svg = readFileSync(`${SRC}/${src}`, 'utf8');
  await page.setContent(`<!doctype html><body style="margin:0">${svg}</body>`);
  const box = await page.evaluate(() => {
    const el = document.querySelector('svg');
    const b = el.getBBox();
    return { x: b.x, y: b.y, w: b.width, h: b.height };
  });
  const pad = Math.max(box.w, box.h) * 0.01;
  const vb = [box.x - pad, box.y - pad, box.w + pad * 2, box.h + pad * 2].map((n) => +n.toFixed(1));
  const result = svg
    .replace(/viewBox="[^"]*"/, `viewBox="${vb.join(' ')}"`)
    .replace(/\swidth="[^"]*"/, ` width="${Math.round(vb[2])}"`)
    .replace(/\sheight="[^"]*"/, ` height="${Math.round(vb[3])}"`);
  writeFileSync(`${OUT}/${out}`, result);
  cropped[out] = { svg: result, w: vb[2], h: vb[3] };
  console.log(`✓ ${OUT}/${out} (viewBox ${vb.join(' ')})`);
}
await browser.close();

// Isotipo sobre placa blanca redondeada (base de los iconos).
const iso = cropped['isotipo-color.svg'];
const isoInner = iso.svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const isoViewBox = iso.svg.match(/viewBox="([^"]*)"/)[1];
const plate = (size, radius, pad) => {
  const inner = size * (1 - pad * 2);
  const h = inner * (iso.h / iso.w);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${size * radius}" fill="#ffffff"/><svg x="${(size - inner) / 2}" y="${(size - h) / 2}" width="${inner}" height="${h}" viewBox="${isoViewBox}">${isoInner}</svg></svg>`;
};

async function icon(size, file, radius, pad) {
  await sharp(Buffer.from(plate(size, radius, pad)), { density: 300 }).resize(size, size).png({ compressionLevel: 9 }).toFile(file);
  console.log(`✓ ${file}`);
}
await icon(32, 'public/favicon-32.png', 0.2, 0.06);
await icon(48, 'public/favicon-48.png', 0.2, 0.08);
await icon(192, 'public/icon-192.png', 0.22, 0.14);
await icon(180, 'public/apple-touch-icon.png', 0, 0.14);
await icon(512, 'public/logo.png', 0, 0.12);
