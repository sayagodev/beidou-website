import { useIntlayer } from 'next-intlayer'
import { CodeBlock } from '@/components/ui/code-block'
import { Settings } from 'lucide-react'
import './configuration.css'

export function Configuration() {
  const content = useIntlayer('configuration')

  return (
    <section className="section" id="configuration">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <Settings className="section__heading-icon" />
        {content.heading}
      </h2>

      <p className="section__desc">{content.desc}</p>

      <CodeBlock code={content.configCode} language="javascript" />
    </section>
  )
}
