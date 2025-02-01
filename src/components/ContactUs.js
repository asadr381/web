import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import React, { useState } from 'react';
import axios from 'axios';
import './Shipments.css';

// Frappe URL and API credentials
const FRAPPE_URL = "https://ups.sowaanerp.com";
const API_KEY = "7f9ceafe1f9cb28";
const API_SECRET = "107d1e30c242a6f";  

// User-facing ticket type mapping (without "Whatsapp")
const userFacingTicketTypeMap = {
  "1": "Commodity Information",
  "2": "Customs Requirements / Paper Work",
  "3": "Product Inquiry",
  "4": "Rate Inquiry",
  "5": "Transit Time",
  "6": "Corporate / Business Account "
};

// API-facing ticket type mapping (with "Whatsapp")
const apiFacingTicketTypeMap = {
  "1": "Commodity Information Whatsapp",
  "2": "Customs Requirements / Paper Work Whatsapp",
  "3": "Product Inquiry Whatsapp",
  "4": "Rate Inquiry Whatsapp",
  "5": "Transit Time Whatsapp",
  "6": "Corporate / Business Account Whatsapp"

};

function ContactUs() {
  const [formData, setFormData] = useState({
    custom_customer_name: "",
    subject: "Website General Query",
    raised_by: "mraza@ups.com",
    agent_group: "TeleSales",
    custom_employee: "EMP603",
    ticket_type: "",
    description: "",
    custom_customer_email_address: "",
    custom_customer_contact_number: ""
  });
  const [message, setMessage] = useState("");  // To show success or error message
  const [messageType, setMessageType] = useState(""); // To track message type (success or error)

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <div className="shipments">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
     
        <span>Universal Logistics Service (Pvt.) Ltd. Authorized Service Contractor for UPS </span>
        {/* Contact Details */}
        <div className="contact-details">
          <div>
            <FaEnvelope className="contact-icon" />
            <a  style={{ color: '#ffc400' }}href="mailto:pkcustsvc@ups.com">pkcustsvc@ups.com</a>
          </div>
          <div>
            <FaWhatsapp className="contact-icon" />
            <a  style={{ color: '#ffc400' }} href="https://wa.me/92021111669877" target="_blank" rel="noopener noreferrer">
              +92 021 111 669 877
            </a>
          </div>
          <div>
      
        
          </div>
          <FaMapMarkerAlt className="contact-icon" />
          <span> D - 79, Kehkashan Clifton Block - 5, Karachi - Pakistan</span>
        </div>

        {/* Contact Form */}
        
      </div>
     

      {/* Success/Error Alert */}
      {message && (
        <div className={`alert ${messageType === "success" ? "alert-success" : "alert-error"}`}>
          {message}
        </div>
      )}

      {/* Query Form */}
      <div className='query-form'>
        <h3>Contact US</h3>
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
            <label>Request Type:</label>
            <select
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
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
