// Required packages
const express = require("express");
const fetch = require("node-fetch");
require('dotenv').config()

// Create express server
const app = express();

// Indicate the port number server will run on
const PORT = process.env.PORT || 3000;

// Set template engine
app.set("view engine", "ejs");
app.use(express.static('public'));

// Needed to parse html data for POST requests
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// GET route
app.get("/", (req, res) => {
    res.send("Mendelssohn Violin Concerto");
});

// POST route
app.post("/", (req, res) => {
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});