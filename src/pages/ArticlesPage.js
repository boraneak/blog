import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentsList from '../components/CommentsList';
// import NotFoundPage from './NotFoundPage';
import axios from 'axios';
const ArticlesPage = () => {
  let { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/articles/${articleId}`);
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
      } catch (error) {
        console.error('error fetching the article', error);
      }
    }
    fetchArticle();
  }, [articleId]);

  const upvoteArticle = async () => {
    try {
      if (!articleId) {
        return <div>article not found!</div>
      }
      const response = await axios.put(`/api/articles/${articleId}/upvote`);
      const updatedArticle = response.data;
      setArticleInfo(updatedArticle);
    } catch (error) {
      console.error('Error upvoting the article', error);
    }
  }

  // if (!articleInfo || Object.keys(articleInfo).length === 0) {
  //   return <NotFoundPage />
  // }
  return (
    <>
      <h1>{articleInfo.name}</h1>
      <div>
        <button onClick={upvoteArticle}>upvote +</button>
        <p>this article has {articleInfo.upvotes} upvote(s).</p>
      </div>
      <div>
        <p>{articleInfo.content}</p>
        <CommentsList comments={articleInfo.comments} />
        {/* {articleInfo.comments.length > 0 ? <CommentsList comments={articleInfo.comments} /> : <div>no comments yet</div>} */}
      </div>
    </>
  )
}
export default ArticlesPage;
