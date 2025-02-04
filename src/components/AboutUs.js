// src/CardSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import './AboutUs.css';
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
import UPS from "../img/UPS.png";


const CardSlider = () => {
  const [sliderType, setSliderType] = useState('airline'); // State to manage slider type

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay for continuous movement
    autoplaySpeed: 1500, // Adjust autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const airlineData = [
    { title: 'Princely Travels', content: 'Founded in 1976, it soon established itself as one of the most efficient, respected and trusted travel agencies in Pakistan. Princely Travels is one of the leading IATA-accredited Travel Agents in Pakistan. Princely has a team of experienced professionals who provide personalized and premium travel services to top corporate houses, ensuring that all travel needs are met under one roof.', image: prince },
    { title: 'Thai Airlines', content: 'Thai Air International appointed Akbar Group as its GSA in North Pakistan in May 1979. Since then, Thai Air has been successfully operating in Pakistan. An industry leader when it comes to hospitality and efficiency, Thai Air provides a hub to the Asia Pacific and the world via Bangkok.', image: thai },
    { title: 'Singapore Airline', content: 'Emerging as one of the finest and fastest growing airlines in the aviation industry, Singapore Airlines is known as an industry leader with a youthful fleet and trend setting practices. Singapore Airlines appointed Akbar Group as its GSA in 1979 and became online in Pakistan in 1985. The airline has independent offices in Karachi, Lahore, and Islamabad.', image: singapore },
    { title: 'Princely Jets', content: 'Princely Jets is part of the Akbar Group since 2005. It is the single largest private jet charter business in the country. We are also currently the only operator who can offer international flights. Effortless air travel such as that offered by Princely Jets can make that possible. With a private jet at your disposal, you obtain unprecedented control over the way you travel.', image: jets },
    { title: 'Amadeus', content: 'Premier Aviation Services (Pvt.) Ltd., a unit of Akbar Group of Companies (The largest Aviation Group in Pakistan), was appointed as the National Marketing Company (NMC) for Amadeus in Pakistan on May 15, 1997.', image: amadeus },
  ];

  const commercialData = [
    { title: 'UPS', content: 'UPS, founded in 1907, is one of the largest global logistics companies. Over the years UPS has become the worlds largest package delivery company and a global leader in specialized logistics and transportation services. UPS provides its services in more than 200 countries and territories worldwide. ', image: UPS },
    { title: 'TIMEX', content: 'TIMEX Group designs, manufactures and markets innovative timepieces and jewelry globally. TIMEX, founded in 1854, has expanded to become TIMEX Group, a privately-held company, with several operating units and over 5,000 employees worldwide.', image: tmiex },
    { title: 'TAG Heuer', content: 'TAG Heuer, the avant-garde of Swiss watchmaking since 1860. Ever since, TAG Heuer has been striving to push the boundaries further, inventing timepieces for those who love to defy convention.', image: Tagheuer },
    { title: 'Pedro', content: 'Pedro embodies modern luxury and style with a line of footwear and accessories in a smart twist of timeless classics with international influence for men and women, with emphasis on channeling heightened fashion acumen each season.', image: pedro },
    { title: 'NIKE', content: 'The year 2001 has seen the sport shoes, apparel and accessories market transform in Pakistan as Speed Private Limited (SPL), an Akbar Group company, acquired the exclusive distribution rights for NIKE in Pakistan.', image: NIKE },
    { title: 'CHARLES & KEITH', content: 'Fashion entrepreneurs, CHARLES & KEITH Wong founded CHARLES & KEITH in 1996 upon identifying the potential of footwear designs catered for Asian women.', image: CharlesandKeith },
    { title: 'Adidas', content: 'adidas has its roots in Germany but they are a truly global company. Around the world adidas employ over 57,000 people. Every year they produce over 900 million sports and sports lifestyle products with independent manufacturing partners worldwide.', image: adidas },

  ];

  return (
    
    <div className="card-slider-container">
      
        <div className="about-us-container">
      <h2 className="about-us-heading">AKBAR GROUP</h2>
      <p className="about-us-text">
        <strong>Universal Logistics Services (ULS)</strong>, owned by the Akbar Group, is a renowned leader in global logistics and an authorized service contractor for UPS in Pakistan. With a focus on secure and timely deliveries, ULS offers innovative solutions designed to enhance operational efficiency, lower costs, and significantly improve customer satisfaction.
      </p>
      <p className="about-us-text">
        The Akbar Group is a diverse group of companies with extensive experience in the aviation industry as well as being responsible for successfully introducing several high-profile global brands in Pakistan.
      </p>
    </div>
      {/* Buttons to switch between sliders */}
      <div className="slider-buttons">
        <button
          onClick={() => setSliderType('airline')}
          className={sliderType === 'airline' ? 'active' : ''}
        >
         Aviation
        </button>
        <button
          onClick={() => setSliderType('commercial')}
          className={sliderType === 'commercial' ? 'active' : ''}
        >
          Commercial
        </button>
      </div>

      {/* Airline Slider */}
      {sliderType === 'airline' && (
        <Slider {...settings}>
          {airlineData.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}

      {/* Commercial Slider */}
      {sliderType === 'commercial' && (
        <Slider {...settings}>
          {commercialData.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CardSlider;