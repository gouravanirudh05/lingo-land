import React, {useState} from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic with username and password
    const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      const json = await response.json();
      if(json.token)
      {
        localStorage.setItem("jwtToken", json.token);
        navigate('/');
      }
      else if(json.error)
        alert("Error: " + json.error);
      else if(json.message)
        alert("Message: " + json.message);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Sign In</h1>
      <div className="login-form">
        <label className="login-label">Email</label>
        <input type="email" className="login-input" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>

        <label className="login-label">Password</label>
        <input type="password" className="login-input" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />

        <button className="sign-in-button" onClick={handleSubmit}>SIGN IN</button>
      </div>
    </div>
  );
};
export default Signin;
