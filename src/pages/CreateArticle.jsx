import React from "react";
import Creations from "./Creations";

function CreateArticle() {
  return (
    <div>
      <h3>CREATE ARTICLE</h3>
      <form onSubmit={<Creations />}>
        <label> TITLE </label>
        <input type="text" />
        <label> DESCRIPTION </label>
        <input type="text" />
        {/* <img src="" alt="" /> */}
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default CreateArticle;
