import React, { useState, useEffect } from 'react';
import RightPanel from '../components/RightPanel';
import Sidebar from '../components/Sidebar';
import './Leaderboard.css';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

// Leaderboard component
const Leaderboard = ({ users, currentUser }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul className="leaderboard-list">
        {users.map((user, index) => (
          <li key={index} className={`leaderboard-item ${user.email === currentUser.email ? 'current-user' : ''}`}>
            <span className="rank">{index + 1}</span>
            <span className="user-name">{user.username}</span>
            <span className="user-xp">{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// App component
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  const getJwt = () => {
    return localStorage.getItem('jwtToken');
  };

  useEffect(() => {
    // Fetch the question and options from the backend
    async function fetchData()
    {
        const response = await fetch(`${BACKEND_URL}/api/users/leaderboard`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${getJwt()}`,
                'Content-Type': 'application/json'
                },
        });

        const json = await response.json();
        setCurrentUser(json.currentUser);
        setUsers(json.users);

    }

    fetchData();

}, []);

  return (
    <div className="app-container">
      <Sidebar activeComponent='leaderboard'/>

      <main className="main-content">
        <Leaderboard users={users} currentUser={currentUser} />
      </main>

      <RightPanel />
    </div>
  );
};

export default App;
