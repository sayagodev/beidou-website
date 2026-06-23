import { useIntlayer } from 'next-intlayer/server'
import { CodeBlock } from '@/components/ui/code-block'
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
    <section className="installation" id="installation">
      <h2 className="installation__heading">
        <span className="material-symbols-outlined installation__heading-icon">download</span>
        {content.heading}
      </h2>

      <CodeBlock tabs={tabs} />

      <h3 className="installation__init-heading">
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>play_arrow</span>
        {content.initHeading}
      </h3>

      <CodeBlock code={content.initCode} language="javascript" />
    </section>
  )
}
