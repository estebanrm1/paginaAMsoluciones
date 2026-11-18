# Enlace AR · Sitio web

Sitio de **Enlace AR**: soluciones tecnológicas para negocios.
Desarrollo web, inteligencia artificial y automatización e integraciones.
Concepto: **Tecnología con propósito**.

- **Identidad:** logo vectorial oficial en `src/assets/brand/source/vector/` (del paquete `Enlace-Ar-logo-vector.zip`). Colores: azul marino `#01102A` y degradé `#0092FC` → `#0043FD`.
- **Producción actual:** https://enlace-ar.netlify.app
- **Dominio sugerido:** `enlace.ar` (libre según DNS al 17/11/2026, sin registrar todavía)

## Stack

| Pieza | Elección | Por qué |
| --- | --- | --- |
| Framework | [Astro 7](https://astro.build), salida estática | Es un sitio de contenido y conversión. Genera HTML real por ruta (mejor SEO que la SPA anterior) y casi no usa JS: un solo archivo de 4,9 KB, el del formulario. |
| Estilos | CSS propio con tokens (`src/styles/global.css`) | Un design system chico y coherente, sin el peso de Bootstrap ni de una librería de componentes. |
| Tipografía | Geist + Geist Mono (autoalojadas con Fontsource) | Moderna y técnica, con jerarquías claras. Sin depender de Google Fonts. |
| Imágenes | `astro:assets`: WebP responsive con lazy loading | Las capturas pasan de 1,2 MB a 15–100 KB. |
| Formulario | Netlify Forms | Funciona de forma nativa en el hosting actual, sin credenciales ni servicios de terceros. |

## Estructura

```
src/
  assets/brand/         ← SVG oficiales (source/vector) y versiones recortadas que usa el sitio (horizontal color y negativo, isotipo)
  data/site.ts          ← TODO el contenido: copy, soluciones, FAQ, equipo, contacto
  styles/global.css     ← design system: tokens, tonos de sección, botones, utilidades
  layouts/Base.astro    ← <head> con SEO, Open Graph, JSON-LD; header, footer y scripts globales
  components/           ← Header, Footer, Logo, Icon, SystemGraph (visual del hero), Faq, CtaBand
  pages/
    index.astro                       ← home
    soluciones/[slug].astro           ← 3 páginas de solución generadas desde site.ts
    nosotros.astro · contacto.astro · gracias.astro · 404.astro
scripts/
  qa.mjs     ← QA end-to-end (rutas × 4 anchos, axe, formulario, navegación, anclas, enlaces, SEO)
  brand.mjs  ← recorta los SVG oficiales y genera los iconos (favicon 32/48, icon 192, apple-touch 180, logo.png 512) desde el isotipo
  og.mjs     ← genera public/og.png
```

**Para cambiar textos, teléfonos o redes, editá solo `src/data/site.ts`.** El nombre de la marca también está ahí (`site.name`).

## Comandos

```bash
npm install
npm run dev          # desarrollo en http://localhost:4321
npm run build        # build de producción en dist/
npm run qa           # QA completa sobre el build (requiere Chrome instalado)
npm run assets:brand # regenerar logos SVG recortados e iconos (si cambia el paquete vectorial)
npm run assets:og    # regenerar la imagen social
```

Requiere Node ≥ 22.23.4 (ver `.nvmrc`; Netlify lo toma de `netlify.toml`).

## Formulario de contacto (Netlify Forms)

El formulario `contacto` se detecta automáticamente en cada deploy. **Hay que hacer dos ajustes una sola vez en Netlify:**

1. **Site configuration → Forms → Enable form detection** (si no está activo).
2. **Forms → Form notifications → Add notification → Email notification**: el email donde querés recibir las consultas.

Cómo funciona:
- Valida en el navegador con mensajes accesibles: resumen de errores, foco y `aria-invalid`.
- Envía por `fetch` y muestra la confirmación en la misma página.
- **Si el envío falla**, ofrece mandar la consulta por WhatsApp con todos los datos ya redactados. Nunca se pierde un lead.
- Sin JavaScript, envía de forma nativa y Netlify redirige a `/gracias`.
- Tiene un honeypot antispam (`bot-field`).
- Los enlaces contextuales precargan opciones: `/contacto?perfil=empresa` o `/contacto?necesidad=ia`.

El plan gratuito de Netlify incluye 100 envíos por mes.

## Medición (analítica, eventos y UTM)

La medición se activa con **variables de entorno en Netlify** (*Project configuration → Environment variables*) y un deploy nuevo. No hace falta tocar código.

| Variable | Proveedor | Cookies |
| --- | --- | --- |
| `PUBLIC_PLAUSIBLE_DOMAIN` (ej. `enlace-ar.netlify.app`) | Plausible (requiere cuenta) | No: sin aviso de consentimiento |
| `PUBLIC_GA4_ID` (ej. `G-XXXXXXX`) | Google Analytics 4 | Sí: muestra un aviso y GA4 se carga solo si la persona acepta |

Sin ninguna de las dos, no se carga ningún script de terceros. Los eventos igual se registran en `window.dataLayer`.

**Eventos** (`src/scripts/analytics.ts`):
- `generate_lead`: envío exitoso del formulario. Parámetros: `perfil` (`empresa` o `profesional`) y las UTM.
- `click_whatsapp`: clic en cualquier enlace a wa.me. Parámetro: `ubicacion` (página · sección, header o footer).
- `click_cta`: clic en «Contanos qué necesitás mejorar», «Quiero optimizar mi empresa» y «Quiero potenciar mi proyecto». Para medir otro botón, agregale `data-cta="Nombre"`.

**UTM:** se guardan al llegar (por ejemplo, desde un enlace de Instagram con `?utm_source=instagram&utm_medium=social`) y se conservan durante toda la visita. Se envían con el formulario (campos `utm_*`), así cada consulta en Netlify muestra su origen.

## Calidad verificada

- **Lighthouse (móvil):** rendimiento 99–100, accesibilidad 100, buenas prácticas 100, SEO 100. TBT 0 ms, CLS < 0,02.
- **axe-core (WCAG 2.2 AA):** 0 violaciones en todas las rutas, en escritorio y en móvil.
- **Sin scroll horizontal ni errores de consola** en 1440, 1280, 820 y 390 px.
- **`prefers-reduced-motion` respetado:** sin animaciones y con todo el contenido visible.
- **Rendimiento:** las secciones fuera de pantalla usan `content-visibility`. La navegación a anclas está resuelta para que caiga exacta.

## SEO

- `title` y `description` únicos por página, canonical, Open Graph y Twitter Card.
- **JSON-LD:** `ProfessionalService` y `WebSite` en todas las páginas. Además, `Service` + `BreadcrumbList` + `FAQPage` en cada solución y `FAQPage` en la home.
- `sitemap-index.xml` (excluye `/gracias` y `/404`) y `robots.txt`.
- **Redirecciones 301** desde las URLs del sitio anterior (`/inicio`, `/servicios/*`, `/sobre_nosotros`), en `netlify.toml`.

## Pendientes del negocio (no técnicos)

- **Registrar el dominio `enlace.ar`** en NIC Argentina y **verificar la marca en INPI**.
- **Renombrar las cuentas de Instagram y LinkedIn** a Enlace AR y actualizar `instagram`, `instagramHandle` y `linkedin` en `src/data/site.ts`.
- **Si conectan el dominio propio,** actualizar `site` en `astro.config.mjs`, `site.url` en `src/data/site.ts` y `public/robots.txt`.

## Historial

El sitio anterior a la marca Enlace AR (React + Bootstrap) quedó preservado en la rama `esteban` y en el tag `legacy-react-2024`. Las URLs de ese sitio redirigen a las nuevas (ver `netlify.toml`).
