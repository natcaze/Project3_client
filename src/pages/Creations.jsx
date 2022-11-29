import React from "react";

function Creations() {
  return (
    <div>
      <h3>MY CREATTIONS</h3>
      <form action="/user/create-cocktail">
        <button type="submit">ADD COCKTAIL</button>
      </form>
      <form action="/user/create-article">
        <button type="submit">ADD ARTICLE</button>
      </form>
    </div>
  );
}

export default Creations;
