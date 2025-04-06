import React, { useState, useEffect } from "react";
import "./WomenProfile.css";

export default function WomenProfile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    email: "",
    idNumber: "",
    profileImage: null, // Stores the selected image
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data from localStorage (simulate database fetch)
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("womenUser"));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  // Handles input changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handles profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => {
          const updatedProfile = { ...prevProfile, profileImage: reader.result };
          localStorage.setItem("womenUser", JSON.stringify(updatedProfile)); // Save to storage
          return updatedProfile;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Save edited details
  const handleEditClick = () => {
    if (isEditing) {
      localStorage.setItem("womenUser", JSON.stringify(profile)); // Save updated data
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="women-profile-container">
      <h2>Women's Profile</h2>
      <div className="profile-card">
        {/* Profile Image Section */}
        <label htmlFor="imageUpload">
          <img
            src={profile.profileImage || "/default-women-profile.png"}
            alt="Women Profile"
            className="profile-image"
          />
        </label>
        {isEditing && (
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            className="image-upload-input"
          />
        )}

        {/* Profile Details Section */}
        <div className="profile-details">
          <label>Name:</label>
          {isEditing ? (
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          ) : (
            <p>{profile.name || "Not Set"}</p>
          )}

          <label>Age:</label>
          {isEditing ? (
            <input type="number" name="age" value={profile.age} onChange={handleChange} />
          ) : (
            <p>{profile.age || "Not Set"}</p>
          )}

          <label>Phone:</label>
          {isEditing ? (
            <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
          ) : (
            <p>{profile.phone || "Not Set"}</p>
          )}

          <label>Address:</label>
          {isEditing ? (
            <input type="text" name="address" value={profile.address} onChange={handleChange} />
          ) : (
            <p>{profile.address || "Not Set"}</p>
          )}

          <label>Email:</label>
          <p>{profile.email}</p>

          <label>ID Number:</label>
          <p>{profile.idNumber}</p>

          <button onClick={handleEditClick} className="edit-btn">
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
}
