import { t, type Dictionary } from 'intlayer'

const mobileBeidouNoticeContent = {
  key: 'mobile-beidou-notice',
  content: {
    toastMessage: t({
      en: 'We detected you are on a mobile device. Beidou works best with a physical keyboard.',
      es: 'Detectamos que estás en un dispositivo móvil. Beidou funciona mejor con un teclado físico.',
    }),
    toastTitle: t({
      en: 'Keyboard Navigation',
      es: 'Navegación por Teclado',
    }),
    toastHint: t({
      en: 'Use the button at the bottom-right to try it anyway.',
      es: 'Usa el botón abajo a la derecha para probarlo de todas formas.',
    }),
    enableBeidou: t({
      en: 'Enable Beidou',
      es: 'Activar Beidou',
    }),
    disableBeidou: t({
      en: 'Disable Beidou',
      es: 'Desactivar Beidou',
    }),
  },
} satisfies Dictionary

export default mobileBeidouNoticeContent
