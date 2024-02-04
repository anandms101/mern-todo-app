const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
