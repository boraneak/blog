const CommentsList = ({ comments }) => {
  if (!comments.length) {
    return (
      <>
        <h4>comments</h4>
        <div>no comments yet</div>
      </>
    )
  }
  return (
    <>
      <h4>comments</h4>
      {comments.map(comment => (
        <div className="comment" key={comment.postedBy + '' + comment.text}>
          <h5>{comment.postedBy}</h5>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  )
}
export default CommentsList;
