import React from "react";
import { StyledSection } from "../components/styled/Section.styled";

function ContactUs() {
  return (
    <div>
      <StyledSection yellowColor>
        <div className="Gabriela">
          {/* <img></img> */}
          <h3>Gabriela Meirelles</h3>
          <a
            href="https://www.linkedin.com/in/gabriela-meirelles-martins/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gabimeirellesm"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <h5>Email: gb.meirellesmartins@gmail.com</h5>
        </div>
        <div className="Nathalie">
          {/* <img></img> */}
          <a
            href="https://www.linkedin.com/in/nathalie-cazemajou/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/natcaze" target="_blank" rel="noreferrer">
            Github
          </a>
          <h5>Email: nat.caze@gmail.com</h5>
        </div>
      </StyledSection>
    </div>
  );
}

export default ContactUs;
