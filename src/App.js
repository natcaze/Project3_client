import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import EditProfile from "./pages/EditProfile";

import Cocktail from "./pages/Cocktail";
import CreateCocktail from "./pages/CreateCocktail";
import EditCocktail from "./pages/EditCocktail";

import Favorites from "./pages/Favorites";
import CreateFavorites from "./pages/CreateFavorites";
import EditFavorites from "./pages/EditFavorites";

import Creations from "./pages/Creations";
import CreateArticle from "./pages/CreateArticle";
import Articles from "./pages/Articles";
import EditArticle from "./pages/EditArticle";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/generated-cocktail" element={<Cocktail />} />
        <Route path="/user/create-cocktail" element={<CreateCocktail />} />
        <Route
          path="/user/edit-cocktail/:cocktailId"
          element={<EditCocktail />}
        />

        <Route path="/article/all-articles" element={<Articles />} />
        <Route path="/article/create-article" element={<CreateArticle />} />
        <Route
          path="/user/edit-article/:articleId"
          element={<EditArticle />}
        />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/user/favorites" element={<Favorites />} />
        <Route path="/user/create-favorites" element={<CreateFavorites />} />
        <Route path="/user/edit-favorites" element={<EditFavorites />} />

        <Route path="/user/edit-profile" element={<EditProfile />} />
        <Route path="/user/creations" element={<Creations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
