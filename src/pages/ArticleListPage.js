import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import articles from './article-content';
const ArticleListPage = () => {
  let { articleId } = useParams();
  const article = articles.find(article => article.name === articleId);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}
export default ArticleListPage;
