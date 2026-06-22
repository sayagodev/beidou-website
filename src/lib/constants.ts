export const SIDEBAR_SECTIONS: Array<{
  title: { en: string; es: string }
  icon: string
  accent?: boolean
  items: Array<{ id: string; label: { en: string; es: string }; icon: string }>
}> = [
    {
      title: { en: 'Getting Started', es: 'Primeros Pasos' },
      icon: 'folder_open',
      items: [
        { id: 'hero', label: { en: 'Introduction', es: 'Introduccion' }, icon: 'description' },
        { id: 'features', label: { en: 'Features', es: 'Caracteristicas' }, icon: 'description' },
        { id: 'how-it-works', label: { en: 'How it Works', es: 'Como Funciona' }, icon: 'description' },
        { id: 'installation', label: { en: 'Installation', es: 'Instalacion' }, icon: 'description' },
      ],
    },
    {
      title: { en: 'API Reference', es: 'Referencia API' },
      icon: 'folder',
      accent: true,
      items: [
        { id: 'attributes', label: { en: 'HTML Attributes', es: 'Atributos HTML' }, icon: 'html' },
        { id: 'configuration', label: { en: 'Configuration', es: 'Configuracion' }, icon: 'settings' },
        { id: 'css-variables', label: { en: 'CSS Variables', es: 'Variables CSS' }, icon: 'css' },
        { id: 'public-api', label: { en: 'Public API', es: 'API Publica' }, icon: 'api' },
      ],
    },
    {
      title: { en: 'Guides', es: 'Guias' },
      icon: 'folder',
      items: [
        { id: 'frameworks', label: { en: 'Framework Integration', es: 'Integracion con Frameworks' }, icon: 'integration_instructions' },
        { id: 'nested-menu', label: { en: 'Nested Menus', es: 'Menus Anidados' }, icon: 'account_tree' },
        { id: 'faq', label: { en: 'FAQ', es: 'Preguntas Frecuentes' }, icon: 'help_center' },
      ],
    },
  ]

export const NAV_LINKS: Array<{
  href: string
  label: { en: string; es: string }
}> = [
    { href: '#features', label: { en: 'Features', es: 'Caracteristicas' } },
    { href: '#docs', label: { en: 'Docs', es: 'Docs' } },
    { href: '#installation', label: { en: 'Installation', es: 'Instalacion' } },
    { href: 'https://github.com', label: { en: 'GitHub', es: 'GitHub' } },
  ]
