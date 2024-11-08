import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Create your profile</h1>
      <div className="profile-form">
        <label className="profile-label">Age</label>
        <input type="number" className="profile-input" placeholder="Age" />

        <label className="profile-label">Name</label>
        <input type="text" className="profile-input" placeholder="Name" />

        <label className="profile-label">Email</label>
        <input type="email" className="profile-input" placeholder="Email" />

        <label className="profile-label">Password</label>
        <input type="password" className="profile-input" placeholder="Password" />

        <button className="create-account-button">Create Account</button>
      </div>
    </div>
  );
};

export default App;
