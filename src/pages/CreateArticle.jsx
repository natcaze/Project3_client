import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledSection } from "../components/styled/Section.styled";

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
    <div>
      <StyledSection redColor>
        <h3>CREATE ARTICLE</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title"> TITLE </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
          />
          <label htmlFor="recipe"> RECIPE </label>
          <input
            type="text"
            name="recipe"
            value={recipe}
            onChange={handleRecipe}
          />
          <label htmlFor="description"> DESCRIPTION </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
          <label htmlFor="img"> IMAGE </label>
          <input type="text" name="img" value={img} onChange={handleImage} />

          <button type="submit">ADD</button>
        </form>
      </StyledSection>
    </div>
  );
}

export default CreateArticle;
