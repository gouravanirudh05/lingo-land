import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Signup = () => {
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic with username and password
    const response = await fetch(`${BACKEND_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          username: username,
          age: age,
          email: email,
          password: password
        })
      });

      const json = await response.json();
      alert(json.message);
      navigate('/signin');
  };
  return (
    <div className="profile-container">
      <h1 className="profile-title">Create your profile</h1>
      <div className="profile-form">
        <label className="profile-label">Age</label>
        <input type="number" className="profile-input" placeholder="Age" onChange={ e => setAge(e.target.value)} value={age}/>

        <label className="profile-label">Username</label>
        <input type="text" className="profile-input" placeholder="Username" onChange={ e => setUsername(e.target.value)} value={username}/>

        <label className="profile-label">Email</label>
        <input type="email" className="profile-input" placeholder="Email" onChange={ e => setEmail(e.target.value)} value={email}/>

        <label className="profile-label">Password</label>
        <input type="password" className="profile-input" placeholder="Password" onChange={ e => setPassword(e.target.value)} value={password}/>

        <button className="create-account-button" onClick={handleSubmit}>CREATE ACCOUNT</button>
      </div>
    </div>
  );
};

export default Signup;
