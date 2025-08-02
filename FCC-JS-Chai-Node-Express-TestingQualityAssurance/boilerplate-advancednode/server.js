'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');

// Set views directory to ./views/pug
app.set('views', __dirname + '/views/pug');

// Home page route
app.get('/', (req, res) => {

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
