import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";


export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const admins = [
    { email: "manvithasankar.1@gmail.com", password: "Guntupalli@78" },
    { email: "gnksravanthi@gmail.com", password: "Sravanthi@2005" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const admin = admins.find((admin) => admin.email === email && admin.password === password);

    if (admin) {
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
