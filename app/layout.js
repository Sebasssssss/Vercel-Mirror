import Link from 'next/link'
import { font } from './font'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>First app with Next 13</title>
      </head>
      <body>
        <nav className={font.className}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/works">works</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
