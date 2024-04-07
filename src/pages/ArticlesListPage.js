import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticlesList from "../components/ArticlesList";
const ArticlesListPage = () => {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const response = await axios('api/articles');
        const allArticles = response.data;
        setArticles(allArticles);
      } catch (error) {
        console.error('Error fetching all articles', error);
      }
    }
    fetchAllArticles();
  }, []);
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  )
}
export default ArticlesListPage;
