import { useIntlayer } from 'next-intlayer/server'
import './how-it-works.css'
import { Cpu, Workflow } from 'lucide-react'

export function HowItWorks() {
  const content = useIntlayer('how-it-works')

  return (
    <section className="section" id="how-it-works">
      <div className="window-dots">
        <div className="window-dot" style={{ background: 'var(--secondary)' }} />
        <div className="window-dot" style={{ background: 'var(--outline-variant)' }} />
        <div className="window-dot" style={{ background: 'var(--primary)' }} />
      </div>
      <h2 className="section__heading">
        <Cpu className='section__heading-icon' />
        {content.heading}
      </h2>

      <div className="how-it-works__steps">
        <div className="how-it-works__step">
          <h4 className="how-it-works__step-header">
            <span className="how-it-works__step-num how-it-works__step-num--primary">1</span>
            {content.step1.label}
          </h4>
          <p className="how-it-works__step-text">
            {content.step1.text}
          </p>
        </div>
        <div className="how-it-works__step">
          <h4 className="how-it-works__step-header">
            <span className="how-it-works__step-num how-it-works__step-num--secondary">2</span>
            {content.step2.label}
          </h4>
          <p className="how-it-works__step-text">
            {content.step2.text}
          </p>
        </div>
        <div className="how-it-works__step">
          <h4 className="how-it-works__step-header">
            <span className="how-it-works__step-num how-it-works__step-num--primary">3</span>
            {content.step3.label}
          </h4>
          <p className="how-it-works__step-text">
            {content.step3.text}
          </p>
        </div>
      </div>

      <div className="how-it-works__state-diagram">
        <h3 className="how-it-works__state-title">
          <Workflow style={{ fontSize: "16px" }} />
          {content.stateFlow}
        </h3>
        <div className="how-it-works__state-flow">
          <div className="how-it-works__state-box how-it-works__state-box--inactive">
            {content.inactive}
          </div>

          <div className="how-it-works__state-arrow">
            <span className="how-it-works__state-label">{content.pressAlt}</span>
            <div className="how-it-works__state-line" />
          </div>

          <div className="how-it-works__state-box how-it-works__state-box--active-root">
            {content.activeRoot}
          </div>

          <div className="how-it-works__state-arrow">
            <span className="how-it-works__state-label">{content.pressContextKey}</span>
            <div className="how-it-works__state-line" />
          </div>

          <div className="how-it-works__state-box how-it-works__state-box--active-sub">
            {content.activeSub}
          </div>
        </div>
      </div>
    </section>
  )
}
