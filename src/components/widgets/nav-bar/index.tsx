import { useIntlayer } from 'next-intlayer/server'
import './nav-bar.css'
import { MenuIcon } from 'lucide-react'

interface NavBarProps {
  onToggleSidebar?: () => void
}

export function NavBar({ onToggleSidebar }: NavBarProps) {
  const content = useIntlayer('nav-bar')

  return (
    <nav className="nav-bar">
      <a href="/">
        <div className="nav-bar__brand">
          Beidou <span>北斗</span>
        </div>
      </a>

      <div className="nav-bar__actions">
        <a href="#installation" className="nav-bar__cta">
          {content.cta}
        </a>
        <button
          className="nav-bar__menu-btn"
          aria-label="Toggle menu"
          onClick={onToggleSidebar}
        >
          <MenuIcon />
        </button>
      </div>
    </nav>
  )
}
