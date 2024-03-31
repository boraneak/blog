import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';

function App() {
  // Get the articleId param from the URL.
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id='page-body'>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/articles" element={<ArticlePage />}></Route>
          <Route path='/articles/:articleId' element={<ArticleListPage/>}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
