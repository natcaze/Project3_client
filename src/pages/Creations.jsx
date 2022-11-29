import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Creations() {
  const [creations, setCreations] = useState([]);

  const getCocktailCreated = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/creations`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setCreations(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCocktailCreated();
  }, []);

  return (
    <div>
      <h3>MY CREATIONS</h3>
      <form action="/user/create-cocktail">
        <button type="submit">ADD COCKTAIL</button>
      </form>
      <form action="/article/create-article">
        <button type="submit">ADD ARTICLE</button>
      </form>

      {creations.map((creation) => {
        return (
          <div key={creation._id}>
            <p>{creation.cocktailName}</p>
            

            <form action="/user/edit-cocktail">
              <button type="submit">EDIT</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Creations;
