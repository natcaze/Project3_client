import React from "react";
import nat from "../assets/nat.png";
import gabi from "../assets/gabi.png";

import styled from "styled-components";
import { StyledTitles } from "../components/styled/Titles.styled";
import { StyledAboutUs } from "../components/styled/AboutUs.styled";

function ContactUs() {
  return (
    <StyledBackground>
      <div>
        <StyledAboutUs yellowishColor>
          <div>
            <img src={gabi} alt="Gabriela profile" />
            <StyledTitles orangeColor>
              <h5>GABRIELA MEIRLLES</h5>
            </StyledTitles>
            <a
              href="https://www.linkedin.com/in/gabriela-meirelles-martins/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <br />
            <a
              href="https://github.com/gabimeirellesm"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <br />
            <h5>Email: gb.meirellesmartins@gmail.com</h5>
          </div>
        </StyledAboutUs>
        <br />
        <br />
        <StyledAboutUs greenColor>
          <div>
            <img src={nat} alt="Nathalie profile" />
            <StyledTitles bronwColor>
              <h5>NATHALIE CAZEMAJOU</h5>
            </StyledTitles>
            <a
              href="https://www.linkedin.com/in/nathalie-cazemajou/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <br />
            <a
              href="https://github.com/natcaze"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <br />
            <h5>Email: nat.caze@gmail.com</h5>
          </div>
        </StyledAboutUs>
        <br />
        <br />
        <br />
      </div>
    </StyledBackground>
  );
}
const StyledBackground = styled.div`
  width: 100vw;
  background-color: #fce1e0;
  text-align: center;
  display: grid;
`;

export default ContactUs;
