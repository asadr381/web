import React, { useState } from 'react';
import axios from 'axios';
import './Shipments.css';

// Frappe URL and API credentials
const FRAPPE_URL = "https://ups.sowaanerp.com";
const API_KEY = "6deab0c07f750cc";
const API_SECRET = "588f60f1a3a5255";

// User-facing ticket type mapping (without "Whatsapp")
const userFacingTicketTypeMap = {

  "1": "Product Inquiry",
  "2": "Rate Inquiry",
  "3": "Transit Time",
};

// API-facing ticket type mapping (with "Whatsapp")
const apiFacingTicketTypeMap = {

  "1": "Product Inquiry",
  "2": "Rate Inquiry",
  "3": "Transit Time",

};

// Shipment type mapping
const shipmentTypeMap = {
  "1": "Letter (0.5kg only)",
  "2": "Document (0.5kg to 5kg only)",
  "3": "Parcel (0.5kg to 70kg)"
};

function Shipments() {
  const [formData, setFormData] = useState({
    custom_customer_name: "",
    subject: "Website Query",
    raised_by: "whatsapp@erp.ulspk.com",
    agent_group: "TeleSales",
    custom_employee: "WebAPI",
    ticket_type: "",
    description: "",
    custom_customer_email_address: "",
    custom_customer_contact_number: "",
    shipmentFrom: "",
    shipmentTo: "",
    shipmentType: "",
    weight: ""
  });
  const [message, setMessage] = useState(""); // To show success or error message
  const [messageType, setMessageType] = useState(""); // To track message type (success or error)

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@(ups\.com|gmail\.com|yahoo\.com)$/i;
    return emailRegex.test(email);
  };

  // Validate phone number
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{9,13}$/;
    return phoneRegex.test(phone);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!isValidEmail(formData.custom_customer_email_address)) {
      setMessage("⚠️ Invalid email. Please enter a valid email ending with @ups.com, @gmail.com, or @yahoo.com.");
      setMessageType("error");
      return;
    }

    // Validate phone number
    if (!isValidPhoneNumber(formData.custom_customer_contact_number)) {
      setMessage("⚠️ Invalid phone number. Please enter a valid phone number (9 to 13 digits).");
      setMessageType("error");
      return;
    }

    // Validate shipment type
    if (!shipmentTypeMap[formData.shipmentType]) {
      setMessage("⚠️ Invalid shipment type. Please select a valid option.");
      setMessageType("error");
      return;
    }

    // Validate weight
    if (isNaN(formData.weight) || formData.weight <= 0) {
      setMessage("⚠️ Invalid weight. Please enter a valid weight in kg.");
      setMessageType("error");
      return;
    }

    // If all validations pass, create the ticket
    createTicket();
  };

  // Create Ticket function with API Key authentication
  const createTicket = async () => {
    try {
      // Map the selected ticket type key to the API-facing value
      const formattedTicketType = apiFacingTicketTypeMap[formData.ticket_type];
      const formattedShipmentType = shipmentTypeMap[formData.shipmentType] || formData.shipmentType;

      const payload = {
        ...formData,
        ticket_type: formattedTicketType,
        description: `Shipment From: ${formData.shipmentFrom}, Shipment To: ${formData.shipmentTo}, Weight: ${formData.weight}kg, Shipment Type: ${formattedShipmentType}`
      };

      const response = await axios.post(
        `${FRAPPE_URL}/api/resource/HD%20Ticket`,
        { doctype: "Ticket", ...payload },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${API_KEY}:${API_SECRET}`, // API Key Authentication
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
      <h2>Submit Your Query</h2>
      <p>Our team will contact you shortly.</p>

      {/* Success/Error Alert */}
      {message && (
        <div className={`alert ${messageType === "success" ? "alert-success" : "alert-error"}`}>
          {message}
        </div>
      )}

      {/* Query Form */}
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
            <label>Request Type:</label>
            <select
              name="ticket_type"
              value={formData.ticket_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Request Type</option>
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
          <button type="submit" className="submit-btn">Submit Query</button>
        </form>
      </div>
    </div>
  );
}

export default Shipments;
