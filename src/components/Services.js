import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <p className="service-intro">
        We offer a range of UPS shipping solutions tailored to meet your delivery needs.
      </p>

      <div className="service-cards">
        {/* UPS Express Plus */}
        <div className="card">
          <div className="card-content">
            <h3>UPS Express Plus</h3>
            <p>Fastest morning delivery for your urgent shipments. Ensures delivery as early as 8 AM to select locations.</p>
          </div>
        </div>

        {/* UPS Express */}
        <div className="card">
          <div className="card-content">
            <h3>UPS Express</h3>
            <p>Guaranteed delivery by midday or end of the day, ensuring quick and secure global shipping.</p>
          </div>
        </div>

        {/* UPS Express Saver */}
        <div className="card">
          <div className="card-content">
            <h3>UPS Express Saver</h3>
            <p>Affordable express shipping with next-day delivery in major cities and quick transit to international locations.</p>
          </div>
        </div>

        {/* UPS Expedited */}
        <div className="card">
          <div className="card-content">
            <h3>UPS Expedited</h3>
            <p>Cost-effective international shipping for less time-sensitive shipments, ensuring reliable door-to-door delivery.</p>
          </div>
        </div>

        {/* Freight Shipping */}
        <div className="card">
          <div className="card-content">
            <h3>Freight Shipping</h3>
            <p>Large-scale freight shipping solutions, including air, ocean, and ground freight for bulk shipments.</p>
          </div>
        </div>

        {/* Customs Clearance */}
        <div className="card">
          <div className="card-content">
            <h3>Customs Clearance</h3>
            <p>Expert customs brokerage services to ensure your shipments move smoothly across borders.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
