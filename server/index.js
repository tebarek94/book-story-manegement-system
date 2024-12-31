import express from "express";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import dbcon from "./dbConfig/db.js";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 400;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", router);
dbcon.connect((err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    app.listen(port, () => {
      console.log("Database is connected");
      console.log(`Server is listening http://localhost:${port}`);
    });
  }
});
