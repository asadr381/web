import React, { useState } from 'react';
import axios from 'axios';
import './Tracking.css';

const ShipmentDetails = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentDetails, setShipmentDetails] = useState({
    number: '',
    firstSixDigits: '',
    currentStatus: '',
    formattedDeliveryDate: '',
    formattedActivities: [],
    formattedLastScanDate: '',
    formattedLastScanTime: '',
    lastScanCountry: '',
    receivedBy: '',
    destinationCountry: '',
    destinationCity: '',
    originCountry: '',
    originCity: '',
    packageCount: '',
    dimWeight: '',
    weight: '',
    service: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiBaseUrl = 'https://excel-api-0x2r.onrender.com/track/';  

  const handleTrackShipment = async () => {
    if (!trackingNumber) {
      setError('Tracking number is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiBaseUrl}${trackingNumber}`);
      const packageData = response.data?.trackResponse?.shipment[0]?.package[0];

      if (packageData) {
        const height = packageData.dimension?.height || 0;
        const length = packageData.dimension?.length || 0;
        const width = packageData.dimension?.width || 0;
        const dimWeight = (length * width * height) / 5000;

        const referenceNumber = packageData.referenceNumber?.find(ref => ref.code === "13")?.number || "N/A";
        const firstSixDigits = referenceNumber.slice(0, 6);
        const deliveryDate = packageData.deliveryDate?.[0]?.date;
        const formattedDeliveryDate = deliveryDate
          ? `${deliveryDate.slice(0, 4)}-${deliveryDate.slice(4, 6)}-${deliveryDate.slice(6, 8)}`
          : "N/A";

        const formattedActivities = packageData.activity?.map(activity => ({
          date: activity.date ? `${activity.date.slice(0, 4)}-${activity.date.slice(4, 6)}-${activity.date.slice(6, 8)}` : "",
          description: activity.status.description || "",
          city: activity.location.address.city || "",
          country: activity.location.address.country || "",
          time: activity.time ? `${activity.time.slice(0, 2)}:${activity.time.slice(2, 4)}:${activity.time.slice(4, 6)}` : ""
        })) || [];

        const formattedLastScanDate = formattedActivities[0]?.date || "N/A";
        const formattedLastScanTime = formattedActivities[0]?.time || "N/A";
        const lastScanCountry = formattedActivities[0]?.country || "N/A";

        setShipmentDetails({
          number: trackingNumber,
          firstSixDigits,
          currentStatus: packageData.currentStatus?.description || "",
          formattedDeliveryDate,
          formattedActivities,
          formattedLastScanDate,
          formattedLastScanTime,
          lastScanCountry,
          receivedBy: packageData.deliveryInformation?.receivedBy || "",
          destinationCountry: packageData.packageAddress?.[1]?.address?.countryCode || "",
          destinationCity: packageData.packageAddress?.[1]?.address?.city || "",
          originCountry: packageData.packageAddress?.[0]?.address?.countryCode || "",
          originCity: packageData.packageAddress?.[0]?.address?.city || "",
          packageCount: packageData.packageCount || "",
          dimWeight: dimWeight ? dimWeight.toFixed(2) : "",
          weight: packageData.weight?.weight || "",
          service: packageData.service?.description || ""
        });
      } else {
        setError("No shipment details found.");
      }
    } catch (error) {
      console.error("Error fetching shipment details", error);
      setError("An error occurred while fetching shipment details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shipment-details">
      <h2>Track Shipment</h2>

      <div className="input-container">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter Tracking Number"
        />
        <button onClick={handleTrackShipment} disabled={loading} className="track-button">
          {loading ? 'Loading...' : 'Track'}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="details-grid">
        <div><strong>ICIRS Number:</strong> {shipmentDetails.firstSixDigits}</div>
        <div><strong>Status:</strong> {shipmentDetails.currentStatus}</div>
        <div><strong>Delivery Date:</strong> {shipmentDetails.formattedDeliveryDate}</div>
        <div><strong>Last Scan Date:</strong> {shipmentDetails.formattedLastScanDate} at {shipmentDetails.formattedLastScanTime} Local Time</div>
        <div><strong>Last Scan Country:</strong> {shipmentDetails.lastScanCountry}</div>
        <div><strong>Received By:</strong> {shipmentDetails.receivedBy}</div>
        <div><strong>Destination Country:</strong> {shipmentDetails.destinationCountry}</div>
        <div><strong>Destination City:</strong> {shipmentDetails.destinationCity}</div>
        <div><strong>Origin Country:</strong> {shipmentDetails.originCountry}</div>
        <div><strong>Origin City:</strong> {shipmentDetails.originCity}</div>
        <div><strong>Package Count:</strong> {shipmentDetails.packageCount}</div>
        <div><strong>Dimension Weight:</strong> {shipmentDetails.dimWeight}</div>
        <div><strong>Weight:</strong> {shipmentDetails.weight}</div>
        <div><strong>Service:</strong> {shipmentDetails.service}</div>
      </div>

      {/* Detailed View Button */}
      {shipmentDetails.number && (
        <div className="detailed-view-container">
          <a 
            href={`https://tracking.ulspk.com/shipment-details?trackingNumber=${shipmentDetails.number}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="detailed-view-button"
          >
            Detailed View
          </a>
        </div>
      )}

      {/* Loading Popup */}
      {loading && (
        <div className="loading-popup">
          <div className="spinner"></div>
          <p>Loading, please wait...</p>
        </div>
      )}
    </div>
  );
};

export default ShipmentDetails;
