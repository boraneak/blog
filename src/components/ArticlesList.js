import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  // check if articles is not an array, return an empty div
  if (!Array.isArray(articles)) {
    return <div>No articles available</div>
  }
  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <Link className="article-list-item" to={`/articles/${article.name}`}>
            <h1>{article.name}</h1>
          </Link>
          <p>{article.content.substring(0, 145)}...</p>
        </div>
      ))}
    </>
  )
}
export default ArticlesList;
