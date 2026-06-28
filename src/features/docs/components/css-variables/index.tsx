import { useIntlayer } from 'next-intlayer'
import { DocTable } from '@/components/ui/table'
import { Palette } from 'lucide-react'
import './css-variables.css'

export function CssVariables() {
  const content = useIntlayer('css-variables')

  const columns = [
    { key: 'variable', header: content.varHeader },
    { key: 'default', header: content.defaultHeader },
    { key: 'desc', header: content.descHeader },
  ]

  const rows = [
    { variable: <span className="css-vars__var">--ko-ring-c</span>, default: <span className="css-vars__default">#0284c7</span>, desc: content.ringColor },
    { variable: <span className="css-vars__var">--ko-ring-s</span>, default: <span className="css-vars__default">dashed</span>, desc: content.ringStyle },
    { variable: <span className="css-vars__var">--ko-ring-w</span>, default: <span className="css-vars__default">2px</span>, desc: content.ringWidth },
    { variable: <span className="css-vars__var">--ko-ring-o</span>, default: <span className="css-vars__default">-2px</span>, desc: content.ringOffset },
    { variable: <span className="css-vars__var">--ko-badge-bg</span>, default: <span className="css-vars__default">#f97316</span>, desc: content.badgeBg },
    { variable: <span className="css-vars__var">--ko-badge-fg</span>, default: <span className="css-vars__default">white</span>, desc: content.badgeFg },
    { variable: <span className="css-vars__var">--ko-badge-size</span>, default: <span className="css-vars__default">11px</span>, desc: content.badgeSize },
    { variable: <span className="css-vars__var">--ko-badge-w</span>, default: <span className="css-vars__default">800</span>, desc: content.badgeWeight },
    { variable: <span className="css-vars__var">--ko-badge-font</span>, default: <span className="css-vars__default">system-ui,-apple-system,sans-serif</span>, desc: content.badgeFont },
    { variable: <span className="css-vars__var">--ko-badge-p</span>, default: <span className="css-vars__default">2px 6px</span>, desc: content.badgePadding },
    { variable: <span className="css-vars__var">--ko-badge-rad</span>, default: <span className="css-vars__default">4px</span>, desc: content.badgeRadius },
    { variable: <span className="css-vars__var">--ko-badge-sh</span>, default: <span className="css-vars__default">...</span>, desc: content.badgeShadow },
    { variable: <span className="css-vars__var">--ko-input-ring</span>, default: <span className="css-vars__default">#059669</span>, desc: content.inputRing },
    { variable: <span className="css-vars__var">--ko-input-ring-s</span>, default: <span className="css-vars__default">dashed</span>, desc: content.inputRingStyle },
    { variable: <span className="css-vars__var">--ko-input-bg</span>, default: <span className="css-vars__default">#059669</span>, desc: content.inputBg },
    { variable: <span className="css-vars__var">--ko-input-fg</span>, default: <span className="css-vars__default">white</span>, desc: content.inputFg },
    { variable: <span className="css-vars__var">--ko-input-border</span>, default: <span className="css-vars__default">none</span>, desc: content.inputBorder },
  ]

  return (
    <section className="section" id="css-variables">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <Palette className="section__heading-icon" />
        {content.heading}
      </h2>

      <p className="section__desc">{content.desc}</p>

      <DocTable columns={columns} rows={rows} />
    </section>
  )
}
