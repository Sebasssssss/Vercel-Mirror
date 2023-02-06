import Comments from '@/app/components/Comments'

const fetchComments = async id => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then(res => res.json())
}

export default async function CommentsPage({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return comments.map(({ id, name, body }) => (
    <Comments key={id} title={name} content={body} />
  ))
}
