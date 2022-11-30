import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { StyledSection } from "../components/styled/Section.styled";

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
      <StyledSection barbiePinkColor>
        <form onSubmit={handleSignupSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleName} />

          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />

          <button type="submit">Sign Up</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Already have account?</p>
        <Link to={"/auth/login"}>LOGIN</Link>
      </StyledSection>
    </div>
  );
}

export default Signup;
