import React from 'react'
import Cocktail from './Cocktail'
import {StyledButton} from '../components/styled/Button.styled'
import styled from "styled-components";
import home from "../assets/home.png";

function HomePage() {
  return (
    <div>
      <StyledBackground>
        <span>TELL US WHAT INGREDIENTS YOU HAVE IN YOUR FRIDGE OR LIKE THE MOST AND WILL TELL YOU WHAT DO YOU WILL TRY</span>
        <div>
        <StyledButton onClick={<Cocktail/>}><p>CHOOSE A DRINK</p></StyledButton>
        <StyledButton primary onClick={<Cocktail/>}><p>RANDOM DRINK</p></StyledButton>
        </div>
      </StyledBackground>
      <div>
        <img src={home} alt="" />
      </div>
    </div>
  )
}

const StyledBackground = styled.div`
height: 70vh;
width: 30vw;
background-color: #F49D1A;
padding-top: 2rem;
text-align: center;

span{
  color:white;
  font-size: 1.5rem;
}

div{
  display: grid;
  justify-content: center;
  margin-top: 2rem;
}

`;


export default HomePage