import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { StyledProfile } from "../components/styled/Card.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledTitles } from "../components/styled/Titles.styled";
import styled from "styled-components";

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
    <StyledBackground>
      <div>
        <StyledTitles bronwColor>
          <h5>CREATE YOUR COCKTAIL</h5>
        </StyledTitles>
        <StyledProfile greenColor>
          <form onSubmit={handleSubmit}>
            <label>COCKTAIL NAME</label>
            <br />
            <input
              type="text"
              name="cocktailName"
              value={cocktailName}
              onChange={handleCocktailName}
            />
            <label>DESCRIPTION</label>
            <br />
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
            />
            <label>INGREDIENTS</label>
            <br />
            <input
              type="text"
              name="ingredients"
              value={ingredients}
              onChange={handleIngredients}
            />
            <label>IMAGE</label>
            <br />
            <input
              type="text"
              name="image"
              value={image}
              onChange={handleImage}
            />
            <br />
            <br />
            <br />
            <StyledButton pinkColor type="submit">
              ADD
            </StyledButton>
            <br />
          </form>
        </StyledProfile>
        <br />
        <br />
      </div>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  background-color: #cfdfea;
  text-align: center;
  display: grid;
`;

export default CreateCocktail;
