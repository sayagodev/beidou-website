'use client'

import { useState, useEffect } from 'react'

const SECTION_IDS = [
  'hero',
  'features',
  'how-it-works',
  'installation',
  'attributes',
  'configuration',
  'css-variables',
  'public-api',
  'frameworks',
  'nested-menu',
  'faq',
]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
              if (window.location.hash !== `#${id}`) {
                history.replaceState(null, '', `#${id}`)
              }
            }
          })
        },
        { rootMargin: '-20% 0px -60% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return activeSection
}
