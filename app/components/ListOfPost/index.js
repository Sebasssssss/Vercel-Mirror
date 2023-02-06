import Post from '../../components/Post'

const fetchPosts = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json()
  )
}

export async function ListOfPosts() {
  const posts = await fetchPosts()

  return posts
    .slice(0, 5)
    .map(({ id, title, body }) => (
      <Post id={id} title={title} body={body} key={id} />
    ))
}
