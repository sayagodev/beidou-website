import { useIntlayer } from 'next-intlayer'
import './hero.css'
import { CodeIcon, CornerDownLeft, SquarePlus } from 'lucide-react'

export function Hero() {
  const content = useIntlayer('hero')

  return (
    <section className="hero" id="hero">

      <div className="hero__window-dots">
        <div className="hero__window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="hero__window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="hero__window-dot" style={{ background: 'var(--primary)' }} />
      </div>

      <div className="hero__header">
        <h1 className="hero__title">{content.title}</h1>
        <div className="hero__hanzi">北斗</div>
      </div>

      <p className="hero__subtitle">{content.subtitle}</p>

      <p className="hero__description">{content.description}</p>

      <div className="hero__actions">
        <a href="#installation" className="hero__btn hero__btn--primary">
          {content.getStarted}
          <CornerDownLeft className="hero__btn--icon" />
        </a>
        <a
          href="https://github.com/sayagodev/beidou"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__btn hero__btn--secondary"
        >
          <CodeIcon className="hero__btn--icon" />
          {content.github}
        </a>
      </div>

      <div className="hero__mockup">
        <div className="hero__mockup-grid" />
        <button className="hero__mockup-btn" data-ko-skip>
          <SquarePlus className="hero__btn--icon" />
          {content.createProject}
          <div className="hero__keycap">A</div>
          <div className="hero__focus-ring" />
        </button>
      </div>
    </section>
  )
}
