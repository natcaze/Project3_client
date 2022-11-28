import React from 'react'
 import { Link } from 'react-router-dom' 

function Navbar() {
  return (
    <div>
    <Link to="/">
        Home
    </Link>
    <Link to="/pages/cocktail">
        Cocktail
    </Link>
    <Link to="/pages/articles">
        Articles
    </Link>
    <Link to="/pages/login">
        Login
    </Link>
    <Link to="/pages/signup">
        Sign Up
    </Link>
    </div>
  )
}

export default Navbar