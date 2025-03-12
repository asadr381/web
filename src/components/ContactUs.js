import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Shipments.css';
import { motion } from 'framer-motion';
import CustomCaptcha from './CustomCaptcha';
import './CustomCaptcha.css'; // Import the CSS for CustomCaptcha
import wa from '../img/wa.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Frappe URL and API credentials
const FRAPPE_URL = process.env.REACT_APP_FRAPPE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_SECRET = process.env.REACT_APP_API_SECRET;

// Remove console log for sensitive information
// console.log(FRAPPE_URL, API_KEY, API_SECRET); // For testing

// User-facing ticket type mapping (without "Whatsapp")
const userFacingTicketTypeMap = {
  "1": "Commodity Information",
  "2": "Customs Requirements Paper Work",
  "3": "Corporate or Business Account ",
  "4": "Product Inquiry ",
  "5": "Transit Time "
};

// API-facing ticket type mapping (with "Whatsapp")
const apiFacingTicketTypeMap = {
  "1": "Commodity Information",
  "2": "Customs Requirements Paper Work",
  "3": "Corporate or Business Account ",
  "4": "Product Inquiry ",
  "5": "Transit Time "
};

function ContactUs() {
  const [formData, setFormData] = useState({
    custom_customer_name: "",
    subject: "Website General Query",
    agent_group: "Customer Support",
    custom_employee: "WebAPI",
    ticket_type: "",
    description: "",
    custom_customer_email_address: "",
    custom_customer_contact_number: ""
  });
  const [message, setMessage] = useState("");  // To show success or error message
  const [messageType, setMessageType] = useState(""); // To track message type (success or error)
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9@. ]/g, ''); // Sanitize input
    setFormData({
      ...formData,
      raised_by: formData.custom_customer_email_address,
      [e.target.name]: sanitizedValue,
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setPrivacyAccepted(e.target.checked);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!privacyAccepted) {
      setMessage("⚠️ Please accept the privacy policy.");
      setMessageType("error");
      return;
    }

    if (!captchaVerified) {
      setMessage("⚠️ Please complete the CAPTCHA.");
      setMessageType("error");
      return;
    }

    createTicket();
  };

  // Create Ticket function with API Key authentication
  const createTicket = async () => {
    try {
      // Map the selected ticket type key to the API-facing value
      const formattedTicketType = apiFacingTicketTypeMap[formData.ticket_type];
      const payload = {
        ...formData,
        ticket_type: formattedTicketType
      };

      const response = await axios.post(
        `${FRAPPE_URL}/api/resource/HD%20Ticket`,
        { doctype: "Ticket", ...payload },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${API_KEY}:${API_SECRET}`,  // API Key Authentication
          },
        }
      );
      setMessage("✅ Your request has been submitted successfully!");
      setMessageType("success");
      console.log("✅ Your request Has Been Submitted successfully:", response.data);
    } catch (error) {
      setMessage("❌ Failed to create request. Please try again.");
      setMessageType("error");
      console.error("❌ Failed to create request:", error.response?.data || error.message);
    }
  };

  const handleCaptchaVerify = (isVerified) => {
    setCaptchaVerified(isVerified);
  };

  return (
    <div className="shipments">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <span>Universal Logistics Service (Pvt.) Ltd. Authorized Service Contractor for UPS </span>
        {/* Contact Details */}
        <div className="contact-details">
          <div>
            <FaEnvelope className="contact-icon" />
            <a style={{ color: '#ffc400' }} href="mailto:pkcustsvc@ups.com">pkcustsvc@ups.com</a>
          </div>
          <div>
            <FaWhatsapp className="contact-icon" />
            <a style={{ color: '#ffc400' }} href="https://wa.me/92021111669877" target="_blank" rel="noopener noreferrer">
              +92 021 111 669 877
            </a>
          </div>
          <div>
            <FaMapMarkerAlt className="contact-icon" />
            <span> D - 79, Kehkashan Clifton Block - 5, Karachi - Pakistan</span>
          </div>
        </div>
      </div>

      {/* Query Form */}
      <div className='query-form'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="custom_customer_name">Name:</label>
            <input
              type="text"
              id="custom_customer_name"
              name="custom_customer_name"
              value={formData.custom_customer_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="custom_customer_email_address">Email:</label>
            <input
              type="email"
              id="custom_customer_email_address"
              name="custom_customer_email_address"
              value={formData.custom_customer_email_address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="custom_customer_contact_number">Mobile Number:</label>
            <input
              type="text"
              id="custom_customer_contact_number"
              name="custom_customer_contact_number"
              value={formData.custom_customer_contact_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ticket_type">Request Type:</label>
            <select
              id="ticket_type"
              name="ticket_type"
              value={formData.ticket_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Ticket Type</option>
              {Object.entries(userFacingTicketTypeMap).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter your query details..."
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group full-width">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              <CustomCaptcha id="captcha" name="captcha" onVerify={handleCaptchaVerify} />
            </div>
          </div>
          <label htmlFor="privacyPolicy">
            We respect your privacy. Your information is only used to contact you for your issues or provide shipping rates. I have read and accept the <Link to="/PrivacyPolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>.
          </label>
          <div className="form-group full-width">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                checked={privacyAccepted}
                onChange={handleCheckboxChange}
                required
              />
            
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
         
          {message && (
            <div className={`alert ${messageType === "success" ? "alert-success" : "alert-error"}`}>
              {message}
            </div>
          )}
        </form>
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

export default ContactUs;
