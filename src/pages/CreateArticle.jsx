import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { StyledProfile } from "../components/styled/Card.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledTitles } from "../components/styled/Titles.styled";
import styled from "styled-components";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [img, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleRecipe = (e) => setRecipe(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");

      await axios.post(
        `${process.env.REACT_APP_API_URL}/article/create-article`,
        { title, description, recipe, img },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setTitle("");
      setRecipe("");
      setImage("");
      setDescription("");

      navigate(`/user/creations`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledBackground>
      <div>
        <StyledTitles orangeColor>
          <h5>CREATE ARTICLE</h5>
        </StyledTitles>
        <StyledProfile yellowishColor>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title"> TITLE </label>
            <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
            />
            <label htmlFor="recipe"> RECIPE </label>
            <br />
            <input
              type="text"
              name="recipe"
              value={recipe}
              onChange={handleRecipe}
            />
            <label htmlFor="description"> DESCRIPTION </label>
            <br />
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
            />
            <StyledHiden>
              <label htmlFor="img"> IMAGE </label>
              <br />
              <input
                type="text"
                name="img"
                value={img}
                onChange={handleImage}
              />
            </StyledHiden>
            <br />
            <StyledButton redColor type="submit">
              ADD
            </StyledButton>
            <br />
          </form>
          <br />
          <br />
        </StyledProfile>
      </div>
      <br />
      <br />
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  background-color: #ffb3b3;
  text-align: center;
  display: grid;
`;

const StyledHiden = styled.div`
  display: none;
`;

export default CreateArticle;
