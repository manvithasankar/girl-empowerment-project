import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenLogin.css"; // Ensure the CSS file exists

export default function MenLogin() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", emailOrPhone, password);

    // Simulating authentication
    localStorage.setItem("user", "dummyToken");
    localStorage.setItem("userRole", "man");

    // Redirect to MenHome page after login
    navigate("/men-home");
  };

  return (
    <div className="men-auth-container">
      <h2>Men Login</h2>
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
        <span onClick={() => navigate("/men-signup")}>Create New One</span>
      </p>
    </div>
  );
}
