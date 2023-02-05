const fetchComments = async id => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then(res => res.json())
}

export default async function CommentsPage({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return comments.map(({ id, name, email, body }) => (
    <div key={id} style={{ padding: '20px' }}>
      <div>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <p>{body}</p>
      </div>
    </div>
  ))
}
