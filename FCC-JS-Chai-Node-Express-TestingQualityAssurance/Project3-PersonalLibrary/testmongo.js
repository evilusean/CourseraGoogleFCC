// test-mongo.js
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!');
  process.exit(0);
});
mongoose.connection.on('error', err => {
  console.error('MongoDB error:', err);
  process.exit(1);
});