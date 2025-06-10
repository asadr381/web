import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
//import billImage from '../img/pic1.jpeg';
import serviceImage from '../img/pic2.jpg'; // Your service image
import collageImage from '../img/pic3.jpg'; 
import lahore from '../img/lahore.jpg';
import sialkot from '../img/sialkot.jpg';
import karachi from '../img/karachi.JPG'; // Your small business image
import { Link } from 'react-router-dom';
import vision from '../img/vision.PNG';
import isb from '../img/isb.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import fsd from '../img/fsd.jpg';
import pess from '../img/pess.jpg';
import wa from '../img/wa.png';


function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">

      //  {/* Hero Section */}
       // <motion.div
      //    className="hero-section"
        //  initial={{ opacity: 0, x: -100 }}
       //   animate={{ opacity: 1, x: 0 }}
        //  transition={{ duration: 1, ease: "easeOut" }}
       //   style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}
      //  >
        //  {/* Hero Image */}
         //<motion.img
           // src={billImage}
           // alt="Business Growth"
           // className="hero-image"
          //  initial={{ opacity: 0 }}
          //  animate={{ opacity: 1 }}
          //  transition={{ duration: 1, delay: 0.5 }}
          //  style={{ width: '50%', borderRadius: '8px' }}
        //  /> 
          
        //  {/* Text Content */}
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
          <h1 style={{ color: '#351c15' }}>UNIVERSAL LOGISTICS SERVICES (PVT.) LTD</h1>
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
            <img src={serviceImage} alt="Customer First" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ color: '#351c15' }}>Customer First</h3>
            <p style={{ color: 'black', textAlign: 'left' }}>We prioritize our customers and their needs, ensuring an exceptional experience every time.</p>
            <a href="https://example.com" onClick={() => {}} style={{ textDecoration: 'none', color: 'inherit' }}>
              <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}>
                {/* ...existing content... */}
              </button>
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
            <img src={collageImage} alt="Innovative Solutions" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ color: '#351c15' }}>Innovative Solutions</h3>
            <p style={{ color: 'black',textAlign: 'left' }}>Our forward-thinking approach helps us stay ahead of the curve, offering innovative logistics services.</p>
            <a href="https://example.com" onClick={() => {}} style={{ textDecoration: 'none', color: 'inherit' }}>
              <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}>
                {/* ...existing content... */}
              </button>
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
    <img src={karachi} alt="Karachi Office" />
    <h3>Karachi</h3>
<p>E15 Block 6 PECHS Nursery, Shahrah-e-Faisal<br></br> Karachi, Pakistan</p>
<p><FaPhoneAlt /> (0092) 21-34521187  <FaHeadset /> (0092) 21-111669877</p>


<a href="https://www.google.com/maps?q=24.8596337,67.0657547" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                <FaMapMarkerAlt />Location
              </motion.button>
            </a>
  </motion.div>

  {/* Office 2 */}
  <motion.div 
    className="office-card"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    <img src={lahore} alt="Lahore Office" />
    <h3>Lahore</h3>
    <p>204- Scotch Corner, Uper Mall<br></br> Lahore, Pakistan</p>
    <p><FaPhoneAlt /> (0092) 42-35753888, 35754666</p>

    <a href="https://www.google.com/maps?q=31.543372414055295,74.35411971970743" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                <FaMapMarkerAlt />Location
              </motion.button>
            </a>
  </motion.div>

  {/* Office 3 */}
  <motion.div 
    className="office-card"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <img src={sialkot} alt="Sialkot Office" />
    <h3>Sialkot</h3>
    <p>Chowk Anwar Khawaja Monument, Haji Pura Road Near, Faysal Bank, Sialkot, Pakistan </p>
    <p><FaPhoneAlt /> (0092) 52-3556447, 3556344</p>
    <a href="https://www.google.com/maps?q=32.473460674551234,74.51881949317858" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                <FaMapMarkerAlt />Location
              </motion.button>
            </a>
  </motion.div>

  <motion.div 
    className="office-card"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <img src={isb} alt="Islamabad Office" />
    <h3>Islamabad</h3>
    <p>Plot#3, Faqeer Aipee Road, i-11/2, <br></br>Islamabad, Pakistan</p>
    <p><FaPhoneAlt /> (0092) 51-8733361-62, 4863971-72</p>
    <a href="https://www.google.com/maps?q=33.643544744771546,73.02197573414695" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                <FaMapMarkerAlt />Location
              </motion.button>
            </a>
  </motion.div>
  <motion.div 
    className="office-card"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <img src={pess} alt="Peshawar Office" />
    <h3>Peshawar</h3>
    <p>MDF 23, Namal Palaza Khyber Super Market, Bara Road, Near Qayyum Stadium</p>
    <p><FaPhoneAlt /> (0092) 91-5252046-47</p>
    <a href="https://www.google.com/maps?q=33.98999008689488,71.53431641136997" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                <FaMapMarkerAlt />Location
              </motion.button>
            </a>
  </motion.div>
 


  <motion.div 
    className="office-card"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
>
    <img src={fsd} alt="Faisalabad Office" />
    <h3>Faisalabad</h3>
    <p>Office No. 13 Regency Int. 949, The Mall, Near Best Western Hotel, OPP PIA Office</p>
    <p><FaPhoneAlt /> (0092) 52-3556344, 3556347</p>

    <a href="https://www.google.com/maps?q=31.42243233736654,73.08960740199518" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                style={{ padding: '10px 20px', backgroundColor: '#ffc400', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                <FaMapMarkerAlt />Location
              </motion.button>
            </a>
</motion.div>




























</motion.div>
<h1 style={{ color: '#351c15' }}>OUR VISION</h1>
        <motion.img
            src={vision}
            alt="Our Vision"
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: '100%', borderRadius: '8px' }}
          />
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

export default Home;
