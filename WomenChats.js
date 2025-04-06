import React, { useState } from "react";
import "./WomenChats.css";

const Chats = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "User", text: "Hello everyone!" },
    { id: 2, sender: "Member1", text: "Hi! Welcome to WCommunity." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="women-chats-container">
      {/* If the user has NOT joined, show Join Now section */}
      {!isJoined ? (
        <div className="women-join-container">
          <h2 className="women-join-heading">Engage More – Join the Women's Community</h2>
          <button className="women-join-button" onClick={() => setIsJoined(true)}>
            Join Now
          </button>
        </div>
      ) : (
        <>
          <div className="women-chat-header">
            <h2>WCommunity Chats</h2>
            <button className="women-exit-button" onClick={() => setIsJoined(false)}>
              Exit Community
            </button>
          </div>
          <div className="women-chat-box">
            {messages.map((msg) => (
              <div key={msg.id} className={`women-chat-message ${msg.sender === "You" ? "user" : "other"}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="women-chat-input">
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

export default Chats;
