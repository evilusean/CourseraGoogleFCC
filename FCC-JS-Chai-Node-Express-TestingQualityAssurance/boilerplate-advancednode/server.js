'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
// I just spent 2 days trying to get this to work, it runs locally, but the tester on FCC is not passing it no matter what I do
// I'm taking a break, just got another level in WankiKani for Japanese and I need to update my vocab with the new words.
// Hopefully when I come back, something works, Future Sean Problems :
// https://www.freecodecamp.org/learn/quality-assurance/advanced-node-and-express/set-up-a-template-engine
// https://forum.freecodecamp.org/t/advanced-node-and-express/567135
// above is the 'help' forum for this challenge, where I literally just copied and pasted what they give me, it should work, but it doesn't.

const app = express();

const cors = require('cors');
app.use(cors());

app.set('view engine', 'pug');
app.set('views', './views/pug');
fccTesting(app); // For fCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
  res.render('index', { title: 'Hello', message: 'Please log in' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});