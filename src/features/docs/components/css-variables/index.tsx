import { useIntlayer } from 'next-intlayer/server'
import { DocTable } from '@/components/ui/table'
import './css-variables.css'

export function CssVariables() {
  const content = useIntlayer('css-variables')

  const columns = [
    { key: 'variable', header: content.varHeader },
    { key: 'default', header: content.defaultHeader },
    { key: 'desc', header: content.descHeader },
  ]

  const rows = [
    { variable: <span className="css-vars__var">--ko-ring-c</span>, default: <span className="css-vars__default">#4f6d8a</span>, desc: 'Ring color' },
    { variable: <span className="css-vars__var">--ko-ring-w</span>, default: <span className="css-vars__default">2px</span>, desc: 'Ring width' },
    { variable: <span className="css-vars__var">--ko-ring-o</span>, default: <span className="css-vars__default">2px</span>, desc: 'Ring offset' },
    { variable: <span className="css-vars__var">--ko-badge-bg</span>, default: <span className="css-vars__default">#4f6d8a</span>, desc: 'Badge background' },
    { variable: <span className="css-vars__var">--ko-badge-c</span>, default: <span className="css-vars__default">#ffffff</span>, desc: 'Badge text color' },
    { variable: <span className="css-vars__var">--ko-badge-r</span>, default: <span className="css-vars__default">0px</span>, desc: 'Badge border radius' },
  ]

  return (
    <section className="css-vars" id="css-variables">
      <h2 className="css-vars__heading">
        <span className="material-symbols-outlined css-vars__heading-icon">palette</span>
        {content.heading}
      </h2>

      <p className="css-vars__desc">{content.desc}</p>

      <DocTable columns={columns} rows={rows} />
    </section>
  )
}
