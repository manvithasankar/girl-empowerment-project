import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WomenLogin.css"; // Import the CSS file

export default function WomenSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", formData);
    navigate("/women-login");
  };

  return (
    <div className="auth-container">
      <h2>Women Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        {/* Gender Dropdown - User must select "Female" */}
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="" disabled>Select Gender</option>
          <option value="Female">Female</option>
        </select>

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <span onClick={() => navigate("/women-login")}>Login</span>
      </p>
    </div>
  );
}
