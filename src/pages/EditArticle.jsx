import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
    <div>
      <h3>EDIT ARTICLE</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> TITLE </label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
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
      </form>
      <button onClick={deleteArticle}>DELETE COCKTAIL</button>
    </div>
  );
}

export default CreateArticle;
