# Servicios Nuñez — Landing

Landing de **Servicios Nuñez**: electricista, plomero y gasista matriculado en CABA y GBA. Sitio de una sola página (con páginas por oficio y términos) orientado a captar consultas por WhatsApp, con presupuesto virtual sin cargo y garantía por escrito.

## Stack

| Pieza | Versión / herramienta |
| --- | --- |
| Framework | Next.js 16.2.10 (App Router + Turbopack) |
| UI | React 19.2.4 |
| Estilos | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Lenguaje | TypeScript 5 |
| Tipografías | Archivo + Sometype Mono (`next/font/google`) |
| Tests | Vitest 4 + Testing Library + jsdom |
| Gestor de paquetes | bun (el proyecto se corre con bun) |

> **Nota:** `AGENTS.md` advierte que esta versión de Next.js puede diferir de lo conocido. Antes de escribir código, leer la guía correspondiente en `node_modules/next/dist/docs/`.

## Requisitos previos

- **Node.js ≥ 20**
- **bun** (los comandos de abajo usan bun; los scripts también corren con npm/pnpm/yarn)

## Instalación y arranque

```bash
bun install
bun start        # levanta el servidor de desarrollo en http://localhost:3000
```

Abrir [http://localhost:3000](http://localhost:3000).

> `start` y `dev` ejecutan lo mismo (`next dev`): **no hay** un script de arranque de producción; para servir un build de producción se usa `next start` a mano.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `bun run dev` | Servidor de desarrollo (`next dev`) |
| `bun start` | Igual que `dev` (`next dev`) |
| `bun run build` | Build de producción (`next build`) |
| `bun run lint` | ESLint (`eslint`) |
| `bun run test` | Tests con Vitest (`vitest run`) |

## Variables de entorno

Se cargan desde `.env` (no versionar valores reales).

| Variable | Propósito | Obligatoria |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio público del sitio. Alimenta `metadataBase`, canonical, `sitemap.xml`, `robots.txt` y Open Graph. Admite dominio IDN (con ñ): se normaliza a **punycode**, que es la forma canónica. | Sí (para SEO correcto) |
| `IP_LOCAL` | IP de la red local que se agrega a `allowedDevOrigins` de Next para probar desde otros dispositivos en desarrollo. | Opcional |

## Estructura del proyecto

```
app/
  layout.tsx              # Metadata global, fuentes, SEO base, shell de una columna
  globals.css            # Theme (colores), animaciones y el variant custom short-landscape
  not-found.tsx          # Página 404
  sitemap.ts             # Genera /sitemap.xml
  robots.ts              # Genera /robots.txt
  (site)/                # Route group con las páginas visibles
    page.tsx             #   Home
    [trade]/page.tsx     #   Página por oficio (estática vía generateStaticParams)
    terminos/page.tsx    #   Términos y condiciones
  components/            # Un componente por archivo, agrupados por sección visual
    header/ section/ trade/ faq/ testimonials/ footer/ whatsapp/ ui/ seo/
  lib/
    site.ts              # Config central de SEO (SITE, SITE_URL, absoluteUrl)
    structuredData.ts    # Builders de JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList)
    trades.ts            # waLink() para armar los enlaces de WhatsApp
    tradeAccent.ts       # Sistema de color de acento por oficio
    container.ts         # CONTENT_WIDTH (ancho de la columna centrada)
  types/                 # Tipos del dominio (trade, step, zone, testimonial, terms, work, contact)
public/
  data/*.json            # Contenido: trades, steps, zones, testimonials, works, terms, contact
  images/*.webp          # Fotos de oficios y logo
tests/
  unit/                  # Tests unitarios (Vitest + Testing Library)
  integration/           # Tests de integración
```

## Contenido y datos

El contenido vive en `public/data/*.json` y se consume desde los componentes (no está hardcodeado en el markup):

- `trades.json` — oficios (electricidad, plomería, gas): copy, servicios, FAQs y campos de SEO (`seoTitle`, `keywords`). Cada oficio genera su página estática.
- `steps.json`, `zones.json`, `testimonials.json`, `works.json`, `terms.json`, `contact.json` — pasos de "cómo trabajamos", zonas de cobertura, opiniones, trabajos recientes, términos y datos de contacto (WhatsApp, Instagram).

## SEO

- **Metadata**: global en `app/layout.tsx` (título con template `%s · Servicios Nuñez`, Open Graph, Twitter, robots) y por página vía `generateMetadata`, cada una con su `canonical`.
- **Rutas generadas**: `sitemap.ts` → `/sitemap.xml`, `robots.ts` → `/robots.txt`.
- **Datos estructurados (JSON-LD)**: `LocalBusiness` en el home; `Service` + `FAQPage` + `BreadcrumbList` en cada oficio (`app/lib/structuredData.ts`, renderizados por `app/components/seo/JsonLd.tsx`).
- **Config central**: `app/lib/site.ts` (dominio desde `NEXT_PUBLIC_SITE_URL`, normalizado a punycode). No repetir el dominio ni la marca en otros archivos.

## Convenciones

- **Layout de una sola columna** centrada; el ancho se controla en un solo lugar (`CONTENT_WIDTH` en `app/lib/container.ts`).
- **Un componente por archivo**, agrupados por carpeta de sección visual; patrón lista → ítem.
- **Sistema de acentos por oficio** (`tradeAccent.ts`): ámbar / agua / naranja según electricidad / plomería / gas.
- **Breakpoints**: `base` (mobile) → `md` (tablet) → `lg` (notebook) → `xl`/`2xl` (desktop). La tipografía y los grids deben tener su escalón `md` propio (no saltar de mobile a `lg`).
- **Mobile en horizontal**: usar el variant custom `short-landscape` (definido en `globals.css`), no `landscape:` pelado (que también matchea desktop).
- **Imágenes** vía `next/image`; formato AVIF/WebP.
- **Clean Code / Clean Architecture**: dominio y datos separados de la UI; la lógica de SEO/WhatsApp vive en `lib/` en funciones puras y testeables.

## Tests

```bash
bun run test     # vitest run (unit + integration)
```

## Build y deploy

```bash
bun run build    # next build
```

Pensado para desplegar en Vercel (framework Next.js, sin configuración adicional).

## TODO / Pendientes

- **Imágenes de los heroes**: las fuentes son de 1408×768 px y se ven blandas al ampliarse en pantallas densas (notebook/tablets grandes). Falta que el cliente aporte **fuentes de mayor resolución** (idealmente ≥ ~2560 px de ancho).
- Definir el **dominio de producción** definitivo en `NEXT_PUBLIC_SITE_URL`.
