// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// 1. Configure middleware first (order matters)
// enable CORS
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

// Configure express for proxy support - move this up!
app.set("trust proxy", true);

// Static files middleware
app.use(express.static("public"));

// 2. Define routes
// Basic routing
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Request Header Parser endpoint
app.get("/api/whoami", function (req, res) {
  // Get client IP with fallbacks
  let ipaddress =
    req.headers["x-forwarded-for"] || req.ip || req.connection.remoteAddress;

  // Clean up IP format
  ipaddress = ipaddress ? ipaddress.split(",")[0].trim() : "127.0.0.1";
  if (ipaddress.includes("::ffff:")) {
    ipaddress = ipaddress.replace(/::ffff:/, "");
  }

  res.json({
    ipaddress: ipaddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// 3. Start server
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
