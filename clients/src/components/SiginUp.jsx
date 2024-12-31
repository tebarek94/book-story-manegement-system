import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignUp.css"; // Importing the CSS file
import axios from "axios";

function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up user");

    // Send all the necessary data: name, email, and password
    axios
      .post("http://localhost:5000/user/signup", { name, email, password }) // Send all 3 fields
      .then((response) => {
        console.log(response); // Log the response
        // If sign up is successful, navigate to login page
        if (response.status === 200) {
          navigate("/"); // Redirect to login page after successful sign up
        }
      })
      .catch((err) => {
        console.log(err); // Handle errors during sign up
      });
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
