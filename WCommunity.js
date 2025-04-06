import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WCommunity.css";

const WCommunity = () => {
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const hasJoined = localStorage.getItem("joinedWCommunity");
    if (hasJoined) {
      setIsJoined(true);
    }
  }, []);

  const handleJoinClick = () => {
    localStorage.setItem("joinedWCommunity", "true"); // Mark as joined
    setIsJoined(true);
    navigate("/chats"); // Redirect to the chats page
  };

  // If already joined, redirect directly to chats
  useEffect(() => {
    if (isJoined) {
      navigate("/chats");
    }
  }, [isJoined, navigate]);

  return (
    <div className="wcommunity-container">
      

      {!isJoined && (
        <section className="welcome-section">
          <h2>Welcome to WCommunity</h2>
          <p>A safe space for women to connect, share, and grow together.</p>
          <button className="women-join-btn" onClick={handleJoinClick}>Join Now</button>
        </section>
      )}
    </div>
  );
};

export default WCommunity;
