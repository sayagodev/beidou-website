'use client'

import { useIntlayer } from 'next-intlayer'
import { CircleHelp } from 'lucide-react'
import { CodeBlock } from '@/components/ui/code-block'
import './faq.css'

function unescapeHtml(text: string): string {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
}

function FaqAnswer({ html }: { html: string }) {
  const parts = html.split(/(<pre[^>]*>[\s\S]*?<\/pre>)/)

  return (
    <div className="faq__answer">
      {parts.map((part, i) => {
        if (part.startsWith('<pre')) {
          const langMatch = part.match(/data-lang="([^"]*)"/)
          const lang = langMatch?.[1]
          const code = unescapeHtml(part.replace(/<\/?pre[^>]*>/g, ''))
          return <CodeBlock key={i} code={code} language={lang} />
        }
        return <div key={i} dangerouslySetInnerHTML={{ __html: part }} />
      })}
    </div>
  )
}

function FaqTabsAnswer({ code, preview }: { code: string; preview: string }) {
  return (
    <div className="faq__answer">
      <ot-tabs>
        <div role="tablist" className="faq__tablist">
          <button role="tab" className="faq__tab">Code</button>
          <button role="tab" className="faq__tab">Preview</button>
        </div>
        <div role="tabpanel">
          <CodeBlock code={code} language="markup" />
        </div>
        <div role="tabpanel" className="faq__preview" dangerouslySetInnerHTML={{ __html: preview }} />
      </ot-tabs>
    </div>
  )
}

export function Faq() {
  const content = useIntlayer('faq')

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
        {[
          { question: content.q1Question, answer: content.q1Answer },
          { question: content.q2Question, answer: content.q2Answer },
          { question: content.q3Question, answer: content.q3Answer },
          { question: content.q4Question, answer: content.q4Answer },
        ].map((item, i) => (
          <details key={i} className="faq__item">
            <summary role='button'>{item.question}</summary>
            <FaqAnswer html={item.answer} />
          </details>
        ))}

        <details className="faq__item">
          <summary role='button'>{content.q5Question}</summary>
          <FaqTabsAnswer code={content.q5AnswerCode} preview={content.q5AnswerPreview} />
        </details>

        {[
          { question: content.q6Question, answer: content.q6Answer },
          { question: content.q7Question, answer: content.q7Answer },
          { question: content.q8Question, answer: content.q8Answer },
          { question: content.q9Question, answer: content.q9Answer },
          { question: content.q10Question, answer: content.q10Answer },
        ].map((item, i) => (
          <details key={i + 5} className="faq__item">
            <summary role='button'>{item.question}</summary>
            <FaqAnswer html={item.answer} />
          </details>
        ))}
      </div>
    </section>
  )
}
