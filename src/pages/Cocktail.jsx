import React from "react";

function Cocktail() {
  return (
    <div>
      <div>
        <h4>Cocktail Name</h4>
        {/* <img src="" alt="" /> */}
        <form>
          <button type="submit">Random</button>
        </form>
      </div>
      <div>
        <div>
          <h5>FILTER BY TYPE</h5>
          <div>
            <div>
              <input type="checkbox" />
              <label> Rum </label>
              <input type="checkbox" />
              <label> Vodka </label>
              <input type="checkbox" />
              <label> Gin </label>
            </div>
            <div>
              <input type="checkbox" />
              <label> Tequila </label>
              <input type="checkbox" />
              <label> Liqueur </label>
              <input type="checkbox" />
              <label> Others </label>
            </div>
          </div>
        </div>

        <div>
          <h5>FILTER BY ALCOHOL</h5>
          <div>
            <div>
              <input type="checkbox" />
              <label> Rum </label>
              <input type="checkbox" />
              <label> Vodka </label>
              <input type="checkbox" />
              <label> Gin </label>
            </div>
            <div>
              <input type="checkbox" />
              <label> Tequila </label>
              <input type="checkbox" />
              <label> Liqueur </label>
              <input type="checkbox" />
              <label> Others </label>
            </div>
          </div>
        </div>

        <div>
          <h5>FILTER BY INGREDIENTS</h5>
          <div>
            <div>
              <input type="checkbox" />
              <label> Rum </label>
              <input type="checkbox" />
              <label> Vodka </label>
              <input type="checkbox" />
              <label> Gin </label>
            </div>
            <div>
              <input type="checkbox" />
              <label> Tequila </label>
              <input type="checkbox" />
              <label> Liqueur </label>
              <input type="checkbox" />
              <label> Others </label>
            </div>
          </div>
        </div>
      </div>

      <form>
        <button type="submit">Choose another</button>
      </form>
    </div>
  );
}

export default Cocktail;
