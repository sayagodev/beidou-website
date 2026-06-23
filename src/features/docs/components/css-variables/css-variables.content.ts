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
    ringColor: t({ en: 'Ring color', es: 'Color del anillo' }),
    ringStyle: t({ en: 'Ring style', es: 'Estilo del anillo' }),
    ringWidth: t({ en: 'Ring width', es: 'Ancho del anillo' }),
    ringOffset: t({ en: 'Ring offset', es: 'Offset del anillo' }),
    badgeBg: t({ en: 'Badge background', es: 'Fondo del badge' }),
    badgeFg: t({ en: 'Badge text color', es: 'Color de texto del badge' }),
    badgeSize: t({ en: 'Font size', es: 'Tamaño de fuente' }),
    badgeWeight: t({ en: 'Font weight', es: 'Peso de fuente' }),
    badgeFont: t({ en: 'Font family', es: 'Font family' }),
    badgePadding: t({ en: 'Padding', es: 'Relleno' }),
    badgeRadius: t({ en: 'Border radius', es: 'Radio del borde' }),
    badgeShadow: t({ en: 'Box shadow', es: 'Sombra de caja' }),
    inputRing: t({ en: 'Input ring color', es: 'Color del anillo de input' }),
    inputRingStyle: t({ en: 'Input ring style', es: 'Estilo del anillo de input' }),
    inputBg: t({ en: 'Input badge background', es: 'Fondo del badge de input' }),
    inputFg: t({ en: 'Input badge text color', es: 'Color de texto del badge de input' }),
    inputBorder: t({ en: 'Input badge border', es: 'Borde del badge de input' }),
  },
} satisfies Dictionary

export default cssVariablesContent
