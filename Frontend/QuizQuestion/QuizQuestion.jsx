import React, { useState } from 'react';
import './App.css';

const LanguageLearningQuiz = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isChecked, setIsChecked] = useState(false); 
    const [currentQuestion, setCurrentQuestion] = useState(1); 
    const totalQuestions = 5; 

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsChecked(false); 
    };

    const handleCheck = () => {
        setIsChecked(true); 
        const correctAnswer = 'ka'; 

        if (selectedOption === correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleContinue = () => {
        if (currentQuestion < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null); 
            setIsChecked(false);
            setIsCorrect(null); // Reset correctness state for the next question
        }
    };

    const progressPercentage = (currentQuestion / totalQuestions) * 100;

    return (
        <div className="quiz-container">
            <div className="quiz-box">
                <div className="quiz-header">
                    <button className="exit-button">&times;</button>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <div className="lives">❤ 2</div>
                </div>

                <h2 className="quiz-question">What sound does this make?</h2>

                <div className="quiz-character">
                    <div className="character-box">
                        <span className="character-symbol">क</span>
                        <button className="sound-button">🔊</button>
                    </div>
                </div>

                <div className="options">
                    {['ka', 'kha', 'gha'].map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            className={`option-button 
                              ${selectedOption === option ? 'selected' : ''} 
                              ${isChecked && isCorrect && selectedOption === option ? 'correct' : ''} 
                              ${isChecked && !isCorrect && selectedOption === option ? 'wrong' : ''}`}
                        >
                            {index + 1}. {option}
                        </button>
                    ))}
                </div>

                <div className="action-buttons">
                    <button className="skip-button">Skip</button>
                    {!isChecked ? (
                        <button
                            onClick={handleCheck}
                            disabled={!selectedOption}
                            className={`check-button ${selectedOption ? '' : 'disabled'}`}
                        >
                            Check
                        </button>
                    ) : (
                        <button
                            onClick={handleContinue}
                            className="continue-button"
                        >
                            Continue
                        </button>
                    )}
                </div>

                {isChecked && isCorrect && <p className="feedback correct">Correct!</p>}
                {isChecked && !isCorrect && <p className="feedback wrong">Try Again.</p>}
            </div>
        </div>
    );
};

export default LanguageLearningQuiz;
