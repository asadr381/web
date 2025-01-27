import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <p>
          <strong>Universal Logistics Services (ULS)</strong>, an authorized service contractor for <strong>UPS</strong> in Pakistan, is a trusted leader in global logistics.  
          We specialize in secure and timely deliveries, offering innovative solutions that enhance efficiency, reduce costs, and improve customer satisfaction.  
        </p>
        <p>
          Our expertise in international shipping, freight forwarding, and supply chain management allows businesses to operate seamlessly across borders.  
          With cutting-edge technology and a commitment to excellence, we ensure that every shipment reaches its destination on time, every time.
        </p>
        <div className="highlights">
          <div className="highlight-item">
            <h3>Reliable & Secure</h3>
            <p>Guaranteed safe and on-time deliveries with advanced tracking solutions.</p>
          </div>
          <div className="highlight-item">
            <h3>Cost-Effective Solutions</h3>
            <p>Optimized shipping strategies to reduce costs and enhance efficiency.</p>
          </div>
          <div className="highlight-item">
            <h3>Global Reach</h3>
            <p>Seamless international logistics solutions powered by UPS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
