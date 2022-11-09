// Required packages
const express = require("express");
const fetch = require("node-fetch");
require('dotenv').config()

// Create express server
const app = express();

// Indicate the port number server will run on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});