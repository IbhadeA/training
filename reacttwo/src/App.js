import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MpNavbar from './components/MpNavbar';
import MpHomePage from './components/MpHomePage';
import MpRandomJokes from './components/MpRandomJokes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MpNavbar />
        <Routes>
          <Route path="/" element={<MpHomePage />} />
          <Route path="/jokes" element={<MpRandomJokes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
