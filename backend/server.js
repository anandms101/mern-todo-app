const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todo = require("./models/todo");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/todo", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
});

app.post("/todo/new", async (req, res) => {
  const newTask = await todo.create(req.body);
  res.status(201).json({ newTask });
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

const port = process.env.PORT || 3000;

const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
