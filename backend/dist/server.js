"use strict";

var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static files from the frontend/public folder
app.use(express["static"](path.join(__dirname, '..', '..', 'frontend', 'public')));

// Fallback route to serve the React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});

// Start the server
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});