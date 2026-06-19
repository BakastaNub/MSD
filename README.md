# MSD | Servicio Técnico en Valencia

Landing page corporativa para MSD, empresa especializada en reparación de cocinas, aires acondicionados y otros servicios técnicos en Valencia, España.

## Stack tecnológico

- **React** 18 + **TypeScript**
- **Vite** (bundler)
- **TailwindCSS** v4 (estilos)
- **Framer Motion** (animaciones y scroll)

## Estructura del proyecto

```
src/
├── assets/
│   ├── images/          # Imágenes del sitio
│   └── icons/           # Iconos SVG
├── components/
│   └── sections/        # Componentes de cada sección
│       ├── Navbar.tsx       # Barra de navegación fija
│       ├── Hero.tsx         # Portada principal
│       ├── ServiceSection.tsx  # Componente reutilizable de servicios
│       ├── ScrollWave.tsx   # Animaciones de onda y partículas
│       ├── Cocinas.tsx      # Sección de reparación de cocinas
│       ├── Aires.tsx        # Sección de aires acondicionados
│       ├── OtrosServicios.tsx  # Sección de otros servicios
│       ├── Contacto.tsx     # Sección de contacto
│       └── Footer.tsx       # Pie de página
├── hooks/
├── styles/
├── data/
│   └── company.ts       # Datos centralizados de la empresa
├── App.tsx
└── main.tsx
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Build para producción

```bash
npm run build
```

Los archivos estáticos se generan en la carpeta `dist/`.

## Despliegue en Netlify

1. Conecta el repositorio de GitHub a Netlify.
2. **Build command:** `npm run build`
3. **Publish directory:** `dist`
4. Despliega automáticamente con cada push.

## Personalización

Toda la información textual y de contacto está centralizada en `src/data/company.ts`:

- **Número de WhatsApp:** Cambia `whatsappNumber` (código de país + número, ej: `34600000000`)
- **Textos:** Modifica las descripciones, títulos y horarios
- **Red social / email:** Actualiza los campos correspondientes

Las imágenes se reemplazan en `src/assets/images/` manteniendo los nombres de archivo o actualizando las rutas en `company.ts`.

## Secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | Hero | Portada con logo, descripción y CTA de WhatsApp |
| 2 | Cocinas | Reparación de cocinas domésticas e industriales |
| 3 | Aires | Instalación, mantenimiento y reparación de AA |
| 4 | Otros Servicios | Servicios técnicos adicionales |
| 5 | Contacto | Información de contacto y WhatsApp directo |
| 6 | Footer | Enlaces legales y redes |
