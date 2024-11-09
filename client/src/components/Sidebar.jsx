import React from 'react';
import { Link } from 'react-router-dom';
import openImage from '../assets/open.png';
import'./Sidebar.css';

const Sidebar = ({ activeComponent }) => {
  return (
    <aside className="sidebar">
        <img
              src={openImage}
              alt="Login Visual"
              className="sidebar-image"
            />
      <h2 className="logo">lingo-land</h2>
      <nav className="menu">
        <Link to='/learn' className={`menu-item ${activeComponent === 'learn' ? 'active' : ''}`}>
          🏠 Learn
        </Link>
        <Link to='/leaderboard' className={`menu-item ${activeComponent === 'leaderboard' ? 'active' : ''}`}>
          🛡 Leaderboard
        </Link>
        <Link to='/profile' className={`menu-item ${activeComponent === 'profile' ? 'active' : ''}`}>
          👤 Profile
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
