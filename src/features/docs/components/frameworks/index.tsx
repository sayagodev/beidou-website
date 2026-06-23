'use client'

import { useIntlayer } from 'next-intlayer'
import { CodeBlock } from '@/components/ui/code-block'
import { LayoutTemplate } from 'lucide-react'

export function Frameworks() {
  const content = useIntlayer('frameworks')

  const tabs = [
    { label: content.react, code: content.reactCode, language: 'jsx' },
    { label: content.vue, code: content.vueCode, language: 'javascript' },
    { label: content.svelte, code: content.svelteCode, language: 'javascript' },
  ]

  return (
    <section className="section" id="frameworks">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <LayoutTemplate className="section__heading-icon" />
        {content.heading}
      </h2>

      <p className="section__desc">{content.desc}</p>

      <CodeBlock tabs={tabs} />
    </section>
  )
}
