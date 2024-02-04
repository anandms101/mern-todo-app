const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});