import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReportIssue.css";

export default function WomenComplaint() {
  const [location, setLocation] = useState("Fetching location...");
  const [issue, setIssue] = useState("");
  const [customIssue, setCustomIssue] = useState("");
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to get city name from coordinates
  const reverseGeocode = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=en`
      );
      const data = await response.json();
      return (
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        data.address?.state ||
        "Unknown Location"
      );
    } catch (error) {
      console.error("Geocoding error:", error);
      return "Location not found";
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const city = await reverseGeocode(position.coords.latitude, position.coords.longitude);
          setLocation(city);
        },
        (error) => {
          console.error("Location error:", error);
          setLocation("Location not granted");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!issue || (issue === "others" && customIssue.trim() === "")) {
      alert("Please select an issue type and specify if 'Others' is selected.");
      return;
    }
    if (!severity) {
      alert("Please select a severity rating.");
      return;
    }

    setIsSubmitting(true);

    const reportData = {
      issue: issue === "others" ? customIssue : issue,
      severity,
      location,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await axios.post("http://localhost:5000/api/women-report", reportData);
      setMessage(res.data.message);
    } catch (err) {
      console.error("Error submitting report:", err);
      setMessage("Failed to submit report");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="report-container">
      <h1 className="page-title">Women's Complaint Form</h1>
      
      <div className="location-box">
        <p className="location-text"><strong>Location:</strong> {location}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="report-form">
        <label>Select Issue: <span className="required">*</span></label>
        <select onChange={(e) => setIssue(e.target.value)} required>
          <option value="">Choose an issue</option>
          <option value="physical abuse">Physical Abuse</option>
          <option value="harassment">Harassment</option>
          <option value="stalking">Stalking</option>
          <option value="cyber-crime">Cyber Crime</option>
          <option value="domestic violence">Domestic Violence</option>
          <option value="others">Others</option>
        </select>
        
        {issue === "others" && (
          <input
            type="text"
            placeholder="Describe your issue"
            onChange={(e) => setCustomIssue(e.target.value)}
            required
          />
        )}
        
        <label>Select Severity: <span className="required">*</span></label>
        <select onChange={(e) => setSeverity(e.target.value)} required>
          <option value="">Choose severity</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        
        <button type="submit" disabled={isSubmitting || location === "Fetching location..."}>
          🚨 {isSubmitting ? "Submitting..." : "Submit Report"}
        </button>
      </form>
      
      {message && <p className="response-message">{message}</p>}
    </div>
  );
}
