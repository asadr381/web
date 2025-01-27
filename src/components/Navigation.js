import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../img/UPS-logo.png'; // Add your logo image

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo on the Left */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <h4 style={{ color: 'white', alignContent: 'center' }}>UPS Authorised Service Contractor Pakistan </h4>
      
      
      {/* Hamburger Menu on the Right */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      
      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/shipments" onClick={toggleMenu}>Shipments</Link></li>
        <li><Link to="/tracking" onClick={toggleMenu}>Tracking</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/ContactUs" onClick={toggleMenu}>Contact Us</Link></li>
        <li><Link to="/AboutUs" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/PrivacyPolicy" onClick={toggleMenu}>Privacy Policy</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
