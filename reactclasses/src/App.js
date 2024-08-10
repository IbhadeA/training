// this app.js is the root/main component that wraps other components
import './App.css';
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import React, { useRef } from 'react';

function MyComponent() {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      Hello, World!
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

// React router is a vital library for creating multiple page application inreact and managing navigation within them