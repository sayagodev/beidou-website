'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-bash'
import './code-block.css'
import { Copy } from 'lucide-react'

interface CodeBlockTab {
  label: string
  code: string
  language?: string
}

interface CodeBlockProps {
  tabs?: CodeBlockTab[]
  code?: string
  language?: string
  className?: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function highlightCode(code: string, language?: string): string {
  const lines = code.split('\n')
  const lang = language?.toLowerCase()
  const grammar = lang && Prism.languages[lang] ? Prism.languages[lang] : null

  return lines
    .map((line) => {
      if (!grammar) return `<span class="line">${escapeHtml(line)}</span>`
      const highlighted = Prism.highlight(line, grammar, lang!)
      return `<span class="line">${highlighted}</span>`
    })
    .join('\n')
}

function CodePanel({ code, language }: { code: string; language?: string }) {
  const highlighted = useMemo(
    () => highlightCode(code, language),
    [code, language],
  )

  return (
    <div role="tabpanel" className="code-block__panel">
      <div className="code-block__body">
        <button
          className="code-block__copy"
          aria-label="Copy code"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          <Copy />
        </button>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    </div>
  )
}

export function CodeBlock({ tabs, code, language, className }: CodeBlockProps) {
  if (tabs) {
    return (
      <div className={cn('code-block', className)}>
        <ot-tabs>
          <div role="tablist" className="code-block__tablist">
            {tabs.map((tab) => (
              <button key={tab.label} role="tab" className="code-block__tab">
                {tab.label}
              </button>
            ))}
          </div>
          {tabs.map((tab) => (
            <CodePanel key={tab.label} code={tab.code} language={tab.language} />
          ))}
        </ot-tabs>
      </div>
    )
  }

  return (
    <div className={cn('code-block', className)}>
      <CodePanel code={code || ''} language={language} />
    </div>
  )
}
