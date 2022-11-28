import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cocktail from './pages/Cocktail';
import Articles from './pages/Articles';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div>
    <Navbar/>
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pages/cocktail" element={<Cocktail />} />
    <Route path="/pages/articles" element={<Articles />} />
    <Route path="/pages/login" element={<Login />} />
    <Route path="/pages/signup" element={<Signup />} />
    <Route path="/pages/contact" element={<ContactUs />} />
    </Routes> 
    <Footer/>
    </div>

  );
}

export default App;
