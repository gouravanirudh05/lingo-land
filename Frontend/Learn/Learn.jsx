import React, { useState } from 'react';
import './App.css';

const Chapter = ({ title, lessons, requiredXP, currentXP }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(
    Array(lessons.length).fill(false)
  );

  
  const completedCount = completedLessons.filter(Boolean).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  
  const toggleLessonCompletion = (index) => {
    setCompletedLessons((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const isLocked = currentXP < requiredXP;

  return (
    <div className="chapter">
      <div className="chapter-header" onClick={() => !isLocked && setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        {isLocked ? (
          <span className="unlock-info">Unlock at {requiredXP} XP 🔒</span>
        ) : (
          <>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-percent">{progress}%</span>
            <button className="continue-button" disabled={isLocked}>
              Continue Chapter
            </button>
          </>
        )}
      </div>
      {isOpen && (
        <ul className="lesson-list">
          {lessons.map((lesson, index) => (
            <li key={index} className="lesson-item">
              <span>{lesson.title}</span>
              <button
                className="continue-button"
                onClick={() => toggleLessonCompletion(index)}
                disabled={isLocked}
              >
                {completedLessons[index] ? 'Completed' : 'Continue Lesson'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const currentXP = 1200; 

  const chapters = [
    { title: 'Chapter 1: Basics', lessons: [
        { title: 'Lesson 1', description: 'Basics of letters and sounds' },
        { title: 'Lesson 2', description: 'Common phrases' },
        { title: 'Lesson 3', description: 'Simple conversations' }
      ], requiredXP: 0 },
    { title: 'Chapter 2: Intermediate', lessons: [
        { title: 'Lesson 1', description: 'Grammar fundamentals' },
        { title: 'Lesson 2', description: 'Everyday vocabulary' },
        { title: 'Lesson 3', description: 'Numbers and counting' }
      ], requiredXP: 1000 },
    { title: 'Chapter 3: Advanced', lessons: [
        { title: 'Lesson 1', description: 'Advanced grammar' },
        { title: 'Lesson 2', description: 'Complex sentences' }
      ], requiredXP: 2000 },
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">Lingo Land</h2>
        <nav className="menu">
          <a href="#learn" className="menu-item active">🏠 Learn</a>
          <a href="#letters" className="menu-item">क Letters</a>
          <a href="#leaderboards" className="menu-item">🛡 Leaderboards</a>
          <a href="#quests" className="menu-item">📘 Quests</a>
          <a href="#profile" className="menu-item">👤 Profile</a>
        </nav>
      </aside>
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

export default App;
