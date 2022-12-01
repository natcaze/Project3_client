import React from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link } from "react-router-dom";
import { StyledTitles } from "../components/styled/Titles.styled";
import { StyledProfile } from "../components/styled/Card.styled";
import styled from "styled-components";

function Creations() {
  const [creations, setCreations] = useState([]);
  const [creationsArticle, setCreationsArticle] = useState([]);

  const { user } = useContext(AuthContext);

  const getCocktailCreated = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/creations/${user._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setCreations(response.data.createdCocktails);

      console.log(response.data.createdCocktails);
    } catch (error) {
      console.log(error);
    }
  };

  const getArticleCreated = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/creations/${user._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      setCreationsArticle(response.data.createdArticles);
      console.log(response.data.createdArticles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCocktailCreated();
    getArticleCreated();
  }, [user]);

  return (
    <StyledBackground>
      <div>
        <StyledTitles orangeColor>
          <h5>MY CREATIONS</h5>
        </StyledTitles>
        <div>
          <Link to={`/user/create-cocktail`}>ADD COCKTAIL</Link>
        </div>
        <div>
          <Link to={`/article/create-article`}>ADD ARTICLE</Link>
        </div>

        <StyledProfile greenColor>
          {creations &&
            creations.map((creation) => {
              return (
                <div key={creation._id}>
                  <img src={creation.strDrinkThumb} alt="default" />
                  <hr />
                  <p>{creation.strDrink}</p>
                  <hr />
                  <Link to={`/user/edit-cocktail/${creation._id}`}>EDIT</Link>
                </div>
              );
            })}
        </StyledProfile>
        <br />
        <StyledProfile yellowishColor>
          {creationsArticle &&
            creationsArticle.map((creationArticle) => {
              return (
                <div key={creationArticle._id}>
                  <img src={creationArticle.img} alt="default" />
                  <hr />
                  <p>{creationArticle.title}</p>
                  <hr />
                  <Link to={`/user/edit-article/${creationArticle._id}`}>
                    EDIT
                  </Link>
                </div>
              );
            })}
        </StyledProfile>
      </div>
      <br />
      <br />
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  background-color: #fce1e0;
  text-align: center;
  display: grid;
`;

export default Creations;
