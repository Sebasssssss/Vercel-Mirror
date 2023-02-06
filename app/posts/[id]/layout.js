import SinglePost from '@/app/components/SinglePost'

const fetchSinglePosts = async id => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    res => res.json()
  )
}

export default async function Post({ children, params }) {
  const { id } = params
  const { title, body } = await fetchSinglePosts(id)

  return (
    <div>
      <SinglePost title={title} body={body} href={`/posts/${id}/comments`} />
      <div>{children}</div>
    </div>
  )
}
