# Build Bytes — sitio web corporativo

Sitio corporativo de una sola página (con páginas legales aparte) construido con **Next.js 16 (App Router)**, **TypeScript** y **Tailwind CSS v4**. El formulario de contacto envía los mensajes por correo sin backend propio.

## Stack y decisiones técnicas

| Área | Elección | Motivo |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Prerenderizado estático de todas las páginas, SEO y metadata nativos, despliegue simple |
| Lenguaje | TypeScript (modo estricto) | Menos errores en runtime y un solo esquema de formulario tipado |
| Estilos | Tailwind CSS v4 | Sin runtime JS, CSS final ~29 KB, tokens de diseño centralizados en `globals.css` |
| Iconos | lucide-react | Tree-shaking; solo se incluyen los iconos usados |
| Validación | Zod | Esquema único en `src/lib/validation.ts`, ejecutado en el navegador antes de enviar |
| Formulario | Web3Forms | El navegador envía directo al servicio, que reenvía el correo. Sin servidor ni base de datos; gratis hasta 250 mensajes al mes |
| Imágenes | SVG inline + `next/og` | Cero archivos binarios: el favicon y la imagen Open Graph se generan en el build |

El sitio se compila 100 % estático: no hay rutas de servidor, así que puede alojarse en cualquier hosting de archivos estáticos.

Solo dos componentes se ejecutan en el cliente (`Header`, por el menú móvil, y `ContactForm`). El resto son Server Components, por lo que el JavaScript enviado al navegador es mínimo.

## Estructura del proyecto

```
.
├── public/
│   ├── logo.svg                        Logotipo horizontal para fondos claros
│   ├── logo-inverse.svg                Logotipo horizontal para fondos oscuros
│   └── logo-mark.svg                   Solo el isotipo (avatares, redes sociales)
├── src/
│   ├── app/
│   │   ├── politica-de-privacidad/     Página legal (contenido de ejemplo)
│   │   ├── terminos/                   Página legal (contenido de ejemplo)
│   │   ├── icon.tsx                    Favicon generado
│   │   ├── opengraph-image.tsx         Imagen Open Graph generada
│   │   ├── layout.tsx                  Layout raíz, metadata, JSON-LD, header y footer
│   │   ├── not-found.tsx               Página 404
│   │   ├── page.tsx                    Home: composición de secciones
│   │   ├── robots.ts                   robots.txt
│   │   └── sitemap.ts                  sitemap.xml
│   ├── components/
│   │   ├── forms/                      ContactForm y campos reutilizables
│   │   ├── layout/                     Header, Footer, contenedor de páginas legales
│   │   ├── sections/                   Hero, About, Services, WhyUs, CallToAction, Contact
│   │   └── ui/                         Button, Container, Section, Logo, Icon, HeroVisual
│   ├── content/site.ts                 TODOS los textos y datos de contacto
│   ├── lib/                            validation.ts, contact-service.ts, utils.ts
│   └── styles/globals.css              Tokens de diseño y estilos base
├── .env.example
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

## Requisitos

- Node.js 20 o superior (probado con Node 24)
- npm 10 o superior

## Instalación

```bash
npm install
cp .env.example .env.local   # en PowerShell: Copy-Item .env.example .env.local
```

## Ejecución local

```bash
npm run dev
```

Disponible en http://localhost:3000.

Sin `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, el formulario se puede probar igual: en desarrollo el envío se simula, el mensaje se imprime en la consola del navegador y se muestra el estado de éxito.

Otros comandos:

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript sin emitir archivos
```

## Build de producción

```bash
npm run build
npm run start       # sirve el build en http://localhost:3000
```

## Variables de entorno

| Variable | Obligatoria | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL pública del sitio. Se usa en canonical, Open Graph y sitemap. Ej: `https://www.buildbyte.cl` |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Sí, en producción | Access key de [Web3Forms](https://web3forms.com) asociada a `contacto@buildbyte.cl` |

### Activar el envío real de correos

