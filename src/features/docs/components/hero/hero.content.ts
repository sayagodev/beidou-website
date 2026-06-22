import { t, type Dictionary } from 'intlayer'

const heroContent = {
  key: 'hero',
  content: {
    title: 'Beidou',
    subtitle: t({
      en: 'Press a key. See shortcuts. Navigate.',
      es: 'Presiona una tecla. Ve los atajos. Navega.',
    }),
    description: t({
      en: 'Keyboard navigation overlay \u2014 zero config, zero dependencies, ~2.7KB gzipped.',
      es: 'Overlay de navegacion por teclado \u2014 cero configuracion, cero dependencias, ~2.7KB gzipped.',
    }),
    getStarted: t({
      en: 'Get Started',
      es: 'Comenzar',
    }),
    github: 'GitHub',
    createProject: t({
      en: 'Create New Project',
      es: 'Crear Nuevo Proyecto',
    }),
  },
} satisfies Dictionary

export default heroContent
