import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
          Universal Logistics Services (ULS), owned by the Akbar Group, is a renowned leader in global logistics and an authorized service contractor for UPS in Pakistan. With a focus on secure and timely deliveries, ULS offers innovative solutions designed to enhance operational efficiency, lower costs, and significantly improve customer satisfaction.
          </p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/aboutus">About Us</Link></li> {/* Updated to Link */}
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhone /> Call Center: +92-21-111-669-877</p>
          <p><FaEnvelope /> pkcustsvc@ups.com</p>
          <p><FaMapMarkerAlt /> D-79, Kehkashan Clifton Block-5, Karachi, Pakistan</p>
          <div className="social-icons">
      <a
        href="https://www.linkedin.com/company/upspakistanasc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="linkedin-icon" />
      </a>
    </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Universal Logistics Services | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
