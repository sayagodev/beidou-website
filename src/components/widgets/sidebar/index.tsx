import { useState, useEffect } from 'react'
import { useIntlayer, useLocale } from 'next-intlayer'
import { SIDEBAR_SECTIONS } from '@/lib/constants'
import {
  FolderOpen,
  Folder,
  FileText,
  Code,
  Settings,
  Palette,
  Terminal,
  Layers,
  GitBranch,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react'
import './sidebar.css'

const ICON_MAP: Record<string, LucideIcon> = {
  description: FileText,
  html: Code,
  settings: Settings,
  css: Palette,
  api: Terminal,
  integration_instructions: Layers,
  account_tree: GitBranch,
  help_center: HelpCircle,
}

interface SidebarProps {
  activeSection?: string
  open: boolean
  onClose: () => void
}

export function Sidebar({ activeSection, open, onClose }: SidebarProps) {
  const content = useIntlayer('sidebar')
  const { locale } = useLocale()
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]))

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [open])

  useEffect(() => {
    if (!activeSection) return
    const idx = SIDEBAR_SECTIONS.findIndex((s) =>
      s.items.some((item) => item.id === activeSection)
    )
    if (idx >= 0) {
      setExpandedSections((prev) => {
        if (prev.has(idx)) return prev
        const next = new Set(prev)
        next.add(idx)
        return next
      })
    }
  }, [activeSection])

  const toggleSection = (idx: number) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }

  const sectionTitles: Record<string, string> = {
    'Getting Started': content.gettingStarted,
    'API Reference': content.apiReference,
    'Guides': content.guides,
  }

  const itemLabels: Record<string, string> = {
    hero: content.introduction,
    features: content.features,
    'how-it-works': content.howItWorks,
    installation: content.installation,
    attributes: content.htmlAttributes,
    configuration: content.configuration,
    'css-variables': content.cssVariables,
    'public-api': content.publicApi,
    frameworks: content.frameworkIntegration,
    'nested-menu': content.nestedMenus,
    faq: content.faq,
  }

  return (
    <>
      <div
        className="sidebar-overlay"
        data-open={open}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside data-sidebar className="sidebar" data-open={open}>
        <nav className="sidebar__nav">
          {SIDEBAR_SECTIONS.map((section, sIdx) => {
            const isExpanded = expandedSections.has(sIdx)
            const FolderIcon = isExpanded ? FolderOpen : Folder
            return (
              <div key={sIdx} className="sidebar__section" data-accent={section.accent || undefined}>
                <button
                  className="sidebar__section-header"
                  onClick={() => toggleSection(sIdx)}
                  aria-expanded={isExpanded}
                >
                  <FolderIcon size={16} className="sidebar__section-icon" />
                  <span className="sidebar__section-title" data-accent={section.accent || undefined}>
                    {sectionTitles[section.title.en] ?? section.title.en}
                  </span>
                </button>

                {isExpanded && (
                  <div className="sidebar__items">
                    {section.items.map((item) => {
                      const ItemIcon = ICON_MAP[item.icon]
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="sidebar__link"
                          aria-current={activeSection === item.id}
                          onClick={onClose}
                        >
                          {ItemIcon && <ItemIcon size={14} className="sidebar__link-icon" />}
                          {itemLabels[item.id] ?? item.label[locale as 'en' | 'es'] ?? item.label.en}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
