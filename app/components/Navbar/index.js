'use client'
import { Button } from '@geist-ui/core'
import Link from 'next/link'
import { font } from '../../font'

export default function Navbar() {
  return (
    <nav className={font.className}>
      <ul>
        <Button>
          <Link href="/">Home</Link>
        </Button>
        <Button>
          <Link href="/pages/works">works</Link>
        </Button>
        <Button>
          <Link href="/pages/posts">Posts</Link>
        </Button>
      </ul>
    </nav>
  )
}
