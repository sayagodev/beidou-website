import { t, type Dictionary } from 'intlayer'

const configurationContent = {
  key: 'configuration',
  content: {
    heading: t({
      en: 'Configuration',
      es: 'Configuracion',
    }),
    desc: t({
      en: "You can customize Beidou's behavior by passing an options object to the constructor.",
      es: 'Puedes personalizar el comportamiento de Beidou pasando un objeto de opciones al constructor.',
    }),
    configCode: `const options = {
  // Trigger key to toggle navigation mode
  key: 'Alt',

  // Key bindings configuration
  keys: {
    // If true, ignores elements matching CSS selectors
    ignore: ['input', 'textarea', '[contenteditable]']
  },

  // Ring configuration
  ring: {
    // Color of the focus ring
    color: '#4f6d8a',
    // Width of the focus ring
    width: '2px',
    // Offset of the focus ring
    offset: '2px'
  },

  // Badge configuration
  badge: {
    // Default positioning of badges
    position: 'top-right', // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    // Background color
    bg: '#4f6d8a',
    // Text color
    color: '#ffffff',
    // Border radius
    radius: '0px'
  }
};

new Beidou(options);`,
  },
} satisfies Dictionary

export default configurationContent
