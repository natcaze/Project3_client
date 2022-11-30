import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

import { StyledSection } from "../components/styled/Section.styled";
import { StyledOneCard } from "../components/styled/OneCard.styled";
/* import { StyledButton } from "../components/styled/Button.styled"; */
import carroselReto from "../assets/carroselReto.png";
import styled from "styled-components";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );

      storeToken(response.data.authToken);

      authenticateUser();

      navigate("/api/generated-cocktail");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div>
      <StyledSection yellowColor>
        <StyledOneCard orangeColor>
          <form onSubmit={handleLoginSubmit}>
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
            <button greenColor type="submit">
              LOGIN
            </button>
            <br />
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>DON'T HAVE AN ACCOUNT YET?</p>
          <Link to={"/auth/signup"}>SIGN UP</Link>
        </StyledOneCard>
        <StyledImg src={carroselReto} alt="courossel" />
      </StyledSection>
    </div>
  );
}

const StyledImg = styled.img`
  height: 84vh;
  width: 22vw;
`;

export default Login;
