const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Adjust this path if your 'index.js' is located elsewhere

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes - Make sure this includes '/api' as the base path
app.use('/api', routes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
