import React, { useState } from "react";
import "./MenProfile.css"
import men from "../images/men.jpg"

export default function MenProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    contact: "+91 9876543210",
    gender: "Male",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="men-profile-container">
      <h1>Men's Profile</h1>
      <div className="men-profile-card">
        <img src={men} alt="Profile" className="men-profile-pic" />
        <div className="men-profile-details">
          <label>Name:</label>
          {isEditing ? (
            <input type="text" name="name" value={userData.name} onChange={handleChange} />
          ) : (
            <p>{userData.name}</p>
          )}

          <label>Email:</label>
          {isEditing ? (
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
          ) : (
            <p>{userData.email}</p>
          )}

          <label>Contact:</label>
          {isEditing ? (
            <input type="text" name="contact" value={userData.contact} onChange={handleChange} />
          ) : (
            <p>{userData.contact}</p>
          )}

          <label>Gender:</label>
          <p>{userData.gender}</p>

          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
}
