import React from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link } from "react-router-dom";

function Creations() {
  const [creations, setCreations] = useState([]);
  const { user } = useContext(AuthContext);

  const getCocktailCreated = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/creations/${user._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setCreations(response.data.createdCocktails);
      console.log(response.data.createdCocktails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCocktailCreated();
  }, [user]);

  return (
    <div>
      <h3>MY CREATIONS</h3>
      <form action="/user/create-cocktail">
        <button type="submit">ADD COCKTAIL</button>
      </form>
      <form action="/article/create-article">
        <button type="submit">ADD ARTICLE</button>
      </form>

      {creations &&
        creations.map((creation) => {
          return (
            <div key={creation._id}>
              <img src={creation.strDrinkThumb} alt="default" />
              <p>{creation.strDrink}</p>

              <Link to={`/user/edit-cocktail/${creation._id}`}>EDIT</Link>
            </div>
          );
        })}
    </div>
  );
}

export default Creations;
