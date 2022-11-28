import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const { userId } = useParams();
  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleSubTitle = (e) => setSubTitle (e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const getArticle = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/edit-article/${userId}`);

      setTitle(response.data.title);
      setSubTitle(response.data.subTitle);
      setDescription(response.data.image);
      setImage(response.data.description);

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
      await axios.put(`${process.env.REACT_APP_API_URL}/user/edit-article/${userId}`,
        {title, subTitle, image, description});

        setTitle('');
        setSubTitle('');
        setDescription('');
        setImage('');
  

        navigate(`/user/creations`);

    } catch (error){
      console(error)
      }
    };



      const deleteArticle = async () => {
        try {
          await axios.delete(`${process.env.REACT_APP_API_URL}/user/edit-article/${userId}`);
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
        <label htmlFor="subTitle"> SUBTITLE </label>
        <input type="text" name="subTitle" value={subTitle} onChange={handleSubTitle}/>
        <label htmlFor="description"> DESCRIPTION </label>
        <input type="text" name="description" value={description} onChange={handleDescription}/>
        <label htmlFor="image"> IMAGE </label>
        <input type="text" name="image" value={image} onChange={handleImage}/>
       
        <button type="submit">SAVE CHANGES</button>
      </form>
      <button onClick={deleteArticle}>DELETE COCKTAIL</button>
    </div>
  );
}

export default CreateArticle;
