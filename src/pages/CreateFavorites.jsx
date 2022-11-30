import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import { StyledSection } from "../components/styled/Section.styled";

function CreateFavorites() {
  const [favorites, setFavorites] = useState("");

  const { cocktailId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleFavorites = (e) => setFavorites(e.target.value);

  const getFavorites = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/create-favorite/${cocktailId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setFavorites(response.data.title);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/user/creations/${user._id}`,
        { favorites },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setFavorites("");

      navigate(`/user/favorites`);
    } catch (error) {
      console(error);
    }
  };

  const deleteFavorite = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/user/creations/${user._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      navigate(`/user/favorites`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <StyledSection purpleColor>
        <h3>MY FAVORITES</h3>
        {favorites &&
          favorites.map((favorite) => {
            return (
              <div key={favorite._id}>
                <img src={favorite.strDrinkThumb} alt="default" />
                <p>{favorite.strDrink}</p>
                <button onClick={deleteFavorite}>DELETE COCKTAIL</button>
              </div>
            );
          })}
      </StyledSection>
    </div>
  );
}

export default CreateFavorites;
