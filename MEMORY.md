# MEMORY.md - Proyecto MSD Landing Page

## Objetivo del proyecto

Landing page corporativa para la empresa MSD, dedicada a la reparación de cocinas domésticas e industriales, aires acondicionados y otros servicios técnicos en Valencia, España. El objetivo principal es generar contactos por WhatsApp.

## Stack tecnológico

- React 18
- Vite
- TypeScript
- TailwindCSS
- Framer Motion (animaciones)

## Cómo ejecutar localmente

```bash
npm install
npm run dev
```

Esto inicia un servidor de desarrollo en `http://localhost:5173`.

## Cómo desplegar en Netlify

1. Conecta el repositorio de GitHub a Netlify.
2. Netlify detectará automáticamente la configuración de Vite (`build: vite build`, `publish: dist`).
3. Configura las siguientes opciones si es necesario:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Despliega.

Alternativamente, usa la CLI de Netlify:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Cómo subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <URL_DEL_REPOSITORIO>
git push -u origin main
```

## Cómo cambiar el número de WhatsApp

Edita el archivo `src/data/company.ts` y cambia el valor de `WHATSAPP_NUMBER` (sin espacios, con código de país, ej: `34600000000`).

El enlace de WhatsApp se genera automáticamente con el formato: `https://wa.me/{WHATSAPP_NUMBER}`

## Cómo reemplazar imágenes

Las imágenes están en `src/assets/images/`. Simplemente reemplaza los archivos manteniendo el mismo nombre o actualiza las rutas en `src/data/company.ts`.

Las imágenes se importan dinámicamente desde los arrays en `src/data/company.ts`.

## Cómo modificar textos

Todos los textos de la página están centralizados en `src/data/company.ts`. Edita ese archivo para cambiar cualquier contenido.

## Cómo añadir nuevas secciones

1. Crea un nuevo componente en `src/components/sections/`.
2. Añade la data correspondiente en `src/data/company.ts`.
3. Importa y renderiza el componente en `App.tsx`.
4. Si tiene navegación, añade el enlace en el array `NAV_LINKS` en `src/data/company.ts`.

## Convenciones utilizadas

- **Nombres de archivos**: PascalCase para componentes (`Hero.tsx`), camelCase para hooks y utilidades.
- **Data centralizada**: Toda la información textual está en `src/data/company.ts`.
- **Imágenes**: Se importan estáticamente desde `src/assets/images/`.
- **Estilos**: TailwindCSS con clases utilitarias. No se usan archivos CSS personalizados.
- **Animaciones**: Framer Motion con `useInView` para disparar al entrar al viewport.
- **SEO**: Configurado en `index.html` con tags meta y Open Graph básico.

## Estructura de carpetas

```
src/
├── assets/
│   ├── images/        # Imágenes del sitio
│   └── icons/         # Iconos SVG
├── components/
│   └── sections/      # Componentes de cada sección
├── hooks/             # Custom hooks
├── styles/            # Estilos globales (Tailwind)
├── data/
│   └── company.ts     # Data centralizada de la empresa
├── App.tsx            # Componente principal
└── main.tsx           # Entry point
```
