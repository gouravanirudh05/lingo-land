/* General styling */

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


/* App.css */
body {
  background-color: #192228; 
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Press Start 2P', cursive;
}

.profile-container {
  background-color: #2c3e50; 
  color: #e0e0e0;
  padding: 20px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
}

.profile-title {
  font-size: 16px;
  margin-bottom: 20px;
  color: #ffffff;
}

.profile-form {
  display: flex;
  flex-direction: column;
}

.profile-label {
  font-size: 10px;
  text-align: left;
  color: #b0b0b0;
  margin-bottom: 5px;
}

.profile-input {
  font-size: 14px;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #34495e;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
}

.create-account-button {
  background-color: #3498db; 
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Press Start 2P', cursive;
}

.create-account-button:hover {
  background-color: #2980b9;
}


