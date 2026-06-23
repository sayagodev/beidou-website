import { useIntlayer } from 'next-intlayer/server'
import { CodeBlock } from '@/components/ui/code-block'
import './configuration.css'

export function Configuration() {
  const content = useIntlayer('configuration')

  return (
    <section className="config" id="configuration">
      <h2 className="config__heading">
        <span className="material-symbols-outlined config__heading-icon">settings</span>
        {content.heading}
      </h2>

      <p className="config__desc">{content.desc}</p>

      <CodeBlock code={content.configCode} language="javascript" />
    </section>
  )
}
