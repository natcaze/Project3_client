import axios from "axios";
import { useState } from "react";

function Cocktail() {
  const [cocktail, setCocktail] = useState(null);

  const getRandom = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/random`
      );
      setCocktail(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ingredientsCopy = [...e.target.ingredients];

    const selectedIngredients = ingredientsCopy
      .filter((ingredient) => ingredient.checked)
      .map((ingredient) => ingredient.value);
    console.log(selectedIngredients);

    const response = await axios.get(
      `${
        process.env.REACT_APP_API_URL
      }/api/generated-cocktail?${selectedIngredients
        .map((n, index) => `ingredients[${index}]=${n}`)
        .join("&")}`
    );
    setCocktail(response.data);

    console.log(response.data);
    /*  const checkedFilters = filter() */
  };

  return (
    <div>
      <div>
        <h4>Cocktail Name</h4>
        <img src="" alt="" />

        <button onClick={getRandom}>Random</button>
        {cocktail && (
          <div>
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt="" />
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h5>FILTER BY TYPE</h5>
            <div>
              <div>
                <input type="checkbox" name="ingredients" value="Rum" />
                <label> Rum </label>
                <input type="checkbox" name="ingredients" value="Vodka" />
                <label> Vodka </label>
                <input type="checkbox" name="ingredients" value="Gin" />
                <label> Gin </label>
              </div>
              <div>
                <input type="checkbox" name="ingredients" value="Tequila" />
                <label> Tequila </label>
                <input type="checkbox" name="ingredients" value="Liqueur" />
                <label> Liqueur </label>
                <input type="checkbox" name="ingredients" value="Others" />
                <label> Others </label>
              </div>
            </div>
          </div>

          <div>
            <h5>FILTER BY ALCOHOL</h5>
            <div>
              <div>
                <input type="checkbox" name="ingredients" value="Rum" />
                <label> Rum </label>
                <input type="checkbox" name="ingredients" value="Vodka" />
                <label> Vodka </label>
                <input type="checkbox" name="ingredients" value="Gin" />
                <label> Gin </label>
              </div>
              <div>
                <input type="checkbox" name="ingredients" value="Tequila" />
                <label> Tequila </label>
                <input type="checkbox" name="ingredients" value="Liqueur" />
                <label> Liqueur </label>
                <input type="checkbox" name="ingredients" value="Others" />
                <label> Others </label>
              </div>
            </div>
          </div>

          <div>
            <h5>FILTER BY INGREDIENTS</h5>
            <div>
              <div>
                <input type="checkbox" name="ingredients" value="Rum" />
                <label> Rum </label>
                <input type="checkbox" name="ingredients" value="Vodka" />
                <label> Vodka </label>
                <input type="checkbox" name="ingredients" value="Gin" />
                <label> Gin </label>
              </div>
              <div>
                <input type="checkbox" name="ingredients" value="Tequila" />
                <label> Tequila </label>
                <input type="checkbox" name="ingredients" value="Liqueur" />
                <label> Liqueur </label>
                <input type="checkbox" name="ingredients" value="Others" />
                <label> Others </label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit">Choose another</button>
      </form>
    </div>
  );
}

export default Cocktail;
