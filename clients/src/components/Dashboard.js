import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2> Finance Management System Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/products">Add Product</Link>
          </li>
          <li>
            <Link to="/listofProducts">See List of Products</Link>
          </li>
          <li>
            <Link to="/transactions">Recent Transactions List</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to your Dashboard</h1>
        <p>
          This is the main content area where you can manage your products, view
          transactions, and perform other administrative tasks.
        </p>
        <Link to="/products">
          <button>Add a New Product</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
