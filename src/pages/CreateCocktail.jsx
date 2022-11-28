import React from 'react'
import Creations from './Creations';

function CreateCocktail() {
  return (
    <div>
      <h3>CREATE YOUR COCKTAIL</h3>
      <form onSubmit={<Creations/>}>
<label>COCKTAIL NAME</label>
<input type="text" />
<label>DESCRIPTION</label>
<input type="text" />
<label>INGREDIENTS</label>
<input type="text" />
{/* <img src="" alt="" /> */}
<button type='submit'>ADD</button>
      </form>

    </div>
  );
}

export default CreateCocktail