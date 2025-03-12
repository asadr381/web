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


// Calculate weight

  
  // Calculate weight

// Shipment type mapping
const shipmentTypeMap = {
  "1": "Letter (0.5kg only)",
  "2": "Document (0.5kg to 5kg only)",
  "3": "Parcel (0.5kg to 70kg)"
};

function Shipments() {
  const [formData, setFormData] = useState({
    custom_customer_name: "",
    subject: "website Rate Query",
    agent_group: "TeleSales",
    custom_employee: "WebAPI",
    ticket_type: "Rate Inquiry",
    description: "",
    custom_customer_email_address: "",
    custom_customer_contact_number: "",
    shipmentFrom: "",
    shipmentTo: "",
    shipmentType: "",
    weight: ""
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setPrivacyAccepted(e.target.checked);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@(ups\.com|gmail\.com|yahoo\.com)$/i;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{9,13}$/;
    return phoneRegex.test(phone);
  };

  const handleCaptchaVerify = (isVerified) => {
    setCaptchaVerified(isVerified);
  };

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

    if (!isValidEmail(formData.custom_customer_email_address)) {
      setMessage("⚠️ Invalid email. Please enter a valid email ending with @ups.com, @gmail.com, or @yahoo.com.");
      setMessageType("error");
      return;
    }

    if (!isValidPhoneNumber(formData.custom_customer_contact_number)) {
      setMessage("⚠️ Invalid phone number. Please enter a valid phone number (9 to 13 digits).");
      setMessageType("error");
      return;
    }

    if (!shipmentTypeMap[formData.shipmentType]) {
      setMessage("⚠️ Invalid shipment type. Please select a valid option.");
      setMessageType("error");
      return;
    }

    if (isNaN(formData.weight) || formData.weight <= 0) {
      setMessage("⚠️ Invalid weight. Please enter a valid weight in kg.");
      setMessageType("error");
      return;
    }

    createTicket();
  };

  const createTicket = async () => {
    try {
      const formattedShipmentType = shipmentTypeMap[formData.shipmentType] || formData.shipmentType;

      const payload = {
        ...formData,
        raised_by: formData.custom_customer_email_address,
        description: `Shipment From: ${formData.shipmentFrom}, Shipment To: ${formData.shipmentTo}, Weight: ${formData.weight}kg, Shipment Type: ${formattedShipmentType}, Details: ${formData.description}`
      };

      const response = await axios.post(
        `${FRAPPE_URL}/api/resource/HD%20Ticket`,
        { doctype: "Ticket", ...payload },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${API_KEY}:${API_SECRET}`,
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

  return ( 
    <div className="shipments">
      <h2>Submit Your Shipment Query</h2>
      <p>Our team will contact you shortly.</p>

      <div className='query-form'>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="custom_customer_name">Name:</label>
              <input
                type="text"
                id="custom_customer_name"
                name="custom_customer_name"
                placeholder="Your full name"
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
                placeholder="Your Email Address"
                value={formData.custom_customer_email_address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="custom_customer_contact_number">Number:</label>
              <input
                type="text"
                id="custom_customer_contact_number"
                name="custom_customer_contact_number"
                placeholder="Your contact Number"
                value={formData.custom_customer_contact_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="shipmentFrom">Ship From:</label>
              <input
                type="text"
                id="shipmentFrom"
                name="shipmentFrom"
                placeholder="From where you are sending your shipment"
                value={formData.shipmentFrom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="shipmentTo">Ship To:</label>
              <input
                type="text"
                id="shipmentTo"
                name="shipmentTo"
                placeholder="Where you want to send your shipment"
                value={formData.shipmentTo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="shipmentType">Type:</label>
              <select
                id="shipmentType"
                name="shipmentType"
                value={formData.shipmentType}
                onChange={handleChange}
                required
              >
                <option value="">Select Shipment Type</option>
                <option value="1">Letter (0.5kg only)</option>
                <option value="2">Document (0.5kg to 5kg only)</option>
                <option value="3">Parcel (0.5kg to 70kg)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight:</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Shipment weight in KGs"
                required
              />
            </div>
            <div className="form-group full-width">
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
          <button type="submit" className="submit-btn">Submit Query</button>
          
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

export default Shipments;