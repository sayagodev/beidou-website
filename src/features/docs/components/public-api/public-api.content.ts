import { t, type Dictionary } from 'intlayer'

const publicApiContent = {
  key: 'public-api',
  content: {
    heading: t({
      en: 'Public API',
      es: 'API Publica',
    }),
    open: {
      name: 'open()',
      desc: t({
        en: 'Manually opens the navigation overlay.',
        es: 'Abre manualmente el overlay de navegacion.',
      }),
    },
    reset: {
      name: 'reset()',
      desc: t({
        en: 'Resets the navigation state to the root context and hides badges.',
        es: 'Reinicia el estado de navegacion al contexto raiz y oculta los badges.',
      }),
    },
    destroy: {
      name: 'destroy()',
      desc: t({
        en: 'Removes all event listeners and cleans up the DOM.',
        es: 'Elimina todos los event listeners y limpia el DOM.',
      }),
    },
  },
} satisfies Dictionary

export default publicApiContent
