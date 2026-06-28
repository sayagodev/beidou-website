import { t, type Dictionary } from 'intlayer'

const howItWorksContent = {
  key: 'how-it-works',
  content: {
    heading: t({
      en: 'How It Works',
      es: 'Como Funciona',
    }),
    step1: {
      label: t({ en: 'Step 1', es: 'Paso 1' }),
      text: t({
        en: 'Press <kbd class="how-it-works__kbd how-it-works__kbd--primary">Alt</kbd> (or configurable trigger key) to show badges.',
        es: 'Presiona <kbd class="how-it-works__kbd how-it-works__kbd--primary">Alt</kbd> (o la tecla configurada) para mostrar los badges.',
      }),
    },
    step2: {
      label: t({ en: 'Step 2', es: 'Paso 2' }),
      text: t({
        en: 'Press the corresponding <kbd class="how-it-works__kbd how-it-works__kbd--secondary">Letter</kbd> to trigger action or enter context.',
        es: 'Presiona la <kbd class="how-it-works__kbd how-it-works__kbd--secondary">Letra</kbd> correspondiente para activar la accion o entrar al contexto.',
      }),
    },
    step3: {
      label: t({ en: 'Step 3', es: 'Paso 3' }),
      text: t({
        en: 'Press <kbd class="how-it-works__kbd how-it-works__kbd--primary">Esc</kbd> or trigger key again to close.',
        es: 'Presiona <kbd class="how-it-works__kbd how-it-works__kbd--primary">Esc</kbd> o la tecla de activacion nuevamente para cerrar.',
      }),
    },
    stateFlow: t({
      en: 'State Flow',
      es: 'Flujo de Estados',
    }),
    pressAlt: t({ en: 'Press Alt', es: 'Presiona Alt' }),
    pressContextKey: t({ en: 'Press Context Key', es: 'Presiona Tecla de Contexto' }),
    inactive: 'Inactive',
    activeRoot: 'Active: Root',
    activeSub: 'Active: Sub',
  },
} satisfies Dictionary

export default howItWorksContent
