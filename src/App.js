// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shipments from './components/Shipments';
import Tracking from './components/Tracking';
import Services from './components/Services'; // Import Services component
import Footer from './components/Footer'; 
import PrivacyPolicy from './components/PrivacyPolicy';// Import Footer component

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
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />


        </Routes>

        <Footer /> {/* Add Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
