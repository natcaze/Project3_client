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
        <Route path="/api/cocktail" element={<Cocktail />} />
        <Route path="/article/all-articles" element={<Articles />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/user/favorites" element={<Favorites />} />
        <Route path="/user/edit-profile" element={<EditProfile />} />
        <Route path="/user/creations" element={<Creations />} />
        <Route path="/cocktail/create-cocktail" element={<CreateCocktail />} />
        <Route path="/article/create-article" element={<CreateArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
