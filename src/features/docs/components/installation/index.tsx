import { useIntlayer } from 'next-intlayer/server'
import { CodeBlock } from '@/components/ui/code-block'
import { Download, Play } from 'lucide-react'
import './installation.css'

export function Installation() {
  const content = useIntlayer('installation')

  const tabs = [
    { label: content.npm, code: content.installCmd, language: 'bash' },
    { label: content.pnpm, code: 'pnpm add @sayagodev/beidou', language: 'bash' },
    { label: content.yarn, code: 'yarn add @sayagodev/beidou', language: 'bash' },
    { label: content.cdn, code: '<script src="https://unpkg.com/@sayagodev/beidou"></script>', language: 'markup' },
  ]

  return (
    <section className="section" id="installation">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <Download className="section__heading-icon" />
        {content.heading}
      </h2>

      <CodeBlock tabs={tabs} />

      <h3 className="installation__init-heading">
        <Play style={{ fontSize: '18px' }} />
        {content.initHeading}
      </h3>

      <CodeBlock code={content.initCode} language="javascript" />
    </section>
  )
}
