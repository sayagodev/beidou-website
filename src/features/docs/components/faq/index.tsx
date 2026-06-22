import { useIntlayer } from 'next-intlayer/server'
import './faq.css'

export function Faq() {
  const content = useIntlayer('faq')

  const items = [content.q1, content.q2, content.q3, content.q4]

  return (
    <section className="faq" id="faq">
      <h2 className="faq__heading">
        <span className="material-symbols-outlined faq__heading-icon">help_center</span>
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
