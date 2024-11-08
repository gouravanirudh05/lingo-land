import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">duolingo</h2>
        <nav className="menu">
          <a href="#learn" className="menu-item active">🏠 Learn</a>
          <a href="#letters" className="menu-item">क Letters</a>
          <a href="#leaderboards" className="menu-item">🛡 Leaderboards</a>
          <a href="#quests" className="menu-item">📘 Quests</a>
          <a href="#shop" className="menu-item">🛍 Shop</a>
          <a href="#profile" className="menu-item">👤 Profile</a>
          <a href="#more" className="menu-item">⋯ More</a>
        </nav>
      </aside>
      
      <main className="main-content">
        <section className="lesson-info">
          <div className="lesson-header">SECTION 1, UNIT 1</div>
          <div className="lesson-title">Pair letters and sounds</div>
          <button className="start-button">START</button>
          <span className="owl-icon">🦉</span>
        </section>
      </main>

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
