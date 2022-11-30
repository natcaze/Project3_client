import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { StyledSection } from "../components/styled/Section.styled";
import { StyledOneCard } from "../components/styled/OneCard.styled";
import { StyledButton } from "../components/styled/Button.styled";
import carroselReto2 from "../assets/carroselReto2.png";
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
    <div>
      <StyledSection purpleColor>
        <StyledOneCard pinkColor>
          <div>
            <form onSubmit={handleSignupSubmit}>
              <label>NAME</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />
              <label>EMAIL</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />

              <label>PASSWORD</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
              <br />
              <StyledButton blueColor type="submit">
                SIGN UP
              </StyledButton>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>ALREADY HAVE AN ACCOUNT?</p>
            <Link to={"/auth/login"}>LOGIN</Link>
          </div>
        </StyledOneCard>
        <StyledImg src={carroselReto2} alt="courossel" />
      </StyledSection>
    </div>
  );
}
const StyledImg = styled.img`
  height: 84vh;
  width: 22vw;
`;
export default Signup;
