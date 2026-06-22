import { t, type Dictionary } from 'intlayer'

const nestedMenusContent = {
  key: 'nested-menus',
  content: {
    heading: t({
      en: 'Nested Menus',
      es: 'Menus Anidados',
    }),
    desc: t({
      en: 'Create complex hierarchies using contexts.',
      es: 'Crea jerarquias complejas usando contextos.',
    }),
    code: `<nav data-ko-ctx="main">
  <button data-ko-target="S">Settings</button>

  <div data-ko-ctx="settings">
    <button data-ko-target="P">Profile</button>
    <button data-ko-target="N">Notifications</button>
    <button data-ko-back="B">Back</button>
  </div>
</nav>`,
  },
} satisfies Dictionary

export default nestedMenusContent
