import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const RightPanel = () => {
    const weeklyStreak = [true, true, false, true, false, true, false];
    const [todayXP, setTodayXP] = useState(0);
    const [progress, setProgress] = useState(0);
    const [streak, setStreak] = useState(0);

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
            setStreak(json.streak);
            setTodayXP(json.todayXP);
            setProgress((json.todayXP/10)*100);
    
        }
    
        fetchData();
    
    }, []);
  return (
    <aside className="right-panel">
        {/* <div className="leaderboard-info">
          <h3>Unlock Leaderboards!</h3>
          <p>Complete 10 more lessons to start competing</p>
        </div> */}
        <div className="daily-quests">
          <h3>Today's XP</h3>
          <p>Progess: {progress}%</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: progress }}></div>
          </div>
        </div>
        <div className="profile-info">
          <p>Create a profile to save your progress!</p>
          <Link to='/signup'><button className="create-profile-button">CREATE A PROFILE</button></Link>
          <Link to='/signin'><button className="sign-in-button">SIGN IN</button></Link>
        </div>
      </aside>
  );
};

export default RightPanel;
