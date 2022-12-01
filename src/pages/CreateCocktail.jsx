import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledSection } from "../components/styled/Section.styled";

function CreateCocktail() {
  const [cocktailName, setCocktailName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");

  const handleCocktailName = (e) => setCocktailName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleIngredients = (e) => setIngredients(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");

      await axios.post(
        `${process.env.REACT_APP_API_URL}/user/create-cocktail`,
        { cocktailName, description, ingredients, image },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setCocktailName("");
      setDescription("");
      setIngredients("");
      setImage("");

      navigate(`/user/creations`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <StyledSection greenColor>
        <h3>CREATE YOUR COCKTAIL</h3>
        <form onSubmit={handleSubmit}>
          <label>COCKTAIL NAME</label>
          <input
            type="text"
            name="cocktailName"
            value={cocktailName}
            onChange={handleCocktailName}
          />
          <label>DESCRIPTION</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
          <label>INGREDIENTS</label>
          <input
            type="text"
            name="ingredients"
            value={ingredients}
            onChange={handleIngredients}
          />
          <label>IMAGE</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImage}
          />
          <button type="submit">ADD</button>
        </form>
      </StyledSection>
    </div>
  );
}

export default CreateCocktail;
