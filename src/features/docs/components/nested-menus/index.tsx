import { useIntlayer } from 'next-intlayer/server'
import { CodeBlock } from '@/components/ui/code-block'
import './nested-menus.css'

export function NestedMenus() {
  const content = useIntlayer('nested-menus')

  return (
    <section className="nested-menus" id="nested-menu">
      <h2 className="nested-menus__heading">
        <span className="material-symbols-outlined nested-menus__heading-icon">account_tree</span>
        {content.heading}
      </h2>

      <p className="nested-menus__desc">{content.desc}</p>

      <CodeBlock code={content.code} />
    </section>
  )
}
