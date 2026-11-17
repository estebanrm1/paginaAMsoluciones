// Genera las piezas de marca a partir del logo oficial (src/assets/brand/source/enlace-ar-logo.png).
// Uso: npm run assets:brand
//  - Versión color (fondos claros) y versión invertida (fondos oscuros: el azul marino pasa a blanco,
//    el degradé azul se conserva).
//  - Recortes: lockup completo (símbolo | texto), símbolo solo.
//  - Iconos: favicon 32/48/192, apple-touch-icon 180 y logo cuadrado para buscadores (512).
import sharp from 'sharp';

const SRC = 'src/assets/brand/source/enlace-ar-logo.png';
const OUT = 'src/assets/brand';
const BOX = { lockup: { left: 98, top: 195, width: 1968, height: 303 }, mark: { left: 98, top: 195, width: 532, height: 303 } };

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

// Invierte solo los tonos oscuros (azul marino) hacia blanco, con transición suave en el degradé.
const reversed = Buffer.from(data);
for (let i = 0; i < reversed.length; i += 4) {
  const max = Math.max(reversed[i], reversed[i + 1], reversed[i + 2]);
  const t = Math.min(1, Math.max(0, (150 - max) / 105));
  reversed[i] = Math.round(reversed[i] + (245 - reversed[i]) * t);
  reversed[i + 1] = Math.round(reversed[i + 1] + (246 - reversed[i + 1]) * t);
  reversed[i + 2] = Math.round(reversed[i + 2] + (247 - reversed[i + 2]) * t);
}
const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
const variants = { color: data, reversed };

for (const [name, buf] of Object.entries(variants)) {
  for (const [part, box] of Object.entries(BOX)) {
    await sharp(buf, raw).extract(box).png({ compressionLevel: 9 }).toFile(`${OUT}/${part}-${name}.png`);
    console.log(`✓ ${OUT}/${part}-${name}.png`);
  }
}

// Iconos: símbolo color sobre fondo blanco redondeado (legible en pestañas claras y oscuras).
const mark = await sharp(data, raw).extract(BOX.mark).png().toBuffer();
async function icon(size, file, radius = 0.22, pad = 0.14) {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${size * radius}" fill="#ffffff"/></svg>`);
  await sharp(bg).composite([{ input: m, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile(file);
  console.log(`✓ ${file}`);
}
await icon(32, 'public/favicon-32.png', 0.2, 0.06);
await icon(48, 'public/favicon-48.png', 0.2, 0.08);
await icon(192, 'public/icon-192.png');
await icon(180, 'public/apple-touch-icon.png', 0, 0.14);
await icon(512, 'public/logo.png', 0, 0.12);
