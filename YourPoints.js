import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./YourPoints.css"; // Ensure this CSS file is created and linked properly

export default function YourPoints() {
  const [points, setPoints] = useState(0);

  return (
    <div className="points-container">
      <h1>My Points</h1>
      <p>Earn points by helping and watching videos</p>
      <div className="points-circle">
        <FaStar className="star-icon" />
        <span className="points-value">{points}</span>
      </div>
    </div>
  );
}