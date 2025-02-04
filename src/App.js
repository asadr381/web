// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shipments from './components/Shipments';
import Tracking from './components/Tracking';
import Services from './components/Services'; // Import Services component
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs'; // Import Footer component
// In your App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer /> {/* Add Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
