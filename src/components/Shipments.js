import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Shipments.css';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import guide from '../img/guide.PNG';

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
  const [isHovered, setIsHovered] = useState(false);

  return ( <div> 
   


   <div 
      className="shipping-info-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="shipping-info-heading">Tariff Guide </h2>
      <motion.img
  src={guide}
  alt="Business Growth"
  className="hero-image"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  style={{
    display: "block",
    margin: "0 auto",
    width: "100%",
    borderRadius: "8px",
  }}
/>

      {isHovered && (
        <div className="shipping-info-details">
          <p>
            <strong>Zone</strong><br />
            To determine the zone number, see Worldwide zones.
          </p>
          <p>
            <strong>Billable weight – for small package shipments</strong><br />
            Billable weight is the weight used to calculate the rate. For international
            services, the billable weight will be the greater of the dimensional weight as
            compared to the actual weight.
          </p>
          <p>
            <strong>How To Calculate Billable Weight</strong><br />
            Determine Actual Weight: Use any standard scale to determine the actual
            weight of your package. Increase any fraction to the next half kilogram.<br />
            Determine Dimensional Weight: Divide the cubic size of your package 
            (length x width x height, rounding each measurement to the nearest whole 
            centimeter) in centimeters by 5,000. Refer to the figure at the bottom of this 
            page. Increase any fraction to the next half kilogram.<br />
            Determine Billable Weight: Compare the package’s actual weight to its 
            dimensional weight. The larger of the two weights is the billable weight and 
            should be used to calculate the rate.<br />
            For multiple-package shipments, total the billable weight of all packages in 
            the shipment.
          </p>
          <p>
            All rates exclude any taxes, duties and surcharges that may be imposed pursuant 
            to local regulations.
          </p>
          <p>
            <strong>Arrange a collection</strong><br />
            Select “Schedule a Collection” on the Pakistan homepage at www.ups.com or 
            call UPS on +92-21-111-669-877.
          </p>
          <p>
            <strong>UPS Express Envelope</strong><br />
            For correspondence and documents only. There is no limit on weight or 
            number of pages you may enclose in a UPS Express Envelope.
          </p>
          <p>
            <strong>Letter weight limit</strong><br />
            Letter rates apply for international documents. There is a weight limit of 0.5kg 
            for documents enclosed in an Express Envelope. Document or Non-Document 
            rates will apply for envelopes weighing over 0.5kg.
          </p>
          <p>
            <strong>Maximum weight</strong><br />
            The maximum weight for an individual package is 70kg. If you need to ship 
            single packages in excess of 70kg, please refer to our UPS Worldwide Express 
            Freight service or call UPS on +92-21-111-669-877.
          </p>
          <p>
            To determine the rate for a shipment weighing in total more than 70kg, 200kg 
            (UPS Express Saver) or 100kg (UPS Expedited), add the total billable weight by 
            the appropriate price shown.
          </p>
          <p>
            The amount billed will be the result of the calculation, or the minimum rate 
            shown, whichever is the greater.
          </p>
          <p>
            <strong>Additional Information:</strong><br />
            Weight and Size Limits<br />
            • Maximum weight per package is 70kg.<br />
            • Maximum length per package is 270cm.<br />
            • Maximum size per package is 419cm in length and girth [(2 x width) + 
            (2 x height)] combined.<br />
            • There is no limit to the total shipment weight or number of packages in a 
            shipment.
          </p>
        </div>
      )}
    </div>
  

   







   



    
    <div className="shipments">
      <h2>Submit Your Shipment Query</h2>
      <p>Our team will contact you shortly.</p>

      <div className='query-form'>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="custom_customer_name"
                placeholder="Your full name"
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
                placeholder="Your Email Address"
                value={formData.custom_customer_email_address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Number:</label>
              <input
                type="text"
                name="custom_customer_contact_number"
                placeholder="Your contact Number"
                value={formData.custom_customer_contact_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Ship From:</label>
              <input
                type="text"
                name="shipmentFrom"
                placeholder="From where you are sending your shipment"
                value={formData.shipmentFrom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Ship To:</label>
              <input
                type="text"
                name="shipmentTo"
                   placeholder="Where you want to send your shipment"
                value={formData.shipmentTo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Type:</label>
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
              <label>Weight:</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Shipment weight in KGs"
                required
              />
            </div>
            <div className="form-group full-width">
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
          </div>
          <div className="form-group full-width">
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
    </div>
  );
}

export default Shipments;