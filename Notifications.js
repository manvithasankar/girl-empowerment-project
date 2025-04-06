// PoliceNotifications.js
import React, { useState } from "react";

export default function PoliceNotifications() {
  const [activeTab, setActiveTab] = useState("calls");

  return (
    <div>
      <h1>Notifications</h1>
      <div>
        <button onClick={() => setActiveTab("calls")}>
          Calls
        </button>
        <button onClick={() => setActiveTab("messages")}>
          Messages
        </button>
      </div>
      {activeTab === "calls" ? (
        <div>
          <h2>Call Alerts</h2>
          <p>No new call notifications.</p>
        </div>
      ) : (
        <div>
          <h2>Message Alerts</h2>
          <p>No new messages.</p>
        </div>
      )}
    </div>
  );
}