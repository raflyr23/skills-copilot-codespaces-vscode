// Create web server
// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Use body parser to read POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Add a new comment
app.post('/comments', function(req, res) {
  var comment = {
    id: Date.now(), // Generate unique id