import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Importing the CSS file
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    // Handle actual sign-up (make the POST request to the backend)
    axios
      .post("http://localhost:5000/signup", { name, email, password, phone })
      .then((response) => {
        console.log("User registered successfully:", response.data);
        // Redirect or show success message
        // You can add a redirect here if needed
      })
      .catch((err) => {
        console.error("Error registering user:", err);
        setError("Error during registration, please try again.");
      });

    setError(""); // Clear any previous errors
  };

  return (
    <div className="signup-container">
      <div className="signup-header">Sign Up</div>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            id="phone"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <div className="login-prompt">
          <p>Already have an account?</p>
          <Link to="/" className="login-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
