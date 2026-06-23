import { t, type Dictionary } from 'intlayer'

const installationContent = {
  key: 'installation',
  content: {
    heading: t({
      en: 'Installation',
      es: 'Instalacion',
    }),
    initHeading: t({
      en: 'Initialization',
      es: 'Inicializacion',
    }),
    npm: 'npm',
    pnpm: 'pnpm',
    yarn: 'yarn',
    cdn: 'CDN',
    installCmd: 'npm install @sayagodev/beidou',
    initCode: `import Beidou from '@sayagodev/beidou/min';

// Initialize with default options
const beidou = new Beidou();

// Or with custom options
const beidouCustom = new Beidou({
  key: 'Alt',
  position: 'top-right'
});`,
  },
} satisfies Dictionary

export default installationContent
