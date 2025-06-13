// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

//---------------- boilerplate ----------------

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

//--------------------- Request Header Parser API ---------------------

// Enable trust proxy before routes
app.set("trust proxy", true);

// Header parser endpoint
app.get("/api/whoami", (req, res) => {
  // Get client IP with fallbacks
  const ipaddress = (
    req.headers["x-forwarded-for"] ||
    req.ip ||
    req.socket.remoteAddress ||
    "127.0.0.1"
  )
    .split(",")[0]
    .trim()
    .replace(/^::ffff:/, "");

  // Create response with required headers
  const responseObj = {
    ipaddress: ipaddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  };

  res.json(responseObj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
