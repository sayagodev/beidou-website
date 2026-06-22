import { t, type Dictionary } from 'intlayer'

const cssVariablesContent = {
  key: 'css-variables',
  content: {
    heading: t({
      en: 'CSS Variables',
      es: 'Variables CSS',
    }),
    desc: t({
      en: 'Beidou injects CSS variables to style the focus ring and badges. You can override these in your own stylesheet.',
      es: 'Beidou inyecta variables CSS para estilizar el anillo de enfoque y los badges. Puedes sobreescribirlas en tu propia hoja de estilos.',
    }),
    varHeader: t({ en: 'Variable', es: 'Variable' }),
    defaultHeader: t({ en: 'Default', es: 'Default' }),
    descHeader: t({ en: 'Description', es: 'Descripcion' }),
  },
} satisfies Dictionary

export default cssVariablesContent
