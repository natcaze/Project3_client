import React from 'react'
 import { Link } from 'react-router-dom' 
 import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar() {
    const { loggedIn, logout } = useContext(AuthContext);
  return (
    <div>
    <nav>
    <Link to="/">
        HOME
    </Link>
    <Link to="/pages/cocktail">
        COCKTAIL
    </Link>
    <Link to="/pages/articles">
        ARTICLES
    </Link>

    {loggedIn && (
        <>
            <Link to="/pages/favorites">FAVORITES</Link>
            <Link to="/pages/edit-profile">PROFILE </Link>
            <Link to="/pages/creations">CREATIONS</Link>
            <Link to="/" onClick={logout}>LOG OUT</Link>
        </>
      )}

      {!loggedIn && (
        <>
            <Link to="/pages/login">LOGIN</Link>
            <Link to="/pages/signup">SIGN UP</Link>
        </>
      )}
    
    </nav>
    </div>
  )
}

export default Navbar