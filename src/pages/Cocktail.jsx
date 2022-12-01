import axios from "axios";
import { useState } from "react";

import { StyledFilterOption } from "../components/styled/FilterOption.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledTitles } from "../components/styled/Titles.styled";
import { StyledOneCard } from "../components/styled/OneCard.styled";

import styled from "styled-components";

function Cocktail() {
  const [cocktail, setCocktail] = useState(null);

  const getRandom = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/random`
      );
      setCocktail(response.data[0]);
      console.log(response.data);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <StyledBackground>
      {cocktail && (
        <StyledOneCard lightBlueColor>
          <br />
          <StyledTitles orangeColor>
            <h5>{cocktail.strDrink}</h5>
          </StyledTitles>
          <img src={cocktail.strDrinkThumb} alt="drink" />
          <ul>
            <li>
              <span>CATEGORY:</span> {cocktail.strCategory}
            </li>
            <br />
            <li>
              <span>GLASS:</span> {cocktail.strGlass}
            </li>
            <br />
            <li>
              <span>INSTRUCTIONS:</span> {cocktail.strInstructions}
            </li>
            <br />
            <li>
              <span>INGREDIENTS:</span> {cocktail.strIngredient}
            </li>
          </ul>
        </StyledOneCard>
      )}
      <br />
      <StyledFilterOption>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <StyledTitles greenColor>
              <h5>FILTER BY ALCOHOL</h5>
            </StyledTitles>

            <input type="checkbox" name="ingredients" value="Gin" />
            <label> GIN </label>
            <br />
            <input type="checkbox" name="ingredients" value="Rum" />
            <label> RUM </label>
            <br />
            <input type="checkbox" name="ingredients" value="Tequila" />
            <label> TEQUILA </label>
            <br />
            <input type="checkbox" name="ingredients" value="Vodka" />
            <label> VODKA </label>
            <br />
            <input type="checkbox" name="ingredients" value="Whisky" />
            <label> WHISKY </label>
            <br />
            <StyledTitles orangeColor>
              <h5>FILTER BY LIQUEUR</h5>
            </StyledTitles>
            <input type="checkbox" name="ingredients" value="Beer" />
            <label> BEER </label>
            <br />
            <input type="checkbox" name="ingredients" value="Amaretto" />
            <label> AMARETTO </label>
            <br />
            <input
              type="checkbox"
              name="ingredients"
              value="Baileys irish cream"
            />
            <label> BAILEYS IRISH CREAM </label>
            <br />
            <input type="checkbox" name="ingredients" value="Kahlua" />
            <label> KAHLUA </label>
            <br />
            <input
              type="checkbox"
              name="ingredients"
              value="Maraschino cherry"
            />
            <label> MARASCHINO CHERRY </label>
            <br />
            <input type="checkbox" name="ingredients" value="Triple sec" />
            <label> TRIPLE SEC </label>
            <br />
            <input type="checkbox" name="ingredients" value="Dry Vermouth" />
            <label> VERMOUTH </label>
            <br />
            <StyledTitles blueColor>
              <h5>FILTER BY INGREDIENTS</h5>
            </StyledTitles>
            <input type="checkbox" name="ingredients" value="Lemon peel" />
            <label> LEMON PEEL </label>
            <br />
            <input type="checkbox" name="ingredients" value="Mint" />
            <label> MINT </label>
            <br />
            <input type="checkbox" name="ingredients" value="Egg White" />
            <label> EGG WHITE </label>
            <br />
            <input type="checkbox" name="ingredients" value="Sugar syrup" />
            <label> SUGAR SYRUP </label>
            <br />
            <input type="checkbox" name="ingredients" value="Chocolate" />
            <label> CHOCOLATE </label>
            <br />
            <input type="checkbox" name="ingredients" value="Orange Peel" />
            <label> ORANGE PEEL </label>
            <br />
            <input type="checkbox" name="ingredients" value="Lemon Juice" />
            <label> LEMON JUICE </label>
            <br />
            <input type="checkbox" name="ingredients" value="Orange Juice" />
            <label> ORANGE JUICE </label>
            <br />
            <input type="checkbox" name="ingredients" value="Milk" />
            <label> MILK </label>
            <br />
            <input type="checkbox" name="ingredients" value="Grenadine" />
            <label> GRENADINE </label>
            <br />
            <input type="checkbox" name="ingredients" value="Coffee" />
            <label> COFFEE </label>
            <br />
            <input type="checkbox" name="ingredients" value="Pineapple juice" />
            <label> PINEAPPLE JUICE </label>
          </div>
          <StyledDivButton>
            <StyledButton lightBlueColor type="submit">
              MIX IT
            </StyledButton>
          </StyledDivButton>
        </form>
      </StyledFilterOption>
      <StyledDivButton>
        <StyledButton pinkColor onClick={getRandom}>
          RANDOM
        </StyledButton>
      </StyledDivButton>
      <br />
      <br />
    </StyledBackground>
  );
}

const StyledDivButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const StyledBackground = styled.div`
  background-color: #cfdfea;
  padding-top: 2rem;
`;

export default Cocktail;
