import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <StyledFooter>
        <Link to="/contact-us">CONTACT US</Link>
      </StyledFooter>
    </div>
  );
}

const StyledFooter = styled.footer`
  height: 7vh;
  background-color: #37b5ff;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;

  a {
    text-decoration: none;
    color: white;
    margin-left: 10px;
    font-size: 0.8rem;
  }
  a:hover,
  .active {
    color: #ea047e;
  }
`;

export default Footer;
