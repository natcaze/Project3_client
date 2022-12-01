import React from "react";
import Cocktail from "./Cocktail";
import Articles from "./Articles";
import { StyledButton } from "../components/styled/Button.styled";
import styled from "styled-components";
import drink from "../assets/drink.png";
import { StyledSection } from "../components/styled/Section.styled";

function HomePage() {
  return (
    <div>
      <div>
        <StyledImg src={drink} alt="" />
      </div>
      <br />
      <StyledButtons>
        <StyledButton pinkColor onClick={<Cocktail />}>
          <p>CHOOSE A DRINK</p>
        </StyledButton>

        <StyledButton orangeColor onClick={<Articles />}>
          <p>READ MORE</p>
        </StyledButton>
      </StyledButtons>
      <StyledBackground>
        <div>
          <span>
            TELL US WHAT INGREDIENTS YOU HAVE IN YOUR FRIDGE OR LIKE THE MOST
            AND WE WILL TELL YOU WHAT YOU CAN TRY
          </span>
        </div>
      </StyledBackground>
    </div>
  );
}

const StyledBackground = styled.div`
  height: 30vh;
  width: 100vw;
  background-color: #b93b3b;
 
  text-align: center;

  span {
    text-indent: 50px;
    text-align: justify;
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
    font-size: 1.5rem;
  }
`;

const StyledImg = styled.img`
  width: 100vw;
  height: 60vh;
  object-fit: cover;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default HomePage;
