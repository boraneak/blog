import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import articles from './article-content';
const ArticleListPage = () => {
  let { articleId } = useParams();
  const article = articles.find(article => article.name === articleId);
  return (
    <Fragment>
      <h1>{article.title}</h1>
      {article.content.map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </Fragment>
  )
}
export default ArticleListPage;
