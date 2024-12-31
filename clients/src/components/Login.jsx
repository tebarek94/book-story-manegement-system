import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css"; // Importing the CSS file
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Login user");

    axios
      .post("http://localhost:5000/user/login", { email, password }) // Send email and password in the request body
      .then((response) => {
        console.log(response); // Log the response
        // If login is successful, navigate to home page
        if (response.status === 200) {
          navigate("/home"); // Redirect to home page
        }
      })
      .catch((err) => {
        console.log(err); // Log the error if login fails
      });
  };

  return (
    <div className="login-container">
      <div className="login-header">Login</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
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

        <button type="submit" className="login-button">
          Login
        </button>

        <div className="signup-prompt">
          <p>Don't have an account?</p>
          <Link to="/signup" className="signup-link">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
