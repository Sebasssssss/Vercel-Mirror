import Link from 'next/link'

const fetchPosts = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json()
  )
}

export async function ListOfPosts() {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </Link>
    </article>
  ))
}
