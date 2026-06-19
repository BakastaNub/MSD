export const COMPANY = {
  name: 'MSD',
  slogan: 'Servicio técnico especializado en Valencia',
  description:
    'Expertos en reparación de cocinas domésticas e industriales, aires acondicionados y otros servicios técnicos. Rapidez, profesionalidad y confianza.',
  location: 'Valencia, España',
  address: 'C/ Ejemplo, 12, 46001 Valencia',
  phone: '600 00 00 00',
  whatsappNumber: '34600000000',
  whatsappUrl: 'https://wa.me/34600000000',
  whatsappText: 'Contactar por WhatsApp',
  email: 'info@msdvalencia.es',
  schedule: 'Lun - Vie: 9:00 - 19:00 | Sáb: 10:00 - 14:00',
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Cocinas', href: '#cocinas' },
  { label: 'Aires Acondicionados', href: '#aires' },
  { label: 'Otros Servicios', href: '#otros' },
  { label: 'Contacto', href: '#contacto' },
]

export interface SectionImage {
  src: string
  alt: string
  caption: string
}

export interface ServiceSection {
  id: string
  title: string
  description: string
  images: SectionImage[]
}

export const COCINAS: ServiceSection = {
  id: 'cocinas',
  title: 'Reparación de Cocinas',
  description:
    'Reparamos todo tipo de cocinas domésticas e industriales. Diagnóstico rápido, repuestos originales y garantía en todas nuestras intervenciones.',
  images: [
    {
      src: '/images/cocina-domestica.jpg',
      alt: 'Cocina doméstica',
      caption: 'Reparación de hornos y placas de cocina',
    },
    {
      src: '/images/cocina-industrial.jpg',
      alt: 'Cocina industrial',
      caption: 'Mantenimiento de cocinas industriales',
    },
    {
      src: '/images/tecnico-cocina.jpg',
      alt: 'Técnico reparando cocina',
      caption: 'Diagnóstico técnico especializado',
    },
  ],
}

export const AIRES: ServiceSection = {
  id: 'aires',
  title: 'Aires Acondicionados',
  description:
    'Instalación, mantenimiento y reparación de aires acondicionados domésticos e industriales. Climatización eficiente para tu hogar o negocio.',
  images: [
    {
      src: '/images/aire-domestico.jpg',
      alt: 'Aire acondicionado doméstico',
      caption: 'Instalación de sistemas de climatización',
    },
    {
      src: '/images/aire-industrial.jpg',
      alt: 'Aire acondicionado industrial',
      caption: 'Mantenimiento preventivo anual',
    },
    {
      src: '/images/tecnico-aire.jpg',
      alt: 'Técnico realizando mantenimiento',
      caption: 'Reparación de averías urgentes',
    },
  ],
}

export const OTROS_SERVICIOS: ServiceSection = {
  id: 'otros',
  title: 'Otros Servicios Técnicos',
  description:
    'Realizamos además otros servicios técnicos y soluciones personalizadas según las necesidades del cliente. Consulta sin compromiso.',
  images: [
    {
      src: '/images/servicio-tecnico-1.jpg',
      alt: 'Servicio técnico',
      caption: 'Reparación de electrodomésticos',
    },
    {
      src: '/images/servicio-tecnico-2.jpg',
      alt: 'Reparación especializada',
      caption: 'Instalaciones técnicas a medida',
    },
    {
      src: '/images/servicio-tecnico-3.jpg',
      alt: 'Solución personalizada',
      caption: 'Asesoramiento técnico personalizado',
    },
  ],
}

export const FOOTER_LINKS = [
  { label: 'Aviso Legal', href: '#' },
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Política de Cookies', href: '#' },
]
