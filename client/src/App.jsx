import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Lesson from './screens/Lesson'; 
import Learn from './screens/Learn';

function App() {
  //const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/lesson/:lessonNo/chapter/:chapterNo" element={<Lesson />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
