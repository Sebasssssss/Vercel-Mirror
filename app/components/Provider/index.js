'use client'
import { GeistProvider } from '@geist-ui/core'

export default function Provider({ children }) {
  return <GeistProvider themeType="dark">{children}</GeistProvider>
}
