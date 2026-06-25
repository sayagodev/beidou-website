'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntlayer } from 'next-intlayer'
import { useBeidou } from '@/components/providers/beidou-context'
import './mobile-beidou-notice.css'

declare global {
  interface Window {
    ot?: {
      toast: (message: string, title?: string, options?: Record<string, unknown>) => void
    }
  }
}

function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  )
}

export default function MobileBeidouNotice() {
  const content = useIntlayer('mobile-beidou-notice')
  const { isActive, toggle } = useBeidou()
  const [isMobile, setIsMobile] = useState(false)
  const toastShown = useRef(false)

  useEffect(() => {
    const mobile = isTouchDevice()
    setIsMobile(mobile)

    if (mobile && !toastShown.current && window.ot) {
      toastShown.current = true
      setTimeout(() => {
        window.ot!.toast(
          `${content.toastMessage} ${content.toastHint}`,
          content.toastTitle,
          { variant: 'warning', placement: 'bottom-center', duration: 8000 }
        )
      }, 1500)
    }
  }, [content])

  if (!isMobile) return null

  return (
    <button
      className="mobile-beidou-toggle"
      onClick={toggle}
      aria-label={isActive ? content.disableBeidou : content.enableBeidou}
      data-ko-skip
      style={{
        backgroundColor: '#c2727a',
        color: '#fff',
      }}
    >
      {isActive ? 'OFF' : 'ON'}
    </button>
  )
}
