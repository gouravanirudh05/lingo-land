import React, { useState, useEffect } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import openImage from '../assets/open.png';
import closedImage from '../assets/closed.png';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const fullText = 'WWelcome Back!';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    if (json.token) {
      localStorage.setItem("jwtToken", json.token);
      navigate('/');
    } else if (json.error) {
      alert("Error: " + json.error);
    } else if (json.message) {
      alert("Message: " + json.message);
    }
  };

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText((prevText) => prevText + fullText.charAt(index));
      index += 1;

      if (index === fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="signin-page">
      <div className="app-container">
        {/* Left content with typing text */}
        <div className="left-content">
          <h2>{text}{showCursor && <span className="cursor">|</span>}</h2>
          <p>Continue your language learning journey.</p>
        </div>

        {/* Centered container with login form */}
        <div className="centered-container">
          <div className="login-container">
            {/* Conditional rendering for the images */}
            <img
              src={isTypingPassword ? closedImage : openImage}
              alt="Login Visual"
              className="login-image"
            />
            <h1 className="login-title">Sign In</h1>
            <div className="login-form">
              <label className="login-label">Email</label>
              <input
                type="email"
                className="login-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <label className="login-label">Password</label>
              <input
                type="password"
                className="login-input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                onFocus={() => setIsTypingPassword(true)}
                onBlur={() => setIsTypingPassword(false)}
              />

              <button className="sign-in-button" onClick={handleSubmit}>SIGN IN</button>
              <p className="forgot-password-link">Forgot Password?</p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="right-content">
          <h2>New Here?</h2>
          <p>Join us today to start learning new languages!</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
