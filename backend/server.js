const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todo = require("./models/todo");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

const connectionString = process.env.MONGO_URI;
console.log(connectionString);
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to the database…");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => console.error("Connection error:", err));

app.get("/", function (req, res, next) {
  res.send("Default route. Use /todo to get all todos.");
});

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
