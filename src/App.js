import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shipments from './components/Shipments';
import Tracking from './components/Tracking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
