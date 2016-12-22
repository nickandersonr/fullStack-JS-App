'use strict'

// dependencies
const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

var path = require('path');

// middleware
app.use(function(req, res, next) {
  console.log("middleware hit");
  console.log("%s request to %s", req.method, req.path);
  next();
});

// static assets
app.use(express.static(__dirname + '../public'));

// home controller
app.get('/', function(req, res) {
  console.log("home controller hit");
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

// taquerias api index route
app.get('/backend/cardsAA', function (req, res) {
  res.json(cards); // render all taquerias
});

// start server
app.listen(port);
console.log('Server started on', port);