import { Link } from "react-router-dom";
const ArticlesList = ({articles}) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <Link className="article-list-item" to={`/articles/${article.name}`}>
            <h1>{article.title}</h1>
            <p>{article.content[0].substring(0, 145)}...</p>
          </Link>
        </div>
      ))}
    </>
  )
}
export default ArticlesList;