'use client'

import { createContext, useContext } from 'react'

interface BeidouContextValue {
  isActive: boolean
  toggle: () => void
}

export const BeidouContext = createContext<BeidouContextValue>({
  isActive: false,
  toggle: () => {},
})

export const useBeidou = () => useContext(BeidouContext)
