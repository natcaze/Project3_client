import React from "react";
import Cocktail from "./Cocktail";
import Articles from "./Articles";
import { StyledButton } from "../components/styled/Button.styled";
import styled from "styled-components";
import home from "../assets/home.png";
import { StyledSection } from "../components/styled/Section.styled";

function HomePage() {
  return (
    <div>
      <StyledSection greenPastelColor>
        <StyledBackground>
          <div>
            <span>
              TELL US WHAT INGREDIENTS YOU HAVE IN YOUR FRIDGE OR LIKE THE MOST
              AND WILL TELL YOU WHAT DO YOU WILL TRY
            </span>
            <div>
              <StyledButton pinkColor onClick={<Cocktail />}>
                <p>CHOOSE A DRINK</p>
              </StyledButton>
              <StyledButton orangeColor onClick={<Articles />}>
                <p>READ MORE</p>
              </StyledButton>
            </div>
          </div>
        </StyledBackground>
        <div>
          <img className="imgHome" src={home} alt="" />
        </div>
      </StyledSection>
    </div>
  );
}

const StyledBackground = styled.div`
  height: 80.5vh;
  width: 30vw;
  background-color: #3aa579;
  padding-top: 2rem;
  text-align: center;

  span {
    color: white;
    font-size: 1.5rem;
    margin-left: 0;
  }

  div {
    display: grid;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export default HomePage;
