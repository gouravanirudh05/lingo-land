import React, { useState } from 'react';

const QuizQuestion = ({qn, qnNo, options, isCorrect, onCheck, onContinue, setSelectedOption}) => {

    // Handle answer selection
    const handleAnswerSelection = (option) => {
        setSelectedOption(option);
    };

    // Handle audio play
    /*const playAudio = () => {
        const audio = new Audio('/path/to/audio.mp3'); // Replace with the actual audio file path
        audio.play();
    };*/

    return (
        <div style={{ backgroundColor: isCorrect === null ? '#2B2B2B' : isCorrect ? '#4CAF50' : '#F44336', padding: '20px', borderRadius: '8px', textAlign: 'center', color: '#FFF' }}>
            <h3>What sound does this make?</h3>
            <div style={{ fontSize: '60px', margin: '20px' }}>अ</div>

            <button onClick={playAudio} style={{ backgroundColor: '#007AFF', color: '#FFF', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                🔊 Play Sound
            </button>

            <div style={{ marginTop: '20px' }}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelection(option)}
                        style={{
                            margin: '10px',
                            padding: '10px 20px',
                            fontSize: '18px',
                            borderRadius: '5px',
                            backgroundColor: selectedOption === option ? (isCorrect && selectedOption === correctAnswer ? '#4CAF50' : '#F44336') : '#555',
                            color: '#FFF',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {isCorrect !== null && (
                <div style={{ marginTop: '20px', fontSize: '18px' }}>
                    {isCorrect ? 'Correct!' : `Incorrect, the correct answer is ${correctAnswer}.`}
                </div>
            )}
        </div>
    );
};

export default QuizQuestion;