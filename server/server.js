require("dotenv").config();
const express = require("express");
//  Establishes which port to use and if others aren't available it will use 3001
const PORT = process.env.PORT || 3001;

// Establish a connection to our database
const db = require("../server/config/connection");
// Create a route path
const routes = require("./routes");

// Middleware
const app = express();

// Middleware configuration functionality
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// This is a database event listener that will listen for connections on the specified port
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`);
  });
});
