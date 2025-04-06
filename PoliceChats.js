import React, { useState } from "react";
import "./PoliceChats.css";

const PoliceChats = () => {
  const [isJoined, setIsJoined] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, sender: "User", text: "Hello Officers!" },
    { id: 2, sender: "Officer1", text: "Welcome to the Police Community!" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="chats-container">
      {!isJoined ? (
        <div className="join-container">
          <h2 className="join-heading">Stay Connected – Join the Police Community</h2>
          <button className="join-button" onClick={() => setIsJoined(true)}>
            Join Now
          </button>
        </div>
      ) : (
        <>
          <div className="chat-header">
            <h2>Police Community Chats</h2>
            <button className="exit-button" onClick={() => setIsJoined(false)}>
              Exit Community
            </button>
          </div>
          <div className="chat-box">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender === "You" ? "user" : "other"}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PoliceChats;
