import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Importing the CSS file
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setLoginUser] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:5000/")
      .then((respons) => alert(setLoginUser("User Login successfully")))
      .catch((err) => console.log(err));
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    // Handle actual login (e.g., API call)
    console.log("Logging in with", email, password);
    setError(""); // Clear any previous errors
  };

  return (
    <div className="login-container">
      <div className="login-header">Login</div>
      <form onSubmit={handleSubmit} className="login-form">
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

        {error && <div className="error-message">{error}</div>}

        <button
          type="submit"
          className="login-button"
          onClick={() => alert(loginUser)}
        >
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
