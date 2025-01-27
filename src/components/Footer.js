import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
           Universal Logistics Services (ULS), an authorized service contractor for UPS in Pakistan, is a trusted leader in global logistics. We ensure secure and timely deliveries while providing innovative solutions that enhance efficiency, reduce costs, and elevate customer satisfaction.
          </p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhone /> Call Center: 021-111-669-877</p>
          <p><FaEnvelope /> pkcustsvc@ups.com</p>
          <p><FaMapMarkerAlt /> D-79, Kehkashan Clifton, Karachi, Pakistan</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
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
