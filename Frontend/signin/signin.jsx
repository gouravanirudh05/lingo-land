import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "WWelcome Back!";

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
    <div className="app-container">
      {/* Left content with typing text */}
      <div className="left-content">
        <h2>
          {text}
          {showCursor && <span className="cursor">|</span>}
        </h2>
        <p>Continue your language learning journey.</p>
      </div>

      {/* Centered container with login form */}
      <div className="centered-container">
        <div className="login-container">
          <h1 className="login-title">Sign In</h1>
          <div className="login-form">
            <label className="login-label">Email</label>
            <input type="email" className="login-input" placeholder="Email" />

            <label className="login-label">Password</label>
            <input type="password" className="login-input" placeholder="Password" />

            <button className="sign-in-button">SIGN IN</button>
            <p className="forgot-password-link">Forgot Password?</p>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="right-content">
        <h2>New Here?</h2>
        <p>Join us today to start learning new languages!</p>
      </div>
    </div>
  );
};

export default App;
