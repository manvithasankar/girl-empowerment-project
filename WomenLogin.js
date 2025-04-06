import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WomenLogin.css"; // Add styles for form design

export default function WomenLogin() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication logic
    console.log("Logging in with:", emailOrPhone, password);
    // Set user token and role (for demo purposes)
    localStorage.setItem("user", "dummyToken");
    localStorage.setItem("userRole", "woman");
    // Redirect to WomenHome page after successful login
    navigate("/women-home");
  };

  return (
    <div className="auth-container">
      <h2>Women Login</h2>
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
        <span onClick={() => navigate("/women-signup")}>
          Create New One
        </span>
      </p>
    </div>
  );
}
