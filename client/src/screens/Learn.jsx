import React, { useState, useEffect } from 'react';
import './Learn.css';
import Chapter from '../components/Chapter';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';


const Learn = () => {

  const [chapters, setChapters] = useState([]);
  const [currentXP, setCurrentXP] = useState(0);

  const getJwt = () => {
    return localStorage.getItem('jwtToken');
  };

  useEffect(() => {
    // Fetch the question and options from the backend
    async function fetchData()
    {
        const response = await fetch(`${BACKEND_URL}/api/chapter/chapters`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${getJwt()}`,
                'Content-Type': 'application/json'
                },
        });

        const json = await response.json();
        setChapters(json.chapters);
        setCurrentXP(json.currentXP);

    }

    fetchData();

}, []);

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">Duolingo</h2>
        <nav className="menu">
          <a href="#learn" className="menu-item active">🏠 Learn</a>
          <a href="#letters" className="menu-item">क Letters</a>
          <a href="#leaderboards" className="menu-item">🛡 Leaderboards</a>
          <a href="#quests" className="menu-item">📘 Quests</a>
          <a href="#profile" className="menu-item">👤 Profile</a>
        </nav>
      </aside>

      <main className="main-content">
        <h2 className="learn-title">Learn</h2>
        <div className="chapter-container">
          {chapters.map((chapter, index) => (
            <Chapter
              key={index}
              title={chapter.title}
              lessons={chapter.lessons}
              requiredXP={chapter.requiredXP}
              currentXP={currentXP}
            />
          ))}
        </div>
      </main>

      <aside className="right-panel">
        <div className="leaderboard-info">
          <h3>Unlock Leaderboards!</h3>
          <p>Complete 10 more lessons to start competing</p>
        </div>
        <div className="daily-quests">
          <h3>Daily Quests</h3>
          <p>Earn 10 XP</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '50%' }}></div></div>
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

export default Learn;
