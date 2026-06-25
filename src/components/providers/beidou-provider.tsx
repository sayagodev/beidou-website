'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Beidou from '@sayagodev/beidou/min'
import { BeidouContext } from './beidou-context'

export default function BeidouProvider({ children }: { children: React.ReactNode }) {
  const nav = useRef<Beidou | null>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    nav.current = new Beidou({
      key: "AltLeft"
    })

    return () => nav.current?.destroy()
  }, [])

  const toggle = useCallback(() => {
    if (!nav.current) return

    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Alt',
        code: 'AltLeft',
        bubbles: true,
      })
    )
    setIsActive((prev) => !prev)
  }, [])

  return (
    <BeidouContext.Provider value={{ isActive, toggle }}>
      {children}
    </BeidouContext.Provider>
  )
}
