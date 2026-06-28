import { useIntlayer } from 'next-intlayer'
import { DocTable } from '@/components/ui/table'
import { Code2 } from 'lucide-react'
import './attributes-table.css'

export function AttributesTable() {
  const content = useIntlayer('attributes-table')

  const columns = [
    { key: 'attr', header: content.attrHeader },
    { key: 'desc', header: content.descHeader },
    { key: 'example', header: content.exampleHeader },
  ]

  const rows = [
    {
      attr: <span className="attributes__attr">data-ko-ctx</span>,
      desc: content.ctxDesc,
      example: <code className="attributes__example">&lt;div data-ko-ctx=&quot;menu&quot;&gt;...&lt;/div&gt;</code>,
    },
    {
      attr: <span className="attributes__attr">data-ko-target</span>,
      desc: content.targetDesc,
      example: <code className="attributes__example">&lt;button data-ko-target=&quot;save&quot;&gt;Save&lt;/button&gt;</code>,
    },
    {
      attr: <span className="attributes__attr">data-ko-back</span>,
      desc: content.backDesc,
      example: <code className="attributes__example">&lt;button data-ko-back&gt;Back&lt;/button&gt;</code>,
    },
    {
      attr: <span className="attributes__attr">data-ko-skip</span>,
      desc: content.skipDesc,
      example: <code className="attributes__example">&lt;div data-ko-skip&gt;...&lt;/div&gt;</code>,
    },
  ]

  return (
    <section className="section" id="attributes">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <Code2 className="section__heading-icon" />
        {content.heading}
      </h2>

      <p className="section__desc">{content.desc}</p>

      <DocTable columns={columns} rows={rows} />
    </section>
  )
}
