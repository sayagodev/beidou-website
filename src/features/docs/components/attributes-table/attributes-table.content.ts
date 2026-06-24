import { t, type Dictionary } from 'intlayer'

const attributesTableContent = {
  key: 'attributes-table',
  content: {
    heading: t({
      en: 'HTML Attributes',
      es: 'Atributos HTML',
    }),
    desc: t({
      en: 'Beidou uses data attributes to understand your navigation structure. Add these to your interactive elements.',
      es: 'Beidou usa atributos data para entender tu estructura de navegacion. Agrega estos a tus elementos interactivos.',
    }),
    attrHeader: t({ en: 'Attribute', es: 'Atributo' }),
    descHeader: t({ en: 'Description', es: 'Descripcion' }),
    exampleHeader: t({ en: 'Example', es: 'Ejemplo' }),
    ctxDesc: t({
      en: 'Defines a navigation context. Elements with this attribute will reveal child targets when activated.',
      es: 'Define un contexto de navegacion. Los elementos con este atributo revelaran los objetivos hijos cuando se activen.',
    }),
    targetDesc: t({
      en: 'Marks an element as a navigation target. Must be inside a context or the body (root context). The value is the target ID.',
      es: 'Marca un elemento como objetivo de navegacion. Debe estar dentro de un contexto o el body (contexto raiz). El valor es el ID del objectivo.',
    }),
    backDesc: t({
      en: 'Used to navigate to the parent context.',
      es: 'Usado para navegar al contexto padre.',
    }),
    skipDesc: t({
      en: 'Instructs Beidou to ignore this element and its children.',
      es: 'Indica a Beidou ignorar este elemento y sus hijos.',
    }),
  },
} satisfies Dictionary

export default attributesTableContent
