import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailPage from './pages/CocktailPage';
import ArticlesPage from './pages/ArticlesPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <div>
    <Navbar/>
     <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/pages/cocktail" element={<CocktailPage />} />
    <Route path="/pages/articles" element={<ArticlesPage />} />
    <Route path="/pages/login" element={<LoginPage />} />
    <Route path="/pages/signup" element={<SignupPage />} />
    </Routes> 
    </div>

  );
}

export default App;
