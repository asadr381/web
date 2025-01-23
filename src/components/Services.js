// src/components/Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {/* Card 1 */}
        <div className="card">
          <div className="card-content">
            <h3>Shipping</h3>
            <p>Fast and reliable shipping to all destinations worldwide.</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="card">
          <div className="card-content">
            <h3>Tracking</h3>
            <p>Real-time tracking for all your shipments, no matter the size.</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="card">
          <div className="card-content">
            <h3>Logistics Solutions</h3>
            <p>Custom logistics solutions designed for your business needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
