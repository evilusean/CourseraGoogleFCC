// Import the express module to create the web server
var express = require('express');
// Import the cors module to enable Cross-Origin Resource Sharing
var cors = require('cors');
// Load environment variables from a .env file into process.env
require('dotenv').config()
// Import multer, a middleware for handling multipart/form-data (file uploads)
const multer = require('multer'); // Import multer for file uploads

// Create an instance of the express application
var app = express();
// Configure multer to save uploaded files to the 'uploads/' directory
const upload = multer({ dest: 'uploads/' }); // Configure multer to save files to 'uploads/'

// Enable CORS for all routes, allowing requests from any origin
app.use(cors());
// Serve static files (like CSS) from the 'public' directory at the '/public' route
app.use('/public', express.static(process.cwd() + '/public'));

// Route for the homepage: serves the main HTML file when the root URL is accessed
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html'); // Send the index.html file as the response
});

// POST endpoint to handle file upload and return metadata
// 'upload.single('upfile')' processes a single file upload with the field name 'upfile'
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  // If no file was uploaded, respond with an error
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // Respond with a JSON object containing the file's original name, MIME type, and size in bytes
  res.json({
    name: req.file.originalname, // The original name of the uploaded file
    type: req.file.mimetype,     // The MIME type of the uploaded file
    size: req.file.size          // The size of the uploaded file in bytes
  });
});

// Set the port to the value from the environment variable PORT, or default to 3000
const port = process.env.PORT || 3000;
// Start the server and listen on the specified port
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
