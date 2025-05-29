import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
//import logo from "../img/logoups.jpeg";
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
      {/* Logo */}
    // <Link to="/" style={{ textDecoration: 'none' }}>
    // <img 
     //  src={logo} 
     //  alt="Logo"
     //   style={{ width: '180px', height: '100px' }} 
    //  />
  //   </Link>

      {/* Text */}
     <h4 style={{ 
    color: 'white', 
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
