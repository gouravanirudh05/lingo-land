import React, { useState } from 'react';
import './App.css';

// Leaderboard component
const Leaderboard = ({ users, currentUser }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul className="leaderboard-list">
        {users.map((user, index) => (
          <li key={index} className={`leaderboard-item ${user.name === currentUser.name ? 'current-user' : ''}`}>
            <span className="rank">{index + 1}</span>
            <span className="user-name">{user.name}</span>
            <span className="user-xp">{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// App component
const App = () => {
  const currentUser = { name: 'John Doe', xp: 1200 };

  const users = [
    { name: 'Alice', xp: 1800 },
    { name: 'Bob', xp: 1500 },
    { name: 'Charlie', xp: 2000 },
    { name: 'John Doe', xp: 1200 }, // This is the current user
    { name: 'David', xp: 1100 },
    { name: 'Emma', xp: 900 },
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">Duolingo</h2>
        <nav className="menu">
          <a href="#learn" className="menu-item">🏠 Learn</a>
          <a href="#leaderboard" className="menu-item active">🛡 Leaderboards</a>
          <a href="#quests" className="menu-item">📘 Quests</a>
          <a href="#profile" className="menu-item">👤 Profile</a>
        </nav>
      </aside>

      <main className="main-content">
        <Leaderboard users={users} currentUser={currentUser} />
      </main>

      <aside className="right-panel">
        <div className="daily-quests">
          <h3>Daily Quests</h3>
          <p>Earn 10 XP</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="profile-info">
          <p>Create a profile to save your progress!</p>
          <button className="create-profile-button">CREATE A PROFILE</button>
          <button className="sign-in-button">SIGN IN</button>
        </div>
      </aside>
    </div>
  );
};

export default App;
