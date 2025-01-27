import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import img1 from '../img/1.PNG';
import img2 from '../img/2.PNG'; 
import img3 from '../img/3.PNG';
import img4 from '../img/4.PNG';
import img5 from '../img/5.PNG';
import img6 from '../img/6.PNG';
import footImg from '../img/foot.png';  // Importing foot.png

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Akbar Group Journey Text */}
      <div className="journey-section">
        <h2>AKBAR GROUP</h2>
        
        <p>
        Universal Logistics Services (ULS), owned by the Akbar Group, is a renowned leader in global logistics and an authorized service contractor for UPS in Pakistan. With a focus on secure and timely deliveries, ULS offers innovative solutions designed to enhance operational efficiency, lower costs, and significantly improve customer satisfaction.
        </p>
        <p>
          The Akbar Group is a diverse group of companies with extensive experience in the aviation industry as well as 
          being responsible for successfully introducing several high-profile global brands in Pakistan.
        </p>
      </div>

      {/* Office Cards Section */}
      <div className="office-cards-container">
        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={img1} alt="Office Location 1" />
          <div className="card-text">
            <p>
              The Group established Princely Travels as one of the leading travel agencies in Pakistan and also established 
              Pakistan’s largest private jet and heli operator under the name of Princely Jets.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <img src={img2} alt="Office Location 2" />
          <div className="card-text">
            <p>
              The Group has been the General Sales Agent (GSA) for 15 major international airlines in Pakistan, including 
              Singapore Airlines and Thai Air.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <img src={img3} alt="Office Location 3" />
          <div className="card-text">
            <p>
              The Group is a leading agent for Amadeus, a global service and system provider for the travel industry.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <img src={img4} alt="Office Location 4" />
          <div className="card-text">
            <p>
              The Group also has a large portfolio of luxury and sports brands like Nike, Adidas, LVMH (Tagheuer & Timex), 
              Charles and Keith, and Pedro (fashion).
            </p>
          </div>
        </motion.div>

        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <img src={img5} alt="Office Location 5" />
          <div className="card-text">
            <p>
              The Group represents UPS as their authorized service contractor for special & government projects in Pakistan, 
              since 2004.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img src={img6} alt="Office Location 6" />
          <div className="card-text">
            <p>
              The Group is a partner with the Fauji Foundation and serves as a fertilizer terminal at Port Qasim.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Wide Foot Image Below */}
      <div className="foot-image-container">
        <img src={footImg} alt="Foot Image" className="foot-image" />
      </div>
    </div>
  );
};

export default AboutUs;
