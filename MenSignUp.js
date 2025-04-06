import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenLogin.css"; // Import the CSS file

export default function MenSignUp() {
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
    navigate("/men-login");
  };

  return (
    <div className="men-auth-container">
      <h2>Men Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        {/* Gender Dropdown - User must select "Male" */}
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
        </select>

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <span onClick={() => navigate("/men-login")}>Login</span>
      </p>
    </div>
  );
}