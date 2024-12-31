import express from "express";
import dbcon from "../dbConfig/db.js";
import cors from "cors";

const router = express.Router();
router.use(cors());

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Corrected SQL query with WHERE clause
  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  dbcon.query(sql, [email, password], (err, data) => {
    if (err) {
      // Send proper error response
      return res.status(500).send("User not found!!");
    }

    // If no user found, return an appropriate response
    if (data.length === 0) {
      return res.status(404).send("Invalid email or password");
    }

    // Send success response if user is found
    return res.status(200).send("User logged in successfully");
  });
});
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Corrected SQL query with WHERE clause
  const sql =
    "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";
  const VALUES = [name, email, password];

  dbcon.query(sql, VALUES, (err, data) => {
    // Use VALUES directly
    if (err) {
      return res.status(500).send("Error while registering user!"); // Send proper error message
    }
    // If the insertion is successful, send a success response
    return res.status(200).send("User registered successfully!");
  });
});
router.get("/api/balance", (req, res) => {
  // Here you would fetch the current balance from your database
  const balance = 1234.56; // Example balance
  res.json({ balance });
});

// Example route to fetch recent transactions
router.get("/api/transactions", (req, res) => {
  // Here you would fetch the latest transactions from your database
  const transactions = [
    { date: "2024-12-20", description: "Payment received", amount: 100 },
    { date: "2024-12-19", description: "Purchase at Store", amount: -50 },
    { date: "2024-12-18", description: "Transfer to Account", amount: -200 },
    { date: "2024-12-17", description: "Payment received", amount: 300 },
    { date: "2024-12-16", description: "Subscription fee", amount: -15 },
  ];
  res.json(transactions);
});

// Example route to add a new transaction
router.post("/api/transactions", (req, res) => {
  const { description, amount, date } = req.body;
  // Here you would save the new transaction to your database
  const newTransaction = { description, amount, date };
  res.status(201).json(newTransaction);
});
export default router;
