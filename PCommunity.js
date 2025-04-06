import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./P-Community.css"; // Ensure the filename matches exactly

const PoliceCommunity = () => {
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const hasJoined = localStorage.getItem("joinedPoliceCommunity");
    if (hasJoined) {
      setIsJoined(true);
    }
  }, []);

  const handleJoinClick = () => {
    localStorage.setItem("joinedPoliceCommunity", "true");
    setIsJoined(true);
    navigate("/policechats"); // Redirect to chat page
  };

  // If already joined, redirect directly to chats
  useEffect(() => {
    if (isJoined) {
      navigate("/policechats");
    }
  }, [isJoined, navigate]);

  return (
    <div className="policecommunity-container">
      {!isJoined && (
        <section className="police-welcome-section">
          <h2>Welcome to Police Community</h2>
          <p>A secure platform for police officers to connect and communicate.</p>
          <button className="police-join-btn" onClick={handleJoinClick}>
            Join Now
          </button>
        </section>
      )}
    </div>
  );
};

export default PoliceCommunity;
