import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { StyledSection } from "../components/styled/Section.styled";
import { StyledFilterCard } from "../components/styled/FilterCard.styled";
import { StyledFilterOption } from "../components/styled/FilterOption.styled";
import { StyledButton } from "../components/styled/Button.styled";
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
  };

  return (
    <div>
      <StyledSection orangeColor>
        <StyledFilterCard>
          <div>
            {cocktail && (
              <div>
                <h5>{cocktail.strDrink}</h5>
                <img src={cocktail.strDrinkThumb} alt="drink" />
                <ul>
                  <li>CATEGORY: {cocktail.strCategory}</li>
                  <li>GLASS: {cocktail.strGlass}</li>
                  <li>INSTRUCTIONS: {cocktail.strInstructions}</li>
                  <li>INGREDIENTS: {cocktail.strIngredient}</li>
                </ul>
              </div>
            )}
            <StyledButton pinkColor onClick={getRandom}>
              RANDOM
            </StyledButton>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <StyledFilters>
                <StyledFilterOption greenColor>
                  <h5>FILTER BY ALCOHOL</h5>
                  <div>
                    <div>
                      <input type="checkbox" name="ingredients" value="Gin" />
                      <label> GIN </label>
                      <input type="checkbox" name="ingredients" value="Rum" />
                      <label> RUM </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Tequila"
                      />
                      <label> TEQUILA </label>
                      <input type="checkbox" name="ingredients" value="Vodka" />
                      <label> VODKA </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Whisky"
                      />
                      <label> WHISKY </label>
                      <input type="checkbox" name="ingredients" value="Beer" />
                      <label> BEER </label>
                    </div>
                  </div>
                </StyledFilterOption>
                <StyledFilterOption pinkColor>
                  <h5>FILTER BY LIQUEUR</h5>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Amaretto"
                      />
                      <label> AMARETTO </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Baileys irish cream"
                      />
                      <label> BAILEYS IRISH CREAM </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Kahlua"
                      />
                      <label> KAHLUA </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Maraschino cherry"
                      />
                      <label> MARASCHINO CHERRY </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Triple sec"
                      />
                      <label> TRIPLE SEC </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Dry Vermouth"
                      />
                      <label> VERMOUTH </label>
                    </div>
                  </div>
                </StyledFilterOption>
              </StyledFilters>
              <br />
              <StyledFilters>
                <StyledFilterOption orangeColor>
                  <h5>FILTER BY INGREDIENTS</h5>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Lemon peel"
                      />
                      <label> LEMON PEEL </label>
                      <input type="checkbox" name="ingredients" value="Mint" />
                      <label> MINT </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Egg White"
                      />
                      <label> EGG WHITE </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Sugar syrup"
                      />
                      <label> SUGAR SYRUP </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Chocolate"
                      />
                      <label> CHOCOLATE </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Orange Peel"
                      />
                      <label> ORANGE PEEL </label>
                    </div>
                  </div>
                </StyledFilterOption>

                <StyledFilterOption blueColor>
                  <h5>FILTER BY OTHERS</h5>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Lemon Juice"
                      />
                      <label> LEMON JUICE </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Orange Juice"
                      />
                      <label> ORANGE JUICE </label>
                    </div>
                    <div>
                      <input type="checkbox" name="ingredients" value="Milk" />
                      <label> MILK </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Grenadine"
                      />
                      <label> GRENADINE </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Coffee"
                      />
                      <label> COFFEE </label>
                      <input
                        type="checkbox"
                        name="ingredients"
                        value="Pineapple juice"
                      />
                      <label> PINEAPPLE JUICE </label>
                    </div>
                  </div>
                </StyledFilterOption>
              </StyledFilters>
            </div>

            <StyledButton redColor type="submit">
              Choose
            </StyledButton>
          </form>
        </StyledFilterCard>
      </StyledSection>
    </div>
  );
}

const StyledFilters = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default Cocktail;
