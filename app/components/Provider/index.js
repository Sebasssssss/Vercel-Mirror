'use client'
import { useState } from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

export default function Provider({ children }) {
  const [themeType, setThemeType] = useState('dark')

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}
