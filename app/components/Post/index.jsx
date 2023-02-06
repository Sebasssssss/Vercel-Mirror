'use client'

import { Card } from '@geist-ui/core'
import Link from 'next/link'

export default function Cards({ id, title, body }) {
  return (
    <Card hoverable style={{ margin: '20px' }}>
      <Link href={`/posts/${id}`}>
        <h5>{title}</h5>
        <p>{body}</p>
      </Link>
    </Card>
  )
}
