import { Inter } from '@next/font/google'
import { ListOfPosts } from './ListOfPosts'

const inter = Inter({ subsets: ['latin'] })

export default function Posts() {
  return (
    <section>
      <ListOfPosts />
    </section>
  )
}
