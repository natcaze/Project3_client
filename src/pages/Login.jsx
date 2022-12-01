import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

import { StyledProfile } from "../components/styled/Card.styled";
import { StyledButton } from "../components/styled/Button.styled";
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
    <StyledBackground>
      <div>
        <StyledProfile lightBlueColor>
          <form onSubmit={handleLoginSubmit}>
            <label>EMAIL</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />

            <label>PASSWORD</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <br />
            <br />
            <StyledButton greenColor type="submit">
              LOGIN
            </StyledButton>
            <br />
            <br />
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>DON'T HAVE AN ACCOUNT YET?</p>
          <Link to={"/auth/signup"}>SIGN UP</Link>
        </StyledProfile>
        <br />
        <br />
      </div>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  background-color: #ff87ca;
  text-align: center;
  display: grid;
`;

export default Login;
