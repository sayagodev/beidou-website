'use client'

import { useState, useCallback } from 'react'
import { useActiveSection } from '../hooks/use-active-section'
import { NavBar } from '@/components/widgets/nav-bar'
import { Sidebar } from '@/components/widgets/sidebar'
import { Hero } from '../components/hero'
import { FeaturesGrid } from '../components/features-grid'
import { HowItWorks } from '../components/how-it-works'
import { Installation } from '../components/installation'
import { AttributesTable } from '../components/attributes-table'
import { Configuration } from '../components/configuration'
import { CssVariables } from '../components/css-variables'
import { PublicApi } from '../components/public-api'
import { Frameworks } from '../components/frameworks'
import { NestedMenus } from '../components/nested-menus'
import { Faq } from '../components/faq'
import './docs-page-view.css'

export function DocsPageView() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const activeSection = useActiveSection()
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), [])
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  return (
    <>
      <NavBar onToggleSidebar={toggleSidebar} />

      <div className="docs-view" data-sidebar-layout>
        <div className="docs-view__layout">
          <Sidebar activeSection={activeSection} open={sidebarOpen} onClose={closeSidebar} />
          <main className="docs-view__content">
            <Hero />
            <FeaturesGrid />
            <HowItWorks />
            <Installation />
            <AttributesTable />
            <Configuration />
            <CssVariables />
            <PublicApi />
            <Frameworks />
            <NestedMenus />
            <Faq />
          </main>
        </div>
      </div>
    </>
  )
}
