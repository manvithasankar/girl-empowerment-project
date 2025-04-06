import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PoliceLogin.css"; // Import the CSS file for police auth styles

export function PoliceLogin() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated authentication logic (replace with actual API call)
    if (emailOrPhone === "manu@.com" && password === "password") {
      localStorage.setItem("user", "true");
      localStorage.setItem("userRole", "police");
      navigate("/police-home"); // Redirect to Police Home after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="police-auth-container">
      <h2>Police Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        No account?{" "}
        <span onClick={() => navigate("/police-signup")}>
          Create New One
        </span>
      </p>
    </div>
  );
}
