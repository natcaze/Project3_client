import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

//Create the context
const AuthContext = createContext();

//Create the wrapper
function AuthProviderWrapper(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        //The next part happens if the login was succesfful
        setLoggedIn(true);
        setUser(response.data);
        setLoading(false);
      } else {
        setLoggedIn(false);
        setUser(null);
        setLoading(false);
      }
    } catch (error) {
      //if there's a problem with auth, we don't want a logged in user
      setLoggedIn(false);
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const logout = () => {
    //first, we remove the token from the local storage
    localStorage.removeItem('authToken');
    //we run authenticate again to reset the states
    authenticateUser();
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, loading, storeToken, authenticateUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };