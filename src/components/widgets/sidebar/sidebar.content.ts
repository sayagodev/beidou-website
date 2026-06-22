import { t, type Dictionary } from 'intlayer'

const sidebarContent = {
  key: 'sidebar',
  content: {
    gettingStarted: t({
      en: 'Getting Started',
      es: 'Primeros Pasos',
    }),
    apiReference: t({
      en: 'API Reference',
      es: 'Referencia API',
    }),
    guides: t({
      en: 'Guides',
      es: 'Guias',
    }),
    introduction: t({
      en: 'Introduction',
      es: 'Introduccion',
    }),
    features: t({
      en: 'Features',
      es: 'Caracteristicas',
    }),
    howItWorks: t({
      en: 'How it Works',
      es: 'Como Funciona',
    }),
    installation: t({
      en: 'Installation',
      es: 'Instalacion',
    }),
    htmlAttributes: t({
      en: 'HTML Attributes',
      es: 'Atributos HTML',
    }),
    configuration: t({
      en: 'Configuration',
      es: 'Configuracion',
    }),
    cssVariables: t({
      en: 'CSS Variables',
      es: 'Variables CSS',
    }),
    publicApi: t({
      en: 'Public API',
      es: 'API Publica',
    }),
    frameworkIntegration: t({
      en: 'Framework Integration',
      es: 'Integracion con Frameworks',
    }),
    nestedMenus: t({
      en: 'Nested Menus',
      es: 'Menus Anidados',
    }),
    faq: t({
      en: 'FAQ',
      es: 'Preguntas Frecuentes',
    }),
  },
} satisfies Dictionary

export default sidebarContent
