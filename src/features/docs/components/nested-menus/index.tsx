import { useIntlayer } from 'next-intlayer/server'
import { CodeBlock } from '@/components/ui/code-block'
import { Network } from 'lucide-react'
import './nested-menus.css'

export function NestedMenus() {
  const content = useIntlayer('nested-menus')

  return (
    <section className="section" id="nested-menu">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <Network className="section__heading-icon" />
        {content.heading}
      </h2>

      <p className="section__desc">{content.desc}</p>

      <CodeBlock code={content.code} language="markup" />
    </section>
  )
}
