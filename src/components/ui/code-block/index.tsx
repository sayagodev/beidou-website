'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import './code-block.css'

interface CodeBlockTab {
  label: string
  code: string
}

interface CodeBlockProps {
  tabs?: CodeBlockTab[]
  code?: string
  language?: string
  className?: string
}

export function CodeBlock({ tabs, code, className }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0)
  const content = tabs ? tabs[activeTab]?.code : code

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
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
            content_copy
          </span>
        </button>
        <pre>
          <code>
            {content?.split('\n').map((line, i) => (
              <span key={i} className="line">
                {line}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
