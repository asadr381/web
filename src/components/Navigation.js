import React, { useState } from 'react';
import { FaHome, FaBoxOpen, FaSearch, FaServicestack, FaEnvelope, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../img/UPS-logo.png';

 // Add your logo image

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo on the Left */}



     <div style={{ 
     display: 'flex', 
    alignItems: 'center', 
     gap: '16px' 
   }}>

   <Link to="/" style={{ textDecoration: 'none' }}>
        <img 
          src={logo} 
          alt="Logo"
          style={{ width: '63px', height: '100px', paddingLeft: '25px' }}  // Adjusted paddingLeft
        />
      </Link>
      {/* Logo */}

      {/* Text */}
     <h4 style={{ 
    color: '#351c15', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
      justifyContent: 'center', 
     margin: 0 
   }}>
        <span 
          style={{ 
            fontSize: '22px', 
            fontWeight: 'bold' 
          }}
          className="header-text"
        >
          Universal Logistics Services
        </span>
        <span 
          style={{ fontSize: '16px' }} 
          className="service-contractor"
        >
          UPS Authorised Service Contractor
        </span>
        <span 
          style={{ fontSize: '16px' }} 
          className="service-contractors"
        >
          Pakistan
        </span>
      </h4>

      {/* Inline CSS for Media Query */}
      <style>
        {`
          @media (max-width: 768px) {
            .header-text {
              font-size: 14px !important; /* Keep this text larger in mobile view */
            }
            .service-contractor {
              font-size: 8px !important; /* Make this text smaller on mobile */
            }
            .service-contractors {
              font-size: 8px !important; /* Make this text smaller on mobile */
            }
           
          }
        `}
      </style>
    </div>
      
      {/* Hamburger Menu on the Right */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      
      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu} style={{ color: '#351c15', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaHome style={{ color: '#351c15' }} /> Home
          </Link>
        </li>
        <li>
          <Link to="/shipments" onClick={toggleMenu} style={{ color: '#351c15', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaBoxOpen style={{ color: '#351c15' }} /> Shipments
          </Link>
        </li>
        <li>
          <Link to="/tracking" onClick={toggleMenu} style={{ color: '#351c15', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaSearch style={{ color: '#351c15' }} /> Tracking
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu} style={{ color: '#351c15', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaServicestack style={{ color: '#351c15' }} /> Services
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" onClick={toggleMenu} style={{ color: '#351c15', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaEnvelope style={{ color: '#351c15' }} /> Contact Us
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" onClick={toggleMenu} style={{ color: '#351c15', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaInfoCircle style={{ color: '#351c15' }} /> About Us
          </Link>
        </li>
        <li>
          <Link to="/PrivacyPolicy" onClick={toggleMenu} style={{ color: '#351c15', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaShieldAlt style={{ color: '#351c15' }} /> Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
