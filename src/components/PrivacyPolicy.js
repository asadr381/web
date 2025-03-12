import React from 'react';
import './PrivacyPolicy.css';
import { motion } from 'framer-motion';
import wa from '../img/wa.png';
function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Last updated: January 24, 2025</p>
      
      <section>
        <h3>1. Introduction</h3>
        <p>
          We at Universal Logistics Services (ULS), an authorized service contractor of UPS in Pakistan, respect your concerns about privacy. This Privacy Notice describes the 
          types of personal information we collect about consumers, how we may use the information, and with whom we 
          may share it. The notice also describes the measures we take to safeguard your personal information.
        </p>
        <p>
          In addition, we tell you how you can ask us to:
        </p>
        <ul>
          <li>Access or change the personal information we maintain about you.</li>
          <li>Withdraw consent you previously provided to us.</li>
          <li>Refrain from sending you certain communications.</li>
          <li>Answer questions you may have about our privacy practices.</li>
        </ul>
        <p>
          This Privacy Notice is not a contract and does not create any contractual rights or obligations. It does not apply to any other entities that maintain separate privacy notices. Our privacy practices may vary 
          among the countries or territories in which we operate to reflect local practices and legal requirements.
        </p>
      </section>

      <section>
        <h3>2. Information We Collect</h3>
        <p>
          We may obtain consumer personal information in connection with various activities, such as:
        </p>
        <ul>
          <li>Use of the ULS websites and applications.</li>
          <li>Shipping activities, including delivery and collection of shipments.</li>
          <li>Requests to track shipments or answer questions.</li>
          <li>Participation in events and promotions.</li>
          <li>Calls placed or web-based chats with customer service, which may be recorded.</li>
        </ul>
        <p>
          The types of personal information we may obtain include:
        </p>
        <ul>
          <li>Contact information (name, company name, address, email, and phone number).</li>
          <li>Shipping details (sender and consignee information, proof of delivery signatures, account numbers).</li>
          <li>Identity verification information.</li>
          <li>Social media handles and interactions with ULS-related content.</li>
          <li>Geolocation data from mobile devices when using certain features.</li>
          <li>Payment and financial information, including tax identification numbers.</li>
          <li>Session analytics and web tracking data (IP address, browser type, cookies, and tracking pixels).</li>
        </ul>
      </section>

      <section>
        <h3>3. How We Use Your Information</h3>
        <p>
          We do not sell or otherwise share personal information about you, except as described in this Privacy Notice. 
          To perform our collection and delivery services, we share shipping information with third parties such as 
          shippers, consignees, third-party payers, and recipients.
        </p>
        <p>
          Additionally, we may share personal information with ULS Business Partners and other trusted third parties for:
        </p>
        <ul>
          <li>Providing customer support and improving services.</li>
          <li>Complying with legal obligations and responding to law enforcement requests.</li>
          <li>Facilitating logistics, supply chain management, and international trade services.</li>
          <li>Enhancing location-based services and developing accurate maps.</li>
        </ul>
        <p>
          We may also disclose your information if required by law or during business transfers, such as mergers or acquisitions.
        </p>
      </section>

      <section>
        <h3>4. Data Protection & Security</h3>
        <p>
          We maintain administrative, technical, and physical safeguards designed to protect the personal information 
          you provide against accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use.
        </p>
      </section>

      <section>
        <h3>5. Third-Party Sharing</h3>
        <p>
          We do not sell your data. However, we may share it with ULS and trusted partners for shipping purposes.
        </p>
      </section>

      <section>
        <h3>6. Your Rights</h3>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>Access, modify, or delete your data.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Request a copy of your stored data.</li>
        </ul>
      </section>

      <section>
        <h3>7. Changes to This Policy</h3>
        <p>
          We may update this policy periodically. Please review it regularly.
        </p>
      </section>

      <section>
        <h3>8. Contact Us</h3>
        <p>
          If you have any questions about our privacy policy, contact us at 
          <a href="mailto:support@ulspk.com"> pkcustsvc@ups.com</a>.
        </p>
      </section>
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
  );
}

export default PrivacyPolicy;
