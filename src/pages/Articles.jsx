import React from 'react'
import { StyledCard } from '../components/styled/Card.styled'
import {StyledPositionCard} from '../components/styled/PositionCard.styled'
import sazerac from "../assets/sazerac.png";
import crantini from "../assets/crantini.png";

function ArticlesPage() {
  return (
    <div>
    <StyledPositionCard>
    <StyledCard primary>
        <h3>The Sazerac</h3>
        <div>
        <img src={sazerac} alt="Sazerac" />
        </div>
        <p>The first cocktail ever made? Although opinions differ regarding what was the first cocktail ever made,
         there is no doubt that the Sazerac has made it into history being one of the first cocktails being recognized
          and a favorite until this day. This blend of whisky, absinthe, bitters and sugar surely made and impression.</p>
        <hr/>
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
      </StyledCard>
      <StyledCard>
        <h3>Cranberry Martini (Crantini)</h3>
        <div>
        <img src={crantini} alt="Crantini" />
        </div>
        <p>New Year Eve is approaching and what better way to celebrate the end of the year than with a fun cocktail?
        Champagne is a classic but why not making your countdown more exciting with a fun cocktail with a twist? The 
        Cranberry Martini or Crantini is smooth and fresh and may become your new favourite party drink. Even that 
        friend of yours who doesn’t like cocktails will enjoy this one. Let’s get mixing!Ingredients:</p>
        <hr/>
        <ul>
          <li>Vodka – choose your favourite brand. The better the quality the smoother your drink will be.</li>
          <li>Orange liqueur – Triple sec or Cointreau.</li>
          <li>Cranberry juice – Choose real cranberry juice for this recipe rather than cranberry cocktail for best flavour.</li>
          <li>Simple syrup – This is easy to make yourself with just sugar and water. You can use the leftover syrup after
           making sugared cranberries.</li>
          <li>Garnish – sugar, sugared cranberries, or orange slices</li>
          <li>Ice</li>
        </ul>
      </StyledCard>
      <StyledCard primary>
        <h3>The Sazerac</h3>
        <div>
        <img src={sazerac} alt="Sazerac" />
        </div>
        <p>The first cocktail ever made? Although opinions differ regarding what was the first cocktail ever made, there is no doubt that the Sazerac has made it into history being one of the first cocktails being recognized and a favorite until this day. This blend of whisky, absinthe, bitters and sugar surely made and impression.</p>
        <hr/>
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
        </StyledCard>
     </StyledPositionCard>
    </div>
    
  )
}

export default ArticlesPage