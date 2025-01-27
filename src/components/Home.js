import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import billImage from '../img/bill.png';
import serviceImage from '../img/img2.PNG'; // Your service image
import collageImage from '../img/img3.PNG'; 
import lahore from '../img/lahore.jpg';
import sialkot from '../img/sialkot.jpg';
import karachi from '../img/karachi.JPG'; // Your small business image
import { Link } from 'react-router-dom';
import vision from '../img/vision.PNG';
function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">

        {/* Hero Section */}
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}
        >
          {/* Hero Image */}
          <motion.img
            src={billImage}
            alt="Business Growth"
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: '50%', borderRadius: '8px' }}
          />
          
          {/* Text Content */}
          <motion.div
            className="text-content"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ maxWidth: '45%' }}
          >
            <h2 style={{ color: '#351c15' }}>Let ULS Help Grow Your Business</h2>
            <div className="underline"></div>
            <p style={{ color: 'black' }}>Looking for fast, reliable shipping or industry-leading logistics solutions? ULS provides the expertise to streamline your operations.</p>
            
            <Link to="/Shipments" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Title */}
        <motion.div
          className="company-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ textAlign: 'center', marginTop: '50px' }}
        >
          <h1 style={{ color: '#351c15' }}>UNIVERSAL LOGISTICS SERVICES PVT. LTD</h1>
          <h3 style={{ color: '#351c15' }}>UPS Authorised Service Contractor Pakistan </h3>
          <p style={{ color: 'black' }}>Providing world-class logistics solutions with efficiency and transparency. We specialize in international shipping, warehousing, and supply chain management to deliver faster, more securely, and cost-effectively.</p>
        </motion.div>

        {/* World-Class Services Section */}
        <motion.div
          className="services-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}
        >
          {/* Left Service Card */}
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ flex: 1, background: '#f7f7f7', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <img src={serviceImage} alt="Service Image" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ color: '#351c15' }}>Customer First</h3>
            <p style={{ color: 'black', textAlign: 'left' }}>We prioritize our customers and their needs, ensuring an exceptional experience every time.</p>
            <a href="https://about.ups.com/us/en/our-stories/customer-first/the-ups-store-earns-top-spot.html" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                See the Story
              </motion.button>
            </a>
          </motion.div>

          {/* Right Service Card */}
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ flex: 1, background: '#f7f7f7', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <img src={collageImage} alt="Small Business Image" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ color: '#351c15' }}>Innovative Solutions</h3>
            <p style={{ color: 'black',textAlign: 'left' }}>Our forward-thinking approach helps us stay ahead of the curve, offering innovative logistics services.</p>
            <a href="https://about.ups.com/us/en/our-stories/customer-first/small-business-big-growth.html" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                Learn More
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
        <div>  <h3 style={{ color: '#351c15' }}>Our Service Centers </h3></div>

        {/* Small Business Growth Section */}
      {/* Office Locations Section */}
    {/* Office Locations Section */}
<motion.div 
  className="office-locations"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* Office 1 */}
  <motion.div 
    className="office-card"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <img src={karachi} alt="Office Location 1" />
    <h3>Karachi Office</h3>
    <p>Universal Logistics Service (Pvt.) Ltd.
Authorized Service Contractor for UPS
D - 79, Kehkashan Clifton
Block - 5, Karachi - Pakistan</p>
<p>Email: pkcustsvc@ups.com</p>
<p>Telephone: +92-21-35148129-31
Customer Services: +92-21-111-669-877</p>
  
  </motion.div>

  {/* Office 2 */}
  <motion.div 
    className="office-card"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    <img src={lahore} alt="Office Location 2" />
    <h3>Lahore Office</h3>
    <p>Address: ABC Road, Lahore, Pakistan</p>
    <p>Phone: +92 321 7654321</p>
  </motion.div>

  {/* Office 3 */}
  <motion.div 
    className="office-card"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <img src={sialkot} alt="Office Location 3" />
    <h3>Sialkot Office</h3>
    <p>Chowk Anwar Khawaja Monument, Haji Pura Road Near, Faysal Bank Sialkot </p>
    <p>Telephone: +92-52-3556447 TEL: +92-52-3556344</p>
   
  </motion.div>
</motion.div>
<h1 style={{ color: '#351c15' }}>OUR VISION</h1>
        <motion.img
            src={vision}
            alt="Business Growth"
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: '100%', borderRadius: '8px' }}
          />

      </div>
      
    </div>
    
  );
}

export default Home;
