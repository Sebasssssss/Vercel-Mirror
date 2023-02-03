import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>First app with Next 13</title>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/works">Works</Link>
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
