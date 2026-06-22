import { t, type Dictionary } from 'intlayer'

const featuresGridContent = {
  key: 'features-grid',
  content: {
    heading: t({
      en: 'Features',
      es: 'Caracteristicas',
    }),
    zeroDeps: {
      title: t({
        en: 'Zero Dependencies',
        es: 'Cero Dependencias',
      }),
      desc: t({
        en: 'Built entirely with vanilla JavaScript. No external libraries required, ensuring maximum stability.',
        es: 'Construido completamente con JavaScript vanilla. Sin bibliotecas externas requeridas, garantizando maxima estabilidad.',
      }),
    },
    tiny: {
      title: t({
        en: 'Tiny Footprint',
        es: 'Tamaño Pequeño',
      }),
      desc: t({
        en: "Weighs in at approximately ~2.7KB gzipped. It won't bloat your application bundle.",
        es: 'Pesa aproximadamente ~2.7KB gzipped. No aumentara el tamaño de tu bundle.',
      }),
    },
    frameworkAgnostic: {
      title: t({
        en: 'Framework Agnostico',
        es: 'Framework Agnostico',
      }),
      desc: t({
        en: 'Works seamlessly with React, Vue, Svelte, Angular, or plain HTML setups.',
        es: 'Funciona perfectamente con React, Vue, Svelte, Angular, o configuraciones de HTML puro.',
      }),
    },
    typescript: {
      title: t({
        en: 'Full TypeScript',
        es: 'TypeScript Completo',
      }),
      desc: t({
        en: 'First-class TypeScript support with comprehensive type definitions included out of the box.',
        es: 'Compatibilidad de primer nivel con TypeScript, con definiciones de tipos completas incluidas de serie.',
      }),
    },
  },
} satisfies Dictionary

export default featuresGridContent
