import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PoliceLogin.css"; // You can use the same file or create a separate one for signup

export default function PoliceSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    policeId: "",
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
    // Here you can add additional validation for the policeId if needed.
    console.log("Police Signup Data:", formData);
    navigate("/police-login");
  };

  return (
    <div className="police-auth-container">
      <h2>Police Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        {/* Additional field for police verification */}
        <input
          type="text"
          name="policeId"
          placeholder="Police ID"
          value={formData.policeId}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={() => navigate("/police-login")}>Login</span>
      </p>
    </div>
  );
}