1. Entrar a [web3forms.com](https://web3forms.com), escribir `contacto@buildbyte.cl` y pulsar **Create Access Key**.
2. Confirmar el correo de verificación que llega a esa casilla.
3. Copiar la access key en `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (en `.env.local` para local y en el panel del hosting para producción).
4. Enviar un mensaje de prueba desde el sitio y revisar la bandeja de entrada (y la carpeta de spam la primera vez).

La key es pública a propósito: viaja en el JavaScript del sitio y solo autoriza a **enviar** correos a esa casilla, nunca a leerlos ni a cambiar la configuración de la cuenta.

El plan gratuito cubre 250 mensajes al mes. Si algún día no alcanza, cambiar de proveedor (Formspree, Getform, Basin) solo requiere ajustar `ENDPOINT` y el cuerpo de la petición en `src/lib/contact-service.ts`.

## Despliegue

### Opción recomendada: Vercel

1. Subir el repositorio a GitHub, GitLab o Bitbucket.
2. En [vercel.com](https://vercel.com) elegir **Add New → Project** e importar el repositorio.
3. Vercel detecta Next.js automáticamente; no hay que cambiar la configuración de build.
4. En **Settings → Environment Variables** agregar `NEXT_PUBLIC_SITE_URL` y `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
5. Hacer **Deploy** y luego asociar el dominio en **Settings → Domains**.

Cada push a la rama principal genera un despliegue nuevo.

### Alternativas

- **Netlify** o **Cloudflare Pages**: importar el repositorio, build `npm run build`, y definir las mismas dos variables de entorno.
- **Hosting compartido o cualquier servidor de archivos**: como no hay rutas de servidor, se puede agregar `output: "export"` en `next.config.ts` (quitando el bloque `headers()`, que no aplica en export) y subir por FTP el contenido de la carpeta `out/`.

## Identidad de marca

El logotipo es vectorial y propio: un pilar vertical (*build*) con dos bloques redondeados apilados (*bytes*) cuya silueta forma una letra **B**. El bloque inferior es más ancho y usa el azul claro de la paleta para sugerir crecimiento por capas.

| Uso | Archivo |
| --- | --- |
| Web (header, footer) | `src/components/ui/BrandMark.tsx` + `src/components/ui/Logo.tsx` |
| Favicon e imagen Open Graph | `src/lib/brand-mark-og.tsx` (misma geometría, dibujada con cajas para `next/og`) |
| Presentaciones, firmas, redes | `public/logo.svg`, `public/logo-inverse.svg`, `public/logo-mark.svg` |

Colores del logotipo: azul principal `#1d4ed8`, azul claro `#93c5fd` (fondos claros) o `#60a5fa` (fondos oscuros). El tipograma usa Inter Bold, la misma fuente del sitio.

Si modificas la geometría del isotipo, replícala en los tres lugares: el componente SVG, la versión para `next/og` y los archivos de `public/`.

## Personalizar el contenido

Casi todo el texto vive en `src/content/site.ts`: nombre de la empresa, rubro, datos de contacto, navegación, hero, secciones, servicios, ventajas y footer. Los bloques que siguen siendo de ejemplo están marcados con `TODO`.

Pendientes antes de publicar:

- `src/content/site.ts`: el teléfono (`+56 9 XXXX XXXX`) sigue siendo un valor de ejemplo.
- `src/app/politica-de-privacidad/page.tsx` y `src/app/terminos/page.tsx`: textos legales de ejemplo.
- `src/components/ui/HeroVisual.tsx`: ilustración del hero; puede reemplazarse por una imagen de marca.
- `src/styles/globals.css`: paleta corporativa (`--color-brand-*`) y tipografía.

## Accesibilidad y rendimiento

- HTML semántico (`header`, `main`, `nav`, `section`, `footer`) y un solo `h1` por página.
- Enlace "Saltar al contenido principal" para navegación por teclado.
- Estados `hover` y `focus-visible` en todos los elementos interactivos; contraste AA.
- Formulario con `aria-invalid`, `aria-describedby`, `aria-live` y foco automático en el primer campo con error.
- Animaciones desactivadas cuando el sistema declara `prefers-reduced-motion`.
- Todas las páginas se prerenderizan como HTML estático; la fuente se carga con `next/font` (sin peticiones a Google en runtime).

## Seguridad y privacidad del formulario

- Validación con Zod antes de enviar: campos obligatorios, formato de correo y de teléfono, y largos máximos.
- Campo trampa (honeypot) invisible: si un bot lo completa, el envío se descarta en silencio.
- Web3Forms aplica su propio filtro antispam y limita la frecuencia de envíos.
- Los mensajes viajan por HTTPS directo al servicio y llegan a `contacto@buildbyte.cl`; el sitio no guarda nada en base de datos ni usa cookies o analítica.
- La access key es pública por diseño y solo permite enviar correos a esa casilla.
