import { useState } from "react";
import axios from 'axios'

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText
    });
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName('');
    setCommentText('');
  }

  return (
    <>
      <div id="add-comment-form">
        <h4>add a comment</h4>
        <label>
          name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          comment:
          <textarea type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
        </label>
        <button onClick={addComment}>add</button>
      </div>
    </>
  )
}

export default AddCommentForm;
