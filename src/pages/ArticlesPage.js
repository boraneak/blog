import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
// import { axios } from 'axios';
const ArticlesPage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });


  useEffect(() => {
    setArticleInfo({ upvotes: Math.ceil(Math.random() * 10), comments: [] });
  }, [])


  let { articleId } = useParams();

  const article = articles.find(article => article.name === articleId);
  if (!article) {
    return <NotFoundPage />
  }
  return (
    <>
      <h1>{article.title}</h1>
      <p>this article has {articleInfo.upvotes} upvote(s).</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}
export default ArticlesPage;
