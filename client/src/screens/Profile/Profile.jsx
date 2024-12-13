import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import RightPanel from '../../components/RightPanel';
import './Profile.css';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [level, setLevel] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [streak, setStreak] = useState(0);
  const achievements = 10;
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=Ryan`;

  const getJwt = () => {
    return localStorage.getItem('jwtToken');
  };

  useEffect(() => {
    // Fetch the question and options from the backend
    async function fetchData()
    {
        const response = await fetch(`${BACKEND_URL}/api/users/profile`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${getJwt()}`,
                'Content-Type': 'application/json'
                },
        });

        const json = await response.json();
        setUsername(json.username);
        setTotalXP(json.totalXP);
        setStreak(json.streak);
        setLevel(json.level);

    }

    fetchData();

}, []);

  return (
    <div className="app-container">
      <Sidebar activeComponent="profile" />

      <main className="main-content">
        <div className="profile-container">
          <h2 className="profile-title">Your Profile</h2>
          <div className="profile-card">
            <img src={avatarUrl} alt="User Avatar" className="profile-avatar" />
            <p>Username: <strong>{username}</strong></p>
            <p>Level: {level}</p>
            <p>Total XP: {totalXP}</p>
            <p>Streak: {streak}</p>
          </div>
          <button className="edit-button">Edit Profile</button>
          <button className="view-progress-button">View Progress</button>
        </div>
      </main>

      <RightPanel />
    </div>
  );
};

export default Profile;
