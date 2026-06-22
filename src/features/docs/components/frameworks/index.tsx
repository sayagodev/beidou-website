'use client'

import { useState } from 'react'
import { useIntlayer } from 'next-intlayer'
import { CodeBlock } from '@/components/ui/code-block'
import './frameworks.css'

export function Frameworks() {
  const content = useIntlayer('frameworks')
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { label: content.react, code: content.reactCode },
    { label: content.vue, code: content.vueCode },
    { label: content.svelte, code: content.svelteCode },
  ]

  return (
    <section className="frameworks" id="frameworks">
      <h2 className="frameworks__heading">
        <span className="material-symbols-outlined frameworks__heading-icon">dashboard_customize</span>
        {content.heading}
      </h2>

      <p className="frameworks__desc">{content.desc}</p>

      <CodeBlock tabs={tabs} />
    </section>
  )
}
