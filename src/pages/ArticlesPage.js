import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
const ArticlesPage = () => {
  let { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/articles/${articleId}`);
        console.log('what is my response:::', response);
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);

      } catch (error) {
        console.error('error fetching articles', error);
      }
    }
    fetchArticle();
  }, [articleId])


  // const article = articleInfo.find(article => article.name === articleId);
  // if (!article) {
  //   return <NotFoundPage />
  // }
  return (
    <>
      {/* <h1>{articleInfo.title}</h1>
      <p>this article has {articleInfo.upvotes} upvote(s).</p>
      {articleInfo.comments.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))} */}
    </>
  )
}
export default ArticlesPage;
