import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "WWelcome Back!";

  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      setText((prevText) => prevText + fullText.charAt(index)); // Append character by character
      index += 1;

      // Clear the interval and hide the cursor after full text is typed
      if (index === fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setShowCursor(false), 500); // Hide cursor after a short delay
      }
    }, 150); // Typing speed

    return () => clearInterval(typeInterval); // Cleanup interval on unmount
  }, []); // No dependencies needed here

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

      <div className="centered-container">
        <div className="login-container">
          <h1 className="login-title">Sign In</h1>
          <div className="login-form">
            <label className="login-label">Email</label>
            <input type="email" className="login-input" placeholder="Email" />

            <label className="login-label">Password</label>
            <input type="password" className="login-input" placeholder="Password" />

            <button className="sign-in-button">SIGN IN</button>
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
