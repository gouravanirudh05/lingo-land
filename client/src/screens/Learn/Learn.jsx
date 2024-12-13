import React, { useState, useEffect } from 'react';
import './Learn.css';
import Chapter from '../../components/Chapter';
import Sidebar from '../../components/Sidebar';
import RightPanel from '../../components/RightPanel';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';


const Learn = () => {

  const [chapters, setChapters] = useState([]);
  const [currentXP, setCurrentXP] = useState(0);
  const [activeComponent, setActiveComponent] = useState('learn');
  const [loggedIn, setLoggedIn] = useState(false);

  const getJwt = () => {
    return localStorage.getItem('jwtToken');
  };

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(`${BACKEND_URL}/api/chapter/chapters`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${getJwt()}`,
                    'Content-Type': 'application/json'
                },
            });

            if (response.status === 401) {
                // User is not logged in, handle the unauthorized status
                setLoggedIn(false);
                console.error("User not authenticated");
                return;
            }

            const json = await response.json();
            setChapters(json.chapters);
            if (json.loggedIn) {
                setCurrentXP(json.currentXP);
            }

            setLoggedIn(json.loggedIn);

        } catch (error) {
            console.error("Error fetching chapters:", error);
        }
    }

    fetchData();
    setActiveComponent("learn");
}, []);


  return (
    <div className="app-container">
      <Sidebar activeComponent="learn" />

      <main className="main-content">
        <h2 className="learn-title">Learn</h2>
        <div className="chapter-container">
          {chapters.map((chapter, index) => (
            <Chapter
              key={index}
              indexChap={index}
              title={chapter.title}
              lessons={chapter.lessons}
              requiredXP={chapter.requiredXP}
              currentXP={currentXP}
              loggedIn={loggedIn}
            />
          ))}
        </div>
      </main>

      <RightPanel />
    </div>
  );
};

export default Learn;
