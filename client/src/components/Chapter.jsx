import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

const Chapter = ({ title, indexChap, lessons, requiredXP, currentXP, loggedIn }) => {
    const navigate = useNavigate();
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

    var isLocked = currentXP < requiredXP;
  
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
                  onClick={() => navigate(`/lesson/${index+1}/chapter/${indexChap+1}`)}
                  disabled={isLocked}
                >
                  Take lesson
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  export default Chapter;
  