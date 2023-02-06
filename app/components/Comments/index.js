'use client'
import { Description } from '@geist-ui/core'

export default function Comments({ title, content }) {
  return (
    <div style={{ margin: '20px' }}>
      <Description title={title} content={content} />
    </div>
  )
}
