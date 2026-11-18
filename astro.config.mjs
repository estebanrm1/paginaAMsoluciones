// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Única fuente de la URL pública: canonical, og:url, og:image, sitemap, robots.txt y JSON-LD salen de acá.
  // Al conectar el dominio propio (ej. https://enlace.ar), cambiar esta línea y activar la redirección en netlify.toml.
  site: 'https://enlace-ar.netlify.app',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/gracias') })],
});
