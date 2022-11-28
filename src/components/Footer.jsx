import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
        <p>Created by Gabriela Meirelles and Nathalie Cazemajou</p>
        <Link to='/contact-us'>Contact Us </Link>
    </div>
  )
}

export default Footer