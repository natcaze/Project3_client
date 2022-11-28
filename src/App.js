import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cocktail from "./pages/Cocktail";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import Favorites from "./pages/Favorites";
import EditProfile from "./pages/EditProfile";
import Creations from "./pages/Creations";
import CreateArticle from "./pages/CreateArticle";
import CreateCocktail from "./pages/CreateCocktail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/cocktail" element={<Cocktail />} />
        <Route path="/pages/articles" element={<Articles />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/signup" element={<Signup />} />
        <Route path="/pages/contact" element={<ContactUs />} />
        <Route path="/pages/favorites" element={<Favorites />} />
        <Route path="/pages/edit-profile" element={<EditProfile />} />
        <Route path="/pages/creations" element={<Creations />} />
        <Route path="/pages/create-cocktail" element={<CreateCocktail />} />
        <Route path="/pages/create-article" element={<CreateArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
