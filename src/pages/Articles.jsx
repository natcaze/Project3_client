import React from "react";
import crantini from "../assets/crantini.png";
import sazerac from "../assets/sazerac.png";

import styled from "styled-components";
import { StyledArticleCard } from "../components/styled/ArticleCard.styled";
import { StyledSectionArticle } from "../components/styled/SectionArticle.styled";

function ArticlesPage() {
  return (
    <div>
      <StyledSectionArticle>
        <br />
        <StyledArticleCard pinkishColor>
          <br />
          <h3>THE SAZERAC</h3>
          <div>
            <img src={sazerac} alt="Sazerac" />
          </div>
          <p>
            The first cocktail ever made? <br />
            <br /> Although opinions differ regarding what was the first
            cocktail ever made, there is no doubt that the Sazerac has made it
            into history being one of the first cocktails being recognized and a
            favorite until this day. <br />
            <br />
            This blend of whisky, absinthe, bitters and sugar surely made and
            impression.
          </p>
          <hr />
          <ul>
            <li>Absinthe, to rinse</li>
            <li>1 sugar cube</li>
            <li>1/2 teaspoon cold water</li>
            <li>3 dashes Peychauds bitters</li>
            <li>2 dashes Angostura bitters</li>
            <li>1 1/4 ounces rye whiskey</li>
            <li>1 1/4 ounces cognac</li>
            <li>Garnish: lemon peel</li>
          </ul>
          <br />
        </StyledArticleCard>
        <br />
        <StyledArticleCard purpleColor>
          <br />
          <h3>MEET THE CRANBERRY MARTINI</h3>
          <div>
            <img src={crantini} alt="Crantini" />
          </div>
          <p>
            New Year Eve is approaching and what better way to celebrate the end
            of the year than with a fun cocktail? <br />
            <br />
            Champagne is a classic but why not making your countdown more
            exciting with a fun cocktail with a twist? The Cranberry Martini or
            Crantini is smooth and fresh and may become your new favourite party
            drink. Even that friend of yours who doesn't like cocktails will
            enjoy this one. Let's get mixing!
          </p>
          <hr />
          <ul>
            <li>
              Vodka – choose your favourite brand. The better the quality the
              smoother your drink will be.
            </li>
            <li>Orange liqueur – Triple sec or Cointreau.</li>
            <li>
              Cranberry juice – Choose real cranberry juice for this recipe
              rather than cranberry cocktail for best flavour.
            </li>
            <li>
              Simple syrup – This is easy to make yourself with just sugar and
              water. You can use the leftover syrup after making sugared
              cranberries.
            </li>
            <li>Garnish – sugar, sugared cranberries, or orange slices</li>
            <li>Ice</li>
          </ul>
          <br />
        </StyledArticleCard>
        <br />
        <StyledArticleCard yellowishColor>
          <br />
          <h3>FOUR ESSENTIAL COCKTAIL GLASSES</h3>
          <div>
            <img src={sazerac} alt="Sazerac" />
          </div>
          <p>
            Creating the perfect drink is not all about the ingredients.
            Discovering the main types of cocktail glasses and when to use them
            is an important part. <br />
            <br /> If you can only chose one type go for the medium sized wine
            glass as it is often used to serve spritzers, sangria & wine cooler
            cocktails. If you are opting for a more aromatic cocktail our
            suggestion is to chose the Brandy glass as it warm slightly the
            content and allows you to enjoy the aroma. Shot glass are fine
            looking and useful for layers cocktails and if you are going with a
            more exotic option like a pina colada the hurricane glass is your
            best fit.
          </p>
          <br />
        </StyledArticleCard>
        <br />
      </StyledSectionArticle>
    </div>
  );
}

export default ArticlesPage;
