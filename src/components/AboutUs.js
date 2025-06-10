import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import "./AboutUs.css";
import prince from "../img/princely.png";
import amadeus from "../img/amadeus.png";
import jets from "../img/princely-jets.png";
import singapore from "../img/singapore airline.png";
import thai from "../img/thai logo.png";
import adidas from "../img/adidas.png";
import CharlesandKeith from "../img/CharlesandKeith.png";
import NIKE from "../img/NIKE.png";
import pedro from "../img/pedro.png";
import Tagheuer from "../img/Tagheuer.png";
import tmiex from "../img/tmiex.png";

import upslogo from '../img/asclogo.png';

const partners = [
  {
    logo: prince,
    name: 'Princely Travels',
    description: 'Founded in 1976, it soon established itself as one of the most efficient, respected, and trusted travel agencies in Pakistan. Princely Travels is one of the leading IATA-accredited Travel Agents in Pakistan. Princely has a team of experienced professionals who provide personalized and premium travel services to top corporate houses, ensuring that all travel needs are met under one roof.'
  },
  {
    logo: amadeus,
    name: 'Amadeus',
    description: 'Premier Aviation Services (Pvt.) Ltd., a unit of Akbar Group of Companies (The largest Aviation Group in Pakistan), was appointed as the National Marketing Company (NMC) for Amadeus in Pakistan on May 15, 1997.'
  },
  {
    logo: jets,
    name: 'Princely Jets',
    description: 'Princely Jets is part of the Akbar Group since 2005. It is the single largest private jet charter business in the country. We are also currently the only operator who can offer international flights. Effortless air travel such as that offered by Princely Jets can make that possible. With a private jet at your disposal, you obtain unprecedented control over the way you travel.'
  },
  {
    logo: singapore,
    name: 'Singapore Airline',
    description: 'Emerging as one of the finest and fastest-growing airlines in the aviation industry, Singapore Airlines is known as an industry leader with a youthful fleet and trend-setting practices. Singapore Airlines appointed Akbar Group as its GSA in 1979 and became online in Pakistan in 1985. The airline has independent offices in Karachi, Lahore, and Islamabad.'
  },
  {
    logo: thai,
    name: 'Thai Airlines',
    description: 'Thai Air International appointed Akbar Group as its GSA in North Pakistan in May 1979. Since then, Thai Air has been successfully operating in Pakistan. An industry leader when it comes to hospitality and efficiency, Thai Air provides a hub to the Asia Pacific and the world via Bangkok.'
  },
  {
    logo: adidas,
    name: 'Adidas',
    description: 'Adidas has its roots in Germany but they are a truly global company. Around the world, Adidas employs over 57,000 people. Every year they produce over 900 million sports and sports lifestyle products with independent manufacturing partners worldwide.'
  },
  {
    logo: upslogo,
    name: 'UPS',
    description: 'UPS, founded in 1907, is one of the largest global logistics companies. Over the years, UPS has become the world\'s largest package delivery company and a global leader in specialized logistics and transportation services. UPS provides its services in more than 200 countries and territories worldwide.'
  },
  {
    logo: tmiex,
    name: 'TIMEX',
    description: 'TIMEX Group designs, manufactures, and markets innovative timepieces and jewelry globally. TIMEX, founded in 1854, has expanded to become TIMEX Group, a privately-held company, with several operating units and over 5,000 employees worldwide.'
  },
  {
    logo: Tagheuer,
    name: 'TAG Heuer',
    description: 'TAG Heuer, the avant-garde of Swiss watchmaking since 1860. Ever since, TAG Heuer has been striving to push the boundaries further, inventing timepieces for those who love to defy convention.'
  },
  {
    logo: pedro,
    name: 'Pedro',
    description: 'Pedro embodies modern luxury and style with a line of footwear and accessories in a smart twist of timeless classics with international influence for men and women, with emphasis on channeling heightened fashion acumen each season.'
  },
  {
    logo: CharlesandKeith,
    name: 'CHARLES & KEITH',
    description: 'Fashion entrepreneurs, CHARLES & KEITH Wong founded CHARLES & KEITH in 1996 upon identifying the potential of footwear designs catered for Asian women.'
  },
  {
    logo: NIKE,
    name: 'NIKE',
    description: 'The year 2001 has seen the sport shoes, apparel, and accessories market transform in Pakistan as Speed Private Limited (SPL), an Akbar Group company, acquired the exclusive distribution rights for NIKE in Pakistan.'
  },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at center

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  return (
    <div className="about-container">

      
       <div className="about-us-container">
       <h2 className="company-heading">
  <a href="https://www.akbargroup.com.pk/" target="_blank" rel="noopener noreferrer">
    AKBAR GROUP
  </a>
</h2>

        <p className="about-us-text">
          <strong>Universal Logistics Services (ULS)</strong>, owned by the Akbar Group, is a renowned leader in global logistics and an authorized service contractor for UPS in Pakistan. With a focus on secure and timely deliveries, ULS offers innovative solutions designed to enhance operational efficiency, lower costs, and significantly improve customer satisfaction.
        </p>
        <p className="about-us-text">
          The Akbar Group is a diverse group of companies with extensive experience in the aviation industry as well as being responsible for successfully introducing several high-profile global brands in Pakistan.
        </p>
      
      </div>


      <h2 className="company-heading">PARTNERS</h2>

      {/* Partners Section */}
      <div className="partners-section">
        <FaArrowLeft className="arrow left-arrow" onClick={handlePrev} />
        
        <div className="partners-wrapper">
          {partners.map((partner, index) => {
            const position = index - currentIndex;

            return (
              <motion.img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className={`partner-logo ${position === 0 ? "center-logo" : ""}`}
                animate={{
                  scale: position === 0 ? 1.5 : 1, // Zoom effect on center logo
                  opacity: Math.abs(position) > 0.5 ?  0.1 : 1, // Fade side logos
                  x: position * 120, // Move logos left/right
                }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </div>

        <FaArrowRight className="arrow right-arrow" onClick={handleNext} />
      </div>

      {/* Dynamic Partner Info */}
      <motion.div
        key={partners[currentIndex].name}
        className="partner-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="partner-title">{partners[currentIndex].name}</h2>
        <p className="partner-description">{partners[currentIndex].description}</p>
      </motion.div>
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
  );
};

export default AboutUs;
