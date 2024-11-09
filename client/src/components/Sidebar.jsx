import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeComponent }) => {
  return (
    <aside className="sidebar">
      <h2 className="logo">duolingo</h2>
      <nav className="menu">
        <Link to='/learn' className={`menu-item ${activeComponent === 'learn' ? 'active' : ''}`}>
          🏠 Learn
        </Link>
        <Link to='/letters' className={`menu-item ${activeComponent === 'letters' ? 'active' : ''}`}>
          क Letters
        </Link>
        <Link to='/leaderboard' className={`menu-item ${activeComponent === 'leaderboard' ? 'active' : ''}`}>
          🛡 Leaderboards
        </Link>
        <Link to='/quests' className={`menu-item ${activeComponent === 'quests' ? 'active' : ''}`}>
          📘 Quests
        </Link>
        <Link to='/shop' className={`menu-item ${activeComponent === 'shop' ? 'active' : ''}`}>
          🛍 Shop
        </Link>
        <Link to='/profile' className={`menu-item ${activeComponent === 'profile' ? 'active' : ''}`}>
          👤 Profile
        </Link>
        <Link to='/more' className={`menu-item ${activeComponent === 'more' ? 'active' : ''}`}>
          ⋯ More
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
