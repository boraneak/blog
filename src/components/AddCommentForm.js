import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const { user, isLoading } = useUser();
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();

  const Login = () => {
    return navigate('/login');
  }

  const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    });
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setCommentText("");
  };

  return (
    <>
      <div id="add-comment-form">
        <h4>add a comment</h4>
        <label>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          comment:
          <textarea
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </label>
        {user ? (
          <button onClick={addComment}>add</button>
        ) : (
          <button onClick={Login}>login to add comment</button>
        )}
      </div>
    </>
  );
};

export default AddCommentForm;
