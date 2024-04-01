import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesPage';
import ArticlesPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id='page-body'>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/articles" element={<ArticlesPage />}></Route>
          <Route path='/articles/:articleId' element={<ArticlesListPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
