import React, { useState } from 'react';
import axios from 'axios';
import './Shipments.css';

// Frappe URL and API credentials
const FRAPPE_URL = "https://ups-uat.sowaanerp.com";  // Frappe server URL
const API_KEY = "a660048fb475f8f";  
const API_SECRET = "15044e3bdf6d010";  

function Shipments() {
  const [formData, setFormData] = useState({
    lead_name: "",
    email_id: "",
    mobile_no: "",
    status: "Open",
    custom_lead_type: "",  // Export/Import // Product Enquiry, Request for Information, Suggestions, Other
    custom_request_details: "", 
    custom_request_type2: "", // Additional details
  });
  const [message, setMessage] = useState("");  // To show success or error message
  const [messageType, setMessageType] = useState(""); // To track message type (success or error)
  const [customRequestType2, setCustomRequestType2] = useState('');
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
    createLead();
  };

  // Create Lead function with API Key authentication
  const createLead = async () => {
    try {
      const response = await axios.post(
        `${FRAPPE_URL}/api/resource/Lead`,
        { doctype: "Lead", ...formData },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${API_KEY}:${API_SECRET}`,  // API Key Authentication
          },
        }
      );
      setMessage("✅ Your request has been submitted successfully!");
      setMessageType("success");
      console.log("✅ Your Request Has Been Submitted successfully:", response.data);
    } catch (error) {
      setMessage("❌ Failed to create request. Please try again.");
      setMessageType("error");
      console.error("❌ Failed to create request:", error.response?.data || error.message);
    }
  };

  return (
    <div className="shipments">
      <h2>Give Your Information</h2>
      <p>ULS Team Will contact You</p>

      {/* Success/Error Alert */}
      {message && (
        <div className={`alert ${messageType === "success" ? "alert-success" : "alert-error"}`}>
          {message}
        </div>
      )}

      {/* Sign-Up Form */}
      <div className='sign-up'>
        <h3>Get a Quote</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="lead_name"
              value={formData.lead_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email_id"
              value={formData.email_id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleChange}
              required
            />
          </div>

          {/* New Field: Custom Lead Type */}
          <div className="form-group">
            <label>Product Type:</label>
            <select
              name="custom_lead_type"
              value={formData.custom_lead_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Lead Type</option>
              <option value="Export">Export</option>
              <option value="Import">Import</option>
            </select>
          </div>

          {/* New Field: Request Type */}





          
 {/* Other form fields */}

      {/* Custom Request Type 2 Dropdown */}
      <div className="form-group">
        <label htmlFor="custom_request_type2">Request Type</label>
        <select
  id="custom_request_type2"
  name="custom_request_type2"
  value={formData.custom_request_type2}
  onChange={handleChange}
  required
>
  <option value="">Select an option</option>
  <option value="Rate Inquiry">Rate Inquiry</option>
  <option value="Transit Time">Transit Time</option>
  <option value="Customs Requirements / Paper Work">Customs Requirements / Paper Work</option>
  <option value="Destination">Destination</option>
  <option value="Commodity Information">Commodity Information</option>
  <option value="Product Inquiry">Product Inquiry</option>
</select>
      </div>




          {/* New Field: Custom Request Details */}
          <div className="form-group">
            <label>Additional Details:</label>
            <textarea
              name="custom_request_details"
              value={formData.custom_request_details}
              onChange={handleChange}
              placeholder="Enter any additional details..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Get Quote</button>
        </form>
      </div>
    </div>
  );
}

export default Shipments;
