'use client'
import { Tabs } from '@geist-ui/core'
import { useRouter } from 'next/navigation'

export default function TabNav() {
  const router = useRouter()
  return (
    <Tabs
      value={router.pathname}
      onChange={route => router.push(route)}
      initialValue="0"
    >
      <Tabs.Item label="Overview" value="/" />
      <Tabs.Item label="Integrations" value="/pages/integrations" />
      <Tabs.Item label="Activity" value="/pages/activity" />
      <Tabs.Item label="Domains" value="/pages/domains" />
      <Tabs.Item label="Usage" value="/pages/usage" />
      <Tabs.Item label="Edge Config" value="/pages/edgeConfig" />
      <Tabs.Item label="Settings" value="/pages/settings" />
    </Tabs>
  )
}
