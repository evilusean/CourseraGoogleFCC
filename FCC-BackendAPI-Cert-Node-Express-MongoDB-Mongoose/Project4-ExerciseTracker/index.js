const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// In-memory storage
const users = [];
const exercises = {};
const { v4: uuidv4 } = require('uuid');

// Create a new user
app.post('/api/users', (req, res) => {
  const username = req.body.username;
  if (!username) return res.status(400).json({ error: 'Username required' });
  const _id = uuidv4();
  users.push({ username, _id });
  exercises[_id] = [];
  res.json({ username, _id });
});

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Add exercise
app.post('/api/users/:_id/exercises', (req, res) => {
  const { description, duration, date } = req.body;
  const _id = req.params._id;
  const user = users.find(u => u._id === _id);
  if (!user) return res.status(400).json({ error: 'User not found' });
  if (!description || !duration) return res.status(400).json({ error: 'Description and duration required' });
  let d = date ? new Date(date) : new Date();
  if (d.toString() === 'Invalid Date') d = new Date();
  const exercise = {
    description,
    duration: parseInt(duration),
    date: d.toDateString()
  };
  exercises[_id].push(exercise);
  res.json({
    username: user.username,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date,
    _id: user._id
  });
});

// Get user log
app.get('/api/users/:_id/logs', (req, res) => {
  const _id = req.params._id;
  const user = users.find(u => u._id === _id);
  if (!user) return res.status(400).json({ error: 'User not found' });
  let log = exercises[_id] || [];
  // Optional query params
  const { from, to, limit } = req.query;
  if (from) {
    const fromDate = new Date(from);
    if (fromDate.toString() !== 'Invalid Date') {
      log = log.filter(e => new Date(e.date) >= fromDate);
    }
  }
  if (to) {
    const toDate = new Date(to);
    if (toDate.toString() !== 'Invalid Date') {
      log = log.filter(e => new Date(e.date) <= toDate);
    }
  }
  if (limit) {
    log = log.slice(0, parseInt(limit));
  }
  res.json({
    username: user.username,
    count: log.length,
    _id: user._id,
    log
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
