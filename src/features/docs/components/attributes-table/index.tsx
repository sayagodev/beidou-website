import { useIntlayer } from 'next-intlayer/server'
import { DocTable } from '@/components/ui/table'
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
      example: <code className="attributes__example">&lt;button data-ko-target=&quot;S&quot;&gt;Save&lt;/button&gt;</code>,
    },
    {
      attr: <span className="attributes__attr">data-ko-back</span>,
      desc: content.backDesc,
      example: <code className="attributes__example">&lt;button data-ko-back=&quot;B&quot;&gt;Back&lt;/button&gt;</code>,
    },
    {
      attr: <span className="attributes__attr">data-ko-skip</span>,
      desc: content.skipDesc,
      example: <code className="attributes__example">&lt;div data-ko-skip&gt;...&lt;/div&gt;</code>,
    },
  ]

  return (
    <section className="attributes" id="attributes">
      <h2 className="attributes__heading">
        <span className="material-symbols-outlined attributes__heading-icon">html</span>
        {content.heading}
      </h2>

      <p className="attributes__desc">{content.desc}</p>

      <DocTable columns={columns} rows={rows} />
    </section>
  )
}
