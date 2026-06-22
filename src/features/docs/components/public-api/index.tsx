import { useIntlayer } from 'next-intlayer/server'
import './public-api.css'

export function PublicApi() {
  const content = useIntlayer('public-api')

  const methods = [content.open, content.reset, content.destroy]

  return (
    <section className="public-api" id="public-api">
      <h2 className="public-api__heading">
        <span className="material-symbols-outlined public-api__heading-icon">functions</span>
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
