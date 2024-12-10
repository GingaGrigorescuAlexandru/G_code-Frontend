import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import HomePage from './Components/HomePage/HomePage';
import RoadmapPage from './Components/RoadmapPage/RoadmapPage';
import { ThemeProvider, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './Theme';

function App() {
  return (
      <div>
          <Router>
              <Navbar />
            <Routes>
                <Route path = '/' element = { <HomePage /> } />
                <Route path = '/newsletter' element = { <p>Newsletter</p> } />
                <Route path = '/questions' element = { <p>Questions</p> } />
                <Route path = '/practice' element = { <p>Practice</p> } />
                <Route path = '/roadmap' element = { <RoadmapPage /> } />
                <Route path = '/register' element = { <RegisterPage /> } />
            </Routes>
          </Router>
      </div>
  );
};

export default App;
