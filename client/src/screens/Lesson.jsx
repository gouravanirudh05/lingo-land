import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Lesson.css';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Lesson = () => {
  const { lessonNo, chapterNo } = useParams();
  const [question, setQuestion] = useState('');
  const [letter, setLetter] = useState(null);
  const [options, setOptions] = useState([]);
  const [questionNo, setQuestionNo] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [noOfQns, setNoOfQns] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [noOfCorrect, setNoOfCorrect] = useState(0);

  const navigate = useNavigate();

  const progressPercentage = (noOfCorrect / noOfQns) * 100;

  const getJwt = () => {
    return localStorage.getItem('jwtToken');
  };
  
  // Function to decode the JWT and extract the username
  /* getUsernameFromJwt = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.username; // Assuming 'username' is the key in the payload
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  };
*/
  useEffect(() => {
    // Fetch the question and options from the backend
    async function fetchData()
    {
        console.log(chapterNo);
        console.log(lessonNo);
        const response = await fetch(`${BACKEND_URL}/api/lesson/question`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${getJwt()}`,
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                chapter: chapterNo,
                lesson: lessonNo,
                questionNo: 1
            }),
        });

        const json = await response.json();
        setQuestion(json.qn);
        setOptions(json.options);
        setLetter(json.letter);

        const response2 = await fetch(`${BACKEND_URL}/api/lesson/numberOfQuestions`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${getJwt()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            lesson: parseInt(lessonNo),
            chapter: parseInt(chapterNo)
            })
        })
    
        const json2 = await response2.json();
        setNoOfQns(json2.noOfQns);

    }

    fetchData();

}, []);

  const handleCheck = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`${BACKEND_URL}/api/lesson/checkAnswer`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getJwt()}`
        },
      body: JSON.stringify({
          lesson: lessonNo,
          chapter: chapterNo,
          questionNo: questionNo,
          ans: selectedOption
      }),
    });

    const json = await response.json();
    setIsCorrect(json.correct);
    if(json.correct)
        setNoOfCorrect(noOfCorrect + 1);
    setIsChecked(true);

  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setIsCorrect(null);
    setSelectedOption('');
    
    const response = await fetch(`${BACKEND_URL}/api/lesson/question`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getJwt()}`
        },
      body: JSON.stringify({
          lesson: lessonNo,
          chapter: chapterNo,
          questionNo: questionNo + 1,
      }),
    });

    const json = await response.json();
    setQuestion(json.qn);
    setOptions(json.options);
    setLetter(json.letter);
    setIsChecked(false);
    setQuestionNo(questionNo + 1);

  };

  const handleFinish = async (e) => {
    e.preventDefault();
    // Save the user's score to the backend
    const response = await fetch(`${BACKEND_URL}/api/lesson/finish`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getJwt()}`
        },
      body: JSON.stringify({
          lesson: lessonNo,
          chapter: chapterNo,
          noOfCorrect: noOfCorrect
      }),
    });

    const json = await response.json();
    
    navigate('/learn');
  };



  return (
    <div className="quiz-container">
        <div className="quiz-box">
            <div className="quiz-header">
                <Link to='/learn'><button className="exit-button">&times;</button></Link>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div className="lives">❤ 2</div>
            </div>

            <h2 className="quiz-question">{question}</h2>

            <div className="quiz-character">
                <div className="character-box">
                    <span className="character-symbol">{letter}</span>
                    <button className="sound-button">🔊</button>
                </div>
            </div>

            <div className="options">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedOption(option)}
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
        questionNo !== noOfQns ? (
            <button
                onClick={handleContinue}
                className="check-button"
            >
                Continue
            </button>
        ) : (
            <button
                className="check-button"
                onClick={handleFinish}
            >
                Finish Quiz
            </button>
        )
    )}
</div>


            {isChecked && isCorrect && <p className="feedback correct">Correct!</p>}
            {isChecked && !isCorrect && <p className="feedback wrong">Try Again.</p>}
        </div>
    </div>
);
};

export default Lesson;
