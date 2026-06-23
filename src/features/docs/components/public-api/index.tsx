import { useIntlayer } from 'next-intlayer/server'
import { FunctionSquare } from 'lucide-react'
import './public-api.css'

export function PublicApi() {
  const content = useIntlayer('public-api')

  const methods = [content.open, content.reset, content.destroy]

  return (
    <section className="section" id="public-api">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <FunctionSquare className="section__heading-icon" />
        {content.heading}
      </h2>

      <div className="public-api__methods">
        {methods.map((m) => (
          <div key={m.name} className="public-api__method">
            <h3 className="public-api__method-name">{m.name}</h3>
            <p className="public-api__method-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
