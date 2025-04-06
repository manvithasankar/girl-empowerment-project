import React, { useState, useEffect } from "react";
import "./PoliceProfile.css";

export default function PoliceProfile() {
  const [profile, setProfile] = useState({
    name: "",
    rank: "",
    badgeNumber: "",
    department: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    idNumber: "",
    profileImage: null, // Stores the selected image
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data from localStorage (simulate database fetch)
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("policeUser"));
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
          localStorage.setItem("policeUser", JSON.stringify(updatedProfile)); // Save to storage
          return updatedProfile;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Save edited details
  const handleEditClick = () => {
    if (isEditing) {
      localStorage.setItem("policeUser", JSON.stringify(profile)); // Save updated data
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="police-profile-container">
      <h2>Police Profile</h2>
      <div className="police-profile-card">
        {/* Profile Image Section */}
        <label htmlFor="imageUpload">
          <img
            src={profile.profileImage || "/default-police-profile.png"}
            alt="Police Profile"
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
        <div className="police-profile-details">
          <label>Name:</label>
          {isEditing ? (
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          ) : (
            <p>{profile.name || "Not Set"}</p>
          )}

          <label>Rank:</label>
          {isEditing ? (
            <input type="text" name="rank" value={profile.rank} onChange={handleChange} />
          ) : (
            <p>{profile.rank || "Not Set"}</p>
          )}

          <label>Badge Number:</label>
          {isEditing ? (
            <input type="text" name="badgeNumber" value={profile.badgeNumber} onChange={handleChange} />
          ) : (
            <p>{profile.badgeNumber || "Not Set"}</p>
          )}

          <label>Department:</label>
          {isEditing ? (
            <input type="text" name="department" value={profile.department} onChange={handleChange} />
          ) : (
            <p>{profile.department || "Not Set"}</p>
          )}

          <label>Date of Birth:</label>
          {isEditing ? (
            <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
          ) : (
            <p>{profile.dateOfBirth || "Not Set"}</p>
          )}

          <label>Email:</label>
          <p>{profile.email}</p>

          <label>Phone:</label>
          <p>{profile.phone}</p>

          <label>Address:</label>
          {isEditing ? (
            <input type="text" name="address" value={profile.address} onChange={handleChange} />
          ) : (
            <p>{profile.address || "Not Set"}</p>
          )}

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
