import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userId } = useParams();
  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const getProfile = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/edit-profile/${userId}`);
      setName(response.data.name);
      setEmail(response.data.email)
      setPassword(response.data.password);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/user/edit-profile/${userId}`, { name, email, password });

      setName('');
      setPassword('');

      navigate(`user/edit-profile/${userId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>EDIT PROFILE</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME:</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <label htmlFor="email">EMAIL:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label htmlFor="password">PASSWORD:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">EDIT PROFILE:</button>
      </form>
    </div>
  );
}

export default EditProfile;
