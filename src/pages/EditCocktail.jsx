import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';

function EditCocktail() {
    const [cocktailName, setCocktailName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [image, setImage] = useState('');

    const { cocktailId } = useParams();
    const navigate = useNavigate();

    const handleCocktailName = (e) => setCocktailName(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleIngredients = (e) => setIngredients (e.target.value);
    const handleImage = (e) => setImage(e.target.value);

    const getCocktail = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/edit-cocktail/${cocktailId}`);

          setCocktailName(response.data.cocktailName);
          setDescription(response.data.description);
          setIngredients(response.data.ingredients);
          setImage(response.data.image);

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
          await axios.put(`${process.env.REACT_APP_API_URL}/user/edit-cocktail/${cocktailId}`,
            {cocktailName, description, ingredients, image});

            setCocktailName('');
            setDescription('');
            setIngredients('');
            setImage('');
      
    
            navigate(`/user/creations`);

        } catch (error){
          console.log(error)
          }
        };


    
          const deleteCocktail = async () => {
            try {
              await axios.delete(`${process.env.REACT_APP_API_URL}/user/edit-cocktail/${cocktailId}`);
              navigate(`/user/creations`);
            } catch (error) {
              console.log(error);
            }
          };

  return (
    <div>
        <h3>EDIT COCKTAIL</h3>
        <form onSubmit={handleSubmit}>
        <label htmlFor="cocktailName">COCKTAIL NAME</label>
        <input type="text" name="cocktailName" value={cocktailName} onChange={handleCocktailName} />
        <label htmlFor="description">DESCRIPTION</label>
        <input type="text" name="description" value={description} onChange={handleDescription} />
        <label htmlFor="ingredients">INGREDIENTS</label>
        <input type="text" name="ingredients" value={ingredients} onChange={handleIngredients} />
        <label htmlFor="image">IMAGE</label>
        <input type="text" name="image" value={image} onChange={handleImage} />
        <button type="submit">EDIT COCKTAIL</button>
        </form>

        <button onClick={deleteCocktail}>DELETE COCKTAIL</button>
    </div>
  )
}

export default EditCocktail