import { useIntlayer } from 'next-intlayer/server'
import { CircleHelp } from 'lucide-react'
import './faq.css'

export function Faq() {
  const content = useIntlayer('faq')

  const items = [content.q1, content.q2, content.q3, content.q4]

  return (
    <section className="section" id="faq">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <CircleHelp className="section__heading-icon" />
        {content.heading}
      </h2>

      <div className="faq__items">
        {items.map((item, i) => (
          <details key={i} className="faq__item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
