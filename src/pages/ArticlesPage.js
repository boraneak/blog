import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

// import NotFoundPage from './NotFoundPage';
import axios from "axios";
const ArticlesPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  console.log(user);
  let { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/articles/${articleId}`);
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
      } catch (error) {
        console.error("error fetching the article", error);
      }
    };
    fetchArticle();
  }, [articleId]);

  const upvoteArticle = async () => {
    try {
      if (!articleId) {
        return <div>article not found!</div>;
      }
      const response = await axios.put(`/api/articles/${articleId}/upvote`);
      const updatedArticle = response.data;
      setArticleInfo(updatedArticle);
    } catch (error) {
      console.error("Error upvoting the article", error);
    }
  };
  const Login = () => {
    return navigate('/login');
  }

  // if (!articleInfo || Object.keys(articleInfo).length === 0) {
  //   return <NotFoundPage />
  // }
  return (
    <>
      <h1>{articleInfo.name}</h1>
      <div>
        {user ? (
          <button onClick={upvoteArticle}>upvote +</button>
        ) : (
          <button onClick={Login}>login to upvote</button>
        )}
        <p>this article has {articleInfo.upvotes} upvote(s).</p>
      </div>
      <div>
        <p>{articleInfo.content}</p>
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
        <CommentsList comments={articleInfo.comments} />
        {/* {articleInfo.comments.length > 0 ? <CommentsList comments={articleInfo.comments} /> : <div>no comments yet</div>} */}
      </div>
    </>
  );
};
export default ArticlesPage;
