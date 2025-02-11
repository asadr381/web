import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Shipments.css';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

// Frappe URL and API credentials
const FRAPPE_URL = process.env.REACT_APP_FRAPPE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_SECRET = process.env.REACT_APP_API_SECRET;

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
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@(ups\.com|gmail\.com|yahoo\.com)$/i;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{9,13}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setMessage("⚠️ Please complete the reCAPTCHA.");
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
        description: `Shipment From: ${formData.shipmentFrom}, Shipment To: ${formData.shipmentTo}, Weight: ${formData.weight}kg, Shipment Type: ${formattedShipmentType}, Details: ${formData.description}`,
        recaptchaResponse: recaptchaValue // Include the reCAPTCHA response in the payload
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

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="shipments">
      <h2>Submit Your Shipment Query</h2>
      <p>Our team will contact you shortly.</p>

      <div className='query-form'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="custom_customer_name"
              value={formData.custom_customer_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="custom_customer_email_address"
              value={formData.custom_customer_email_address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="custom_customer_contact_number"
              value={formData.custom_customer_contact_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Shipment Country From:</label>
            <input
              type="text"
              name="shipmentFrom"
              value={formData.shipmentFrom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Shipment Country To:</label>
            <input
              type="text"
              name="shipmentTo"
              value={formData.shipmentTo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Shipment Type:</label>
            <select
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
            <label>Shipment Weight (kg):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter your query details..."
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
             <ReCAPTCHA
                   ref={recaptchaRef}
               sitekey="6LegsNMqAAAAAFM-V34ivxA2qP1RVFZQb80BndgY"
                 onChange={onRecaptchaChange}
                />
                 </div>
          </div>
          <button type="submit" className="submit-btn">Submit Query</button>
          <p>We respect your privacy. Your information is only used to contact you for your issues or provide shipping rates.</p>
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '40px', height: '40px' }} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Shipments;