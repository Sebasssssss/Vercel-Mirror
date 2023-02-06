import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PersonalBlog() {
  return <h1 className={inter.className}>This is my PersonalBlog</h1>
}
