import { useIntlayer } from 'next-intlayer'
import './features-grid.css'
import { Code, Gauge, Package, Puzzle, Star } from 'lucide-react'

export function FeaturesGrid() {
  const content = useIntlayer('features-grid')

  const features = [
    { icon: <Package />, accent: 'primary' as const, title: content.zeroDeps.title, desc: content.zeroDeps.desc },
    { icon: <Gauge />, accent: 'secondary' as const, title: content.tiny.title, desc: content.tiny.desc },
    { icon: <Puzzle />, accent: 'primary' as const, title: content.frameworkAgnostic.title, desc: content.frameworkAgnostic.desc },
    { icon: <Code />, accent: 'secondary' as const, title: content.typescript.title, desc: content.typescript.desc },
  ]

  return (
    <section className="section" id="features">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <Star className='section__heading-icon' />
        {content.heading}
      </h2>

      <div className="features__grid">
        {features.map((f, i) => (
          <div key={i} className="features__card">
            <div className={`features__card-title features__card-title--${f.accent}`}>
              {f.icon}
              {f.title}
            </div>
            <p className="features__card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
