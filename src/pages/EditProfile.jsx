import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

import { StyledButton } from "../components/styled/Button.styled";
import { StyledSectionArticle } from "../components/styled/SectionArticle.styled";
import styled from "styled-components";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/profile/${user._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      setName(response.data.name);
      setEmail(response.data.email);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/user/edit-profile/${user._id}`,
        { name, email },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setName("");

      navigate(`/api/generated-cocktail`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledProfile>
      <StyledSectionArticle>
        <h5>EDIT PROFILE</h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">NAME:</label>
          <input type="text" name="name" value={name} onChange={handleName} />
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <br />

          <StyledButton purpleColor type="submit">
            SAVE
          </StyledButton>
        </form>
        <Link to={"/"}>DISCARD CHANGES</Link>
      </StyledSectionArticle>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  height: 84vh;
`;

export default EditProfile;
