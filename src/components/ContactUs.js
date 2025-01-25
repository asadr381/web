import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css"; // Importing the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:pkcustsvc@ups.com?subject=Contact Form Submission from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
     
        <span>Universal Logistics Service (Pvt.) Ltd. Authorized Service Contractor for UPS </span>
        {/* Contact Details */}
        <div className="contact-details">
          <div>
            <FaEnvelope className="contact-icon" />
            <a href="mailto:pkcustsvc@ups.com">pkcustsvc@ups.com</a>
          </div>
          <div>
            <FaWhatsapp className="contact-icon" />
            <a href="https://wa.me/92021111669877" target="_blank" rel="noopener noreferrer">
              +92 021 111 669 877
            </a>
          </div>
          <div>
      
        
          </div>
          <FaMapMarkerAlt className="contact-icon" />
          <span> D - 79, Kehkashan Clifton Block - 5, Karachi - Pakistan</span>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
