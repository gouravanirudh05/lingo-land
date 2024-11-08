import React from 'react';
import './App.css';

const App = () => {
  return (
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
  );
};
export default App;
