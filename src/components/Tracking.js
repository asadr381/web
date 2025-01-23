import React from 'react';
import { Link } from 'react-router-dom';
import './Tracking.css';

function Tracking() {
  return (
    <div className="tracking">
      <h2>Track Shipments</h2>
      <p>Enter your tracking number to track the shipment.</p>

      {/* Instructions */}
      <div className="instructions">
        <p><strong>Instructions:</strong></p>
        <ul>
          <li>You can track shipments <strong>individually</strong> by entering the tracking number.</li>
          <li>You can also track <strong>multiple shipments in bulk</strong> by uploading an Excel file.</li>
          <li>If you need to download tracking data, use the download button below.</li>
        </ul>
      </div>

      {/* Redirect Buttons */}
  
      {/* Button that redirects to external link */}
      <a href="https://tracking.ulspk.com/" className="external-button" target="_blank" rel="noopener noreferrer">
        Go to Tracker
      </a>
    </div>
  );
}

export default Tracking;
