import React from "react";
import Cocktail from "./Cocktail";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledPositionHome } from "../components/styled/PositionHome.styled";
import styled from "styled-components";
import home from "../assets/home.png";
import { StyledSection } from "../components/styled/Section.styled";

function HomePage() {
  return (
    <div>
      <StyledSection greenPastelColor>
        <StyledPositionHome>
          <StyledBackground>
            <div>
              <span>
                TELL US WHAT INGREDIENTS YOU HAVE IN YOUR FRIDGE OR LIKE THE
                MOST AND WILL TELL YOU WHAT DO YOU WILL TRY
              </span>
              <div>
                <StyledButton onClick={<Cocktail />}>
                  <p>CHOOSE A DRINK</p>
                </StyledButton>
                <StyledButton primary onClick={<Cocktail />}>
                  <p>RANDOM DRINK</p>
                </StyledButton>
              </div>
            </div>
          </StyledBackground>
          <div>
            <img className="imgHome" src={home} alt="" />
          </div>
        </StyledPositionHome>
      </StyledSection>
    </div>
  );
}

const StyledBackground = styled.div`
  height: 81vh;
  width: 30vw;
  background-color: #f49d1a;
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
