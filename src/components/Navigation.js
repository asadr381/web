import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../img/UPS-logo.png';
import { motion } from 'framer-motion';

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
          style={{ width: '63px', height: '100px' }} 
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
        <li>   <Link to="/" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cta-button"
                        style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
                      >
                       Home
                      </motion.button>
                    </Link></li>
        <li>   <Link to="/Shipments" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cta-button"
                        style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
                      >
                        Shipments
                      </motion.button>
                    </Link></li>
        <li>   <Link to="/tracking" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cta-button"
                        style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
                      >
                        Tracking
                      </motion.button>
                    </Link></li>
        <li>   <Link to="/services" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cta-button"
                        style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
                      >
                        Services
                      </motion.button>
                    </Link></li>
        <li>   <Link to="/contactus" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cta-button"
                        style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
                      >
                        Contact Us
                      </motion.button>
                    </Link></li>
        <li>   <Link to="/aboutus" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cta-button"
                        style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
                      >
                        About Us
                      </motion.button>
                    </Link></li>
        <li>   <Link to="/PrivacyPolicy" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
              >
                Privacy Policy
              </motion.button>
            </Link></li>
        
      </ul>
    </nav>
  );
}

export default Navigation;
