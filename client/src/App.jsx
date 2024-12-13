import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './screens/Homepage/Homepage';
import Signin from './screens/Signin/Signin';
import Signup from './screens/Signup/Signup';
import Lesson from './screens/Lesson/Lesson';
import Profile from './screens/Profile/Profile';
import Learn from './screens/Learn/Learn';
import Leaderboard from './screens/Leaderboard/Leaderboard';
import LandingPage from './screens/LandingPage/LandingPage';

// Utility function to check authentication
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; // Replace with your auth logic
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};

// App component
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lesson/:lessonNo/chapter/:chapterNo" element={<Lesson />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learn"
            element={
              <ProtectedRoute>
                <Learn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
