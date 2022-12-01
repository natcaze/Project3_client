import React from "react";
import Cocktail from "./Cocktail";
import Articles from "./Articles";
import { StyledButton } from "../components/styled/Button.styled";
import styled from "styled-components";
import drink from "../assets/drink.png";

function HomePage() {
  return (
    <div>
      <div>
        <StyledImg src={drink} alt="" />
      </div>
      <br />
      <StyledBackground>
        <br />
        <div>
          <br />
          <span>
            <br />
            TELL US WHAT INGREDIENTS <br />
            YOU HAVE IN YOUR FRIDGE
            <br />
            OR THAT YOU LIKE AND WE
            <br /> WILL TELL YOU WHAT
            <br /> YOU CAN TRY
            <br />
          </span>
          <br />
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
        <br /> <br />
      </StyledBackground>
    </div>
  );
}

const StyledBackground = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: #b93b3b;
  text-align: center;
  display: grid;

  span {
    text-indent: 50px;
    text-align: justify;
    color: white;
    font-size: 1.2rem;
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
  background-color: #b93b3b;
`;

export default HomePage;
