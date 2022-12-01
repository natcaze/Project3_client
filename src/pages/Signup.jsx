import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { StyledProfile } from "../components/styled/Card.styled";
import { StyledButton } from "../components/styled/Button.styled";
import styled from "styled-components";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        name,
        email,
        password,
      });
      navigate("/api/generated-cocktail");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <StyledBackground>
      <div>
        <StyledProfile lightBlueColor>
          <form onSubmit={handleSignupSubmit}>
            <div>
              <label>NAME</label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />
            </div>
            <div>
              <label>EMAIL</label> <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div>
              <label>PASSWORD</label> <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <br />
            <StyledButton blueColor type="submit">
              SIGN UP
            </StyledButton>
            <br />
            <br />
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>ALREADY HAVE AN ACCOUNT?</p>

          <Link to={"/auth/login"}>LOGIN</Link>
        </StyledProfile>
        <br />
      </div>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  background-color: #ecc5fb;
  text-align: center;
  display: grid;
`;

export default Signup;
