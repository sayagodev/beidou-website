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
    code: ` {/* body with data-ko-ctx="root" exist */}
  <button data-ko-target="settings">⚙️ Settings</button>
  <div data-ko-ctx="settings">
    <button data-ko-target="profile">Profile</button>
    <button data-ko-target="security">Security</button>
    <button data-ko-back><- Back</button>
  </div>
  <div data-ko-ctx="profile">
    <button onClick={edit()}>Edit</button>
    <button data-ko-back><- Back</button>
  </div>
  <div data-ko-ctx="security">
    <button onClick={changePw()}>Change Password</button>
    <button data-ko-back><- Back</button>
  </div>`,
  },
} satisfies Dictionary

export default nestedMenusContent
