'use client'

import { useState, useMemo } from 'react'
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

export function CodeBlock({ tabs, code, language, className }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0)
  const content = tabs ? tabs[activeTab]?.code : code
  const contentLanguage = tabs ? tabs[activeTab]?.language : language

  const highlighted = useMemo(
    () => highlightCode(content || '', contentLanguage),
    [content, contentLanguage],
  )

  return (
    <div className={cn('code-block', className)}>
      {tabs && (
        <div className="code-block__header" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={i === activeTab}
              className="code-block__tab"
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <div className="code-block__body">
        <button
          className="code-block__copy"
          aria-label="Copy code"
          onClick={() => {
            if (content) navigator.clipboard.writeText(content)
          }}
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
