import React from "react";
import { StyledSection } from "../components/styled/Section.styled";
import nat from "../assets/nat.png";
import gabi from "../assets/gabi.png";
import carroselReto2 from "../assets/carroselReto2.png";
import styled from "styled-components";

function ContactUs() {
  return (
    <div>
      <StyledSection yellowColor>
        <div>
          <StyledImg src={gabi} alt="Gabriela profile" />
          <h3>Gabriela Meirelles</h3>
          <a
            href="https://www.linkedin.com/in/gabriela-meirelles-martins/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/gabimeirellesm"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <h5>Email: gb.meirellesmartins@gmail.com</h5>
        </div>
        <div>
          <StyledImg src={nat} alt="Nathalie profile" />
          <h3>Nathalie Cazemajou</h3>
          <a
            href="https://www.linkedin.com/in/nathalie-cazemajou/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/natcaze" target="_blank" rel="noreferrer">
            Github
          </a>
          <h5>Email: nat.caze@gmail.com</h5>
        </div>
        <div>
          <StyledIamge src={carroselReto2} alt="Carrosel de drinks" />
        </div>
      </StyledSection>
    </div>
  );
}

const StyledImg = styled.img`
  height: 30vh;
  width: 15vw;
  border-radius: 120px;
  margin-top: 3rem;
`;

const StyledIamge = styled.img`
  height: 84vh;
  width: 22vw;
`;

export default ContactUs;
