'use client'

import type { FC } from 'react'
import { getLocalizedUrl } from 'intlayer'
import { useLocale } from 'next-intlayer'
import Link from 'next/link'
import './locale-switcher.css'

export const LocaleSwitcher: FC = () => {
  const { locale, pathWithoutLocale, availableLocales } = useLocale()
  const otherLocale = availableLocales.find((l) => l !== locale)

  if (!otherLocale) return null

  return (
    <ot-dropdown>
      <button className="locale-switcher__trigger" popoverTarget="locale-menu">
        {locale.toUpperCase()}
      </button>
      <menu popover="auto" id="locale-menu" className="locale-switcher__menu">
        <Link
          href={getLocalizedUrl(pathWithoutLocale, otherLocale)}
          hrefLang={otherLocale}
          role="menuitem"
        >
          {otherLocale.toUpperCase()}
        </Link>
      </menu>
    </ot-dropdown>
  )
}
