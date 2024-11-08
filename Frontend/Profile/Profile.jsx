import React from 'react';
import './App.css';

const App = () => {
  const username = "JohnDoe";
  const level = 5;
  const totalXP = 1500;
  const achievements = 10;
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=Ryan`;

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">duolingo</h2>
        <nav className="menu">
          <a href="#learn" className="menu-item active">🏠 Learn</a>
          <a href="#letters" className="menu-item">क Letters</a>
          <a href="#leaderboards" className="menu-item">🛡 Leaderboards</a>
          <a href="#quests" className="menu-item">📘 Quests</a>
          <a href="#profile" className="menu-item">👤 Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="profile-container">
          <h2 className="profile-title">Your Profile</h2>
          <div className="profile-card">
            <img src={avatarUrl} alt="User Avatar" className="profile-avatar" />
            <p>Username: <strong>{username}</strong></p>
            <p>Level: {level}</p>
            <p>Total XP: {totalXP}</p>
            <p>Achievements: {achievements}</p>
          </div>
          <button className="edit-button">Edit Profile</button>
          <button className="view-progress-button">View Progress</button>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <div className="leaderboard-info">
          <h3>Unlock Leaderboards!</h3>
          <p>Complete 10 more lessons to start competing</p>
        </div>
        <div className="daily-quests">
          <h3>Daily Quests</h3>
          <p>Earn 10 XP</p>
          <div className="progress-bar"><div className="progress-fill" style={{width: '50%'}}></div></div>
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
