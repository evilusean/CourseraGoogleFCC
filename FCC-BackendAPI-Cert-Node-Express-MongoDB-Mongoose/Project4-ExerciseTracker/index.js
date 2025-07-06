// Import required modules
const express = require('express') // Express framework for building web APIs
const app = express() // Create an Express application instance
const cors = require('cors') // CORS middleware to allow cross-origin requests
require('dotenv').config() // Load environment variables from .env file

// Enable CORS for all routes (so FCC and others can access your API)
app.use(cors())
// Serve static files from the 'public' directory (like style.css)
app.use(express.static('public'))
// Serve the main HTML page at the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
// Middleware to parse URL-encoded bodies (from forms)
app.use(express.urlencoded({ extended: false }));
// Middleware to parse JSON bodies (if sent)
app.use(express.json());

// In-memory storage for users and their exercises
const users = []; // Array to store user objects: { username, _id }
const exercises = {}; // Object to store exercises per user: { _id: [ { description, duration, date } ] }
const { v4: uuidv4 } = require('uuid'); // Import uuid for generating unique user IDs

// Endpoint to create a new user
app.post('/api/users', (req, res) => {
  const username = req.body.username; // Get username from form body
  if (!username) return res.status(400).json({ error: 'Username required' }); // Validate input
  const _id = uuidv4(); // Generate a unique ID for the user
  users.push({ username, _id }); // Add user to users array
  exercises[_id] = []; // Initialize empty exercise log for this user
  res.json({ username, _id }); // Respond with the new user object
});

// Endpoint to get all users
app.get('/api/users', (req, res) => {
  res.json(users); // Respond with the array of all users
});

// Endpoint to add an exercise to a user
app.post('/api/users/:_id/exercises', (req, res) => {
  const { description, duration, date } = req.body; // Get exercise details from form body
  const _id = req.params._id; // Get user ID from URL parameter
  const user = users.find(u => u._id === _id); // Find the user by ID
  if (!user) return res.status(400).json({ error: 'User not found' }); // Validate user
  if (!description || !duration) return res.status(400).json({ error: 'Description and duration required' }); // Validate input
  let d = date ? new Date(date) : new Date(); // Use provided date or current date
  if (d.toString() === 'Invalid Date') d = new Date(); // Fallback to current date if invalid
  const exercise = {
    description, // Exercise description
    duration: parseInt(duration), // Duration as a number
    date: d.toDateString() // Date as a readable string (e.g., 'Mon Jan 01 1990')
  };
  exercises[_id].push(exercise); // Add exercise to user's log
  // Respond with the exercise object and user info
  res.json({
    username: user.username,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date,
    _id: user._id
  });
});

// Endpoint to get a user's exercise log
app.get('/api/users/:_id/logs', (req, res) => {
  const _id = req.params._id; // Get user ID from URL parameter
  const user = users.find(u => u._id === _id); // Find the user by ID
  if (!user) return res.status(400).json({ error: 'User not found' }); // Validate user
  let log = exercises[_id] || []; // Get user's exercise log
  // Optional query parameters for filtering log
  const { from, to, limit } = req.query;
  if (from) {
    const fromDate = new Date(from);
    if (fromDate.toString() !== 'Invalid Date') {
      log = log.filter(e => new Date(e.date) >= fromDate); // Filter by start date
    }
  }
  if (to) {
    const toDate = new Date(to);
    if (toDate.toString() !== 'Invalid Date') {
      log = log.filter(e => new Date(e.date) <= toDate); // Filter by end date
    }
  }
  if (limit) {
    log = log.slice(0, parseInt(limit)); // Limit number of results
  }
  // Respond with user info, count, and log array
  res.json({
    username: user.username,
    count: log.length,
    _id: user._id,
    log
  });
});

// Start the server and listen on the specified port
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
