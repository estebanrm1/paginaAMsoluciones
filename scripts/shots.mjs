// Capturas de los trabajos publicados (sección "Trabajos"). Uso: npm run assets:shots
import { chromium } from 'playwright-core';
import { chromePath } from './chrome.mjs';

const works = [
  ['rincon-gourmet', 'https://demo-pagina-web.netlify.app/'],
  ['portfolio-chef', 'https://am-solucionesweb.github.io/portfoliocv/'],
  ['cv-online', 'https://demo-cv-basico.netlify.app/'],
];
const browser = await chromium.launch({ executablePath: chromePath });
try {
  for (const [slug, url] of works) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `src/assets/work/${slug}.png` });
    console.log('✓', slug);
    await page.close();
  }
} finally {
  await browser.close();
}
