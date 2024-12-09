import './App.css';
import React from 'react';
import AI from './Components/AI';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './Theme';

function App() {
  return (
      <ThemeProvider theme = {theme} >
      <div>
          <Navbar />

          <Typography variant = 'h1' color = 'black'>
              AI Tester
          </Typography>

          <AI />
      </div>
      </ThemeProvider>
  );
}

export default App;
