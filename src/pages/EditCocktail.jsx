import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { StyledProfile } from "../components/styled/Card.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledTitles } from "../components/styled/Titles.styled";
import styled from "styled-components";

function EditCocktail() {
  const [cocktailName, setCocktailName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");

  const { cocktailId } = useParams();
  const navigate = useNavigate();

  const handleCocktailName = (e) => setCocktailName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleIngredients = (e) => setIngredients(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const getCocktail = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/one-cocktail/${cocktailId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setCocktailName(response.data.strDrink);
      setDescription(response.data.strInstructions);
      setIngredients(response.data.strIngredient);
      setImage(response.data.strDrinkThumb);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCocktail();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/user/edit-cocktail/${cocktailId}`,
        { cocktailName, description, ingredients, image },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setCocktailName("");
      setDescription("");
      setIngredients("");
      setImage("");

      navigate(`/user/creations`);
    } catch (error) {
      console(error);
    }
  };

  const deleteCocktail = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/user/edit-cocktail/${cocktailId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      navigate(`/user/creations`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledBackground>
      <div>
        <StyledTitles greenColor>
          <h5>EDIT COCKTAIL</h5>
        </StyledTitles>
        <StyledProfile yellowishColor>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cocktailName">COCKTAIL NAME</label>
            <br />
            <input
              type="text"
              name="cocktailName"
              value={cocktailName}
              onChange={handleCocktailName}
            />
            <label htmlFor="description">DESCRIPTION</label>
            <br />
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
            />
            <label htmlFor="ingredients">INGREDIENTS</label>
            <br />
            <input
              type="text"
              name="ingredients"
              value={ingredients}
              onChange={handleIngredients}
            />
            <label htmlFor="image">IMAGE</label>
            <br />
            <input
              type="text"
              name="image"
              value={image}
              onChange={handleImage}
            />
            <br />
            <StyledButton yellowColor type="submit">
              EDIT COCKTAIL
            </StyledButton>
          </form>
          <br />
          <br />
          <StyledButton purpleColor onClick={deleteCocktail}>
            DELETE COCKTAIL
          </StyledButton>
        </StyledProfile>
      </div>
      <br />
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  background-color: #ebb241;
  text-align: center;
  display: grid;
`;

export default EditCocktail;
