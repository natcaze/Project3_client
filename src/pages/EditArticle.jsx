import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { StyledProfile } from "../components/styled/Card.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledTitles } from "../components/styled/Titles.styled";
import styled from "styled-components";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [img, setImage] = useState("");
  const [description, setDescription] = useState("");

  const { articleId } = useParams();
  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleRecipe = (e) => setRecipe(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const getArticle = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/one-article/${articleId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setTitle(response.data.title);
      setRecipe(response.data.recipe);
      setDescription(response.data.description);
      setImage(response.data.image);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/article/edit-article/${articleId}`,
        { title, recipe, img, description },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setTitle("");
      setRecipe("");
      setDescription("");
      setImage("");

      navigate(`/user/creations`);
    } catch (error) {
      console(error);
    }
  };

  const deleteArticle = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/user/edit-article/${articleId}`,
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
        <StyledTitles orangeColor>
          <h5>EDIT ARTICLE</h5>
        </StyledTitles>
        <StyledProfile lightBlueColor>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title"> TITLE </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitle}
              />
            </div>
            <div>
              <label htmlFor="recipe"> RECIPE </label>
              <input
                type="text"
                name="recipe"
                value={recipe}
                onChange={handleRecipe}
              />
            </div>
            <div>
              <label htmlFor="description"> DESCRIPTION </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
              />
            </div>
            <div>
              <label htmlFor="img"> IMAGE </label>
              <input
                type="text"
                name="img"
                value={img}
                onChange={handleImage}
              />
            </div>
          </form>
          <br />
          <StyledButton pinkColor onClick={deleteArticle}>
            DELETE ARTICLE
          </StyledButton>
        </StyledProfile>
        <br />
        <br />
      </div>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  background-color: #b6e2a1;
  text-align: center;
  display: grid;
`;

export default CreateArticle;
