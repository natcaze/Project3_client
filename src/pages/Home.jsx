import React from 'react'
import Cocktail from './Cocktail'
import {StyledButton} from '../components/styled/Button.styled'
import styled from "styled-components";
import home from "../assets/home.png";
import {StyledPosition} from '../components/styled/Position.styled'

function HomePage() {
  return (
    <StyledPosition>
      <StyledBackground>
        <span>TELL US WHAT INGREDIENTS YOU HAVE IN YOUR FRIDGE OR LIKE THE MOST AND WILL TELL YOU WHAT DO YOU WILL TRY</span>
        <div>
        <StyledButton onClick={<Cocktail/>}><p>CHOOSE A DRINK</p></StyledButton>
        <StyledButton primary onClick={<Cocktail/>}><p>RANDOM DRINK</p></StyledButton>
        </div>
      </StyledBackground>
      <div>
        <img className="imgHome" src={home} alt="" />
      </div>
    </StyledPosition>
  )
}

const StyledBackground = styled.div`
height: 80vh;
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