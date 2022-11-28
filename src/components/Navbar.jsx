import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import styled from "styled-components";

function Navbar() {
  const { loggedIn, logout } = useContext(AuthContext);
  return (
    <div>
    <StyledNavBar>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/api/generated-cocktail">COCKTAIL</Link>
        <Link to="/article/all-articles">ARTICLES</Link>

        {loggedIn && (
          <>
            <Link to="/user/favorites">FAVORITES</Link>
            <Link to="/user/edit-profile">PROFILE </Link>
            <Link to="/user/creations">CREATIONS</Link>
            <Link to="/" onClick={logout}>LOG OUT</Link>
          </>
        )}

        {!loggedIn && (
          <>
            <Link to="/auth/login">LOGIN</Link>
            <Link to="/auth/signup">SIGN UP</Link>
          </>
        )}
      </nav>
      </StyledNavBar>
    </div>
  );
}

const StyledNavBar = styled.nav`
  height: 9vh;
  background-color: #863A6F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

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
export default Navbar;
