import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <p4>About Us</p4>
          <p>
          As a global leader in logistics, UPS guaranteed on-time package and freight shipments are just a few of the many deliveries 
that we make every business day. We also deliver:
• Extensive knowledge and experience from the world’s largest package delivery company to keep you competitive in a 
rapidly expanding international marketplace.
• Customised solutions and reliable services for shipping, tracking and billing from a global leader in technology to drive 
greater efficiency, helping to save you time and reduce costs.
• Sustainable shipping options from one of the most efficient global transportation networks in the world to help reduce 
carbon emissions and conserve resources.
All of this helps make the best delivery of all possible — your satisfaction and, most importantly, your customers’ 
satisfaction. When that’s delivered, we know we’ve done our job
          </p>
        </div>
        <div className="footer-section links">
          <p>Quick Links</p>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
       
          <p>For bookings and enquiries</p>
          <p>Tel: 021-111-669-877</p>
          <p>UAN: 021-111-NOW-UPS</p>
          <p1>Universal Logistics Service (Pvt.) Ltd.
Authorized Service Contractor for UPS
D - 79, Kehkashan Clifton
Block - 5, Karachi - Pakistan
Telephone: +92-21-35148129-31
Customer Services: +92-21-111-669-877
Email: pkcustsvc@ups.com</p1>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Universal Logistics Services | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
