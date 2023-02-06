'use client'

import { Card } from '@geist-ui/core'
import Link from 'next/link'

export default function SinglePost({ title, body, href }) {
  return (
    <>
      <Card hoverable style={{ margin: '20px' }}>
        <h5>{title}</h5>
        <p>{body}</p>
        <Link href={href}>See comments</Link>
      </Card>
    </>
  )
}
