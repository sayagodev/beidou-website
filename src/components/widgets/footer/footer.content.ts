import { t, type Dictionary } from 'intlayer'

const footerContent = {
  key: 'footer',
  content: {
    license: t({
      en: 'MIT License',
      es: 'Licencia MIT',
    }),
    me: t({
      en: 'Me',
      es: 'Yo',
    }),
    github: t({
      en: 'GitHub',
      es: 'GitHub',
    }),
    email: t({
      en: 'Email',
      es: 'Correo',
    }),
  },
} satisfies Dictionary

export default footerContent
