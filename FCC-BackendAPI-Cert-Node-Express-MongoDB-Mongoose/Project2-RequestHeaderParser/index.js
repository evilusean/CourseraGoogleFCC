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

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

// Enable trust proxy to get correct IP behind reverse proxies
app.enable("trust proxy");

// Header parser endpoint
app.get("/api/whoami", function (req, res) {
  // Get IP address with fallbacks
  let ipaddress =
    req.headers["x-forwarded-for"] ||
    req.ip ||
    req.connection.remoteAddress ||
    "127.0.0.1";

  // Clean up IP address
  if (ipaddress.includes(",")) {
    ipaddress = ipaddress.split(",")[0];
  }
  if (ipaddress.includes("::ffff:")) {
    ipaddress = ipaddress.split("::ffff:")[1];
  }
  if (ipaddress === "::1") {
    ipaddress = "127.0.0.1";
  }

  // Create response object
  const responseObj = {
    ipaddress: ipaddress.trim(),
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  };

  res.json(responseObj);
});
