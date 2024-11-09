import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        age,
        email,
        password
      })
    });

    const json = await response.json();
    alert(json.message);
    navigate('/signin');
  };

  return (
    <div>
      <div className="background-text">
        <span>Hello</span>
        <span>ಹೆಲೋ</span> 
        <span>Hola</span>
        <span>Bonjour</span>
        <span>Hallo</span>
        <span>Ciao</span>
        <span>Привет</span>
        <span>你好</span>
        <span>こんにちは</span>
        <span>안녕하세요</span>
        <span>مرحبا</span>
        <span>Olá</span>
        <span>Γειά σας</span>
        <span>வணக்கம்</span>
        <span>ಹೆಲೋ</span> 
        <span>हैलो</span>
        <span>ਸਤ ਸ੍ਰੀ ਅਕਾਲ</span>
        <span>שלום</span>
        <span>สวัสดี</span>
        <span>Merhaba</span>
        <span>Sveiki</span>
        <span>Saluton</span>
        <span>Halo</span>
        <span>Hei</span>
        <span>Szia</span>
        <span>Përshëndetje</span>
        <span>Здравейте</span>
        <span>Сайн уу</span>
        <span>Hei</span>
        <span>Jambo</span>
        <span>नमस्ते</span>
        <span>Kamusta</span>
        <span>Selamat</span>
        <span>Mingalaba</span>
        <span>नमस्कार</span>
        <span>हॅलो</span>
        <span>ሰላም</span>
        <span>Kaixo</span>
        <span>Здраво</span>
        <span>Habari</span>
        <span>Moni</span>
        <span>Witam</span>
        <span>Dzień dobry</span>
        <span>Kumusta</span>
        <span>Привіт</span>
      </div>

      <div className="side-content left-content">Welcome to Lingo Land!</div>
      
      <div className="profile-container">
        <h1 className="profile-title">Create your profile</h1>
        <div className="profile-form">
          <label className="profile-label">Age</label>
          <input
            type="number"
            className="profile-input"
            placeholder="Age"
            onChange={e => setAge(e.target.value)}
            value={age}
          />

          <label className="profile-label">Username</label>
          <input
            type="text"
            className="profile-input"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />

          <label className="profile-label">Email</label>
          <input
            type="email"
            className="profile-input"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <label className="profile-label">Password</label>
          <input
            type="password"
            className="profile-input"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          <button className="create-account-button" onClick={handleSubmit}>
            CREATE ACCOUNT
          </button>
        </div>
      </div>

      <div className="side-content right-content">Join our community!</div>
    </div>
  );
};

export default Signup;
