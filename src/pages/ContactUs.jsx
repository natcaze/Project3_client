import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <div className="Gabriela">
        {/* <img></img> */}
        <h3>Gabriela Meirelles</h3>
        <a href="https://www.linkedin.com/in/gabriela-meirelles-martins/">
          LinkedIn
        </a>
        <a href="https://github.com/gabimeirellesm">Github</a>
        <h5>Email: gb.meirellesmartins@gmail.com</h5>
      </div>
      <div className="Nathalie">
        {/* <img></img> */}
        <a href="https://www.linkedin.com/in/nathalie-cazemajou/">LinkedIn</a>
        <a href="https://github.com/natcaze">Github</a>
        <h5>Email: nat.caze@gmail.com</h5>
      </div>
    </div>
  );
}

export default ContactUs;
