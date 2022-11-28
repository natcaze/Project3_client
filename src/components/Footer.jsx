import React from 'react'
import {Link} from 'react-router-dom';
import styled from "styled-components";

function Footer() {
  return (
    <div>
    <StyledFooter>
        <p>Created by Gabriela Meirelles and Nathalie Cazemajou</p>
        <Link to='/contact-us'>Contact Us </Link>
    </StyledFooter>
    </div>
  )
}

const StyledFooter = styled.footer`
height: 6vh;
background-color: #676FA3;
display: flex;
align-items: center;

p{
  color: white;
  margin-left: 1vh;
}

a {
    text-decoration: none;
    color: white;
    margin-left: 10px;
  }
  a:hover,
  .active {
    color: black;
  }
`;

export default Footer