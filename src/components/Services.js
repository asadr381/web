import React from 'react';
import './Services.css';
import wa from '../img/wa.png';
import { motion } from 'framer-motion';
function Services() {
  return (
    <div className="services">
      <h2>Our UPS Shipping Solutions</h2>
      <p className="service-intro">
        We offer a range of UPS shipping solutions tailored to meet your delivery needs.
      </p>

      <div className="service-cards">
        {/* EXPORT SERVICES */}
        <div className="card">
          <div className="card-content">
            <h3>EXPORT SERVICES</h3>
            <p>Cost-effective international shipping for less time-sensitive shipments, ensuring reliable door-to-door delivery.</p>
            <div className="card-details">
              <ul>
                <li><strong>UPS Worldwide Express Plus:</strong> Delivery by 8:30 a.m./9:00 a.m., Coverage to 58 Countries & Territories, Max Weight: 70 Kg</li>
                <li><strong>UPS Worldwide Express:</strong> Delivery by 10:30 a.m./12:00 p.m., Coverage to 136 Countries & Territories, Max Weight: 70 Kg</li>
                <li><strong>UPS Worldwide Express Freight:</strong> End of Day delivery, Coverage to 81 Countries & Territories, Max Weight: 70 Kg</li>
                <li><strong>UPS Worldwide Express Saver:</strong> End of Day delivery, Coverage to 225+ Countries & Territories, Max Weight: 70 Kg</li>
              </ul>
            </div>
          </div>
        </div>

        {/* IMPORT SERVICES */}
        <div className="card">
          <div className="card-content">
            <h3>IMPORT SERVICES</h3>
            <p>Large-scale freight shipping solutions, including air, ocean, and ground freight for bulk shipments.</p>
            <div className="card-details">
              <ul>
                <li><strong>UPS Worldwide Express Plus:</strong> Delivery by 10:30 a.m./12:00 p.m., End of Next Possible Business Day, Max Weight: 70 Kg</li>
                <li><strong>UPS Worldwide Express Saver:</strong> Delivery by Next or Second Business Day, Max Weight: 70 Kg</li>
              </ul>
            </div>
          </div>
        </div>

        {/* UPS BROKERAGE SERVICE */}
        <div className="card">
          <div className="card-content">
            <h3>UPS Brokerage Service</h3>
            <p>Expert customs brokerage services to ensure your shipments move smoothly across borders.</p>
            <div className="card-details">
              <ul>
                <li>Customs services in over 120 countries, managing trade and compliance practices on your behalf.</li>
                <li>UPS handles customs documentation, including proof of payment, bill of entry, and more.</li>
                <li>Comprehensive import services, including code renewals, temporary clearance, and denied party screening.</li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div 
  className="whatsapp-widget"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25d366',
    borderRadius: '50%',
    padding: '15px',
    cursor: 'pointer',
  }}
>
  <a href="https://wa.me/92021111669877" target="_blank" rel="noopener noreferrer">
    <img src={wa} alt="WhatsApp" style={{ width: '40px', height: '40px' }} />
  </a>
</motion.div>
      </div>
    </div>
  );
}

export default Services;
