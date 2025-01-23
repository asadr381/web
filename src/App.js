// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shipments from './components/Shipments';
import Tracking from './components/Tracking';
import Services from './components/Services'; // Import Services component

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/services" element={<Services />} /> {/* Add Route for Services */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
