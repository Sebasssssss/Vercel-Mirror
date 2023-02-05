import Link from 'next/link'

const fetchPosts = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json()
  )
}

export async function ListOfPosts() {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(({ id, title, body }) => (
    <article key={id}>
      <Link href={`/posts/${id}`}>
        <h1>{title}</h1>
        <p>{body}</p>
      </Link>
    </article>
  ))
}
