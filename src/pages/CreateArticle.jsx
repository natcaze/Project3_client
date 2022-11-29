import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateArticle(props) {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const { userId } = useParams();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleSubTitle = (e) => setSubTitle (e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem('authToken');

      await axios.post(`${process.env.REACT_APP_API_URL}/user/create-article/${userId}`, { title, subTitle, image, description },
      { headers: { Authorization: `Bearer ${storedToken}` }});

      setTitle('');
      setSubTitle('');
      setImage('');
      setDescription('');

      props.refreshArticles();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>CREATE ARTICLE</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> TITLE </label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <label htmlFor="subTitle"> SUBTITLE </label>
        <input type="text" name="subTitle" value={subTitle} onChange={handleSubTitle}/>
        <label htmlFor="description"> DESCRIPTION </label>
        <input type="text" name="description" value={description} onChange={handleDescription}/>
        <label htmlFor="image"> IMAGE </label>
        <input type="text" name="image" value={image} onChange={handleImage}/>
       
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default CreateArticle;
