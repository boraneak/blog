import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesPage';
import ArticlesPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage.js';
import CreateAccountPage from './pages/CreateAccountPage.js';
import NavBar from './NavBar';

// Import the Firebase SDK
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase/index.js'
// Initialize Firebase with your configuration
initializeApp(firebaseConfig);


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path='/articles/:articleId' element={<ArticlesListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
