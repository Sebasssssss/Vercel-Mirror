import Link from 'next/link'

const fetchSinglePosts = async id => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    res => res.json()
  )
}

export default async function Post({ children, params }) {
  const { id } = params
  const posts = await fetchSinglePosts(id)

  return (
    <>
      <article key={posts.id} style={{ display: 'grid', gap: '20px' }}>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
        <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      </article>
      <div>{children}</div>
    </>
  )
}
