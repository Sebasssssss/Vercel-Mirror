'use client'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

export default function Provider({ children }) {
  return (
    <GeistProvider themeType="dark">
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}
