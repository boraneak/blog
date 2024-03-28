import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>my awesome blog.</h1>
        <NavBar/>
        <div id='page-body'>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/not-found" element={<NotFoundPage />}></Route>
          <Route path="/article-page" element={<ArticlePage />}></Route>
          <Route path='/article-page/:article-id' element={<ArticleListPage/>}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
