// server.js

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Ensure this path is correct based on your project structure

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use(routes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

// Log mongoose queries
mongoose.set('debug', true);

// Event listeners for the mongoose connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
