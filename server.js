// server.js

const express = require('express');
const mongoose = require('mongoose');
require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your routes here
// const routes = require('./routes');
// app.use(routes);

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
});
