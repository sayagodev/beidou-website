import { t, type Dictionary } from 'intlayer'

const faqContent = {
  key: 'faq',
  content: {
    heading: t({
      en: 'FAQ',
      es: 'Preguntas Frecuentes',
    }),
    q1: {
      question: t({
        en: 'Does Beidou work with screen readers?',
        es: 'Beidou funciona con lectores de pantalla?',
      }),
      answer: t({
        en: 'Beidou is designed as a visual navigation overlay. It uses aria attributes for accessibility, but is primarily intended for keyboard-driven navigation.',
        es: 'Beidou esta disenado como un overlay de navegacion visual. Usa atributos aria para accesibilidad, pero esta pensado principalmente para navegacion por teclado.',
      }),
    },
    q2: {
      question: t({
        en: 'Can I use Beidou in a SPA?',
        es: 'Puedo usar Beidou en una SPA?',
      }),
      answer: t({
        en: 'Yes! Beidou works with any framework. Just call destroy() on unmount and reinitialize when needed.',
        es: 'Si! Beidou funciona con cualquier framework. Solo llama destroy() al desmontar y reinicializa cuando sea necesario.',
      }),
    },
    q3: {
      question: t({
        en: 'How do I change the trigger key?',
        es: 'Como cambio la tecla de activacion?',
      }),
      answer: t({
        en: "Pass the key option to the constructor: new Beidou({ key: 'Control' }). You can use any valid keyboard key.",
        es: "Pasa la opcion key al constructor: new Beidou({ key: 'Control' }). Puedes usar cualquier tecla de teclado valida.",
      }),
    },
    q4: {
      question: t({
        en: 'Is there a way to programmatically open the overlay?',
        es: 'Hay una forma de abrir el overlay programaticamente?',
      }),
      answer: t({
        en: 'Yes, use the open() method: beidou.open(). This will show the navigation badges without requiring a key press.',
        es: 'Si, usa el metodo open(): beidou.open(). Esto mostrara los badges de navegacion sin requerir una pulsacion de tecla.',
      }),
    },
  },
} satisfies Dictionary

export default faqContent
