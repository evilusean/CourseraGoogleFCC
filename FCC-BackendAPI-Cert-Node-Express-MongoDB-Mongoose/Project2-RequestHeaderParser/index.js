// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// set to trust proxy headers
app.set("trust proxy", true);

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

// new endpoint to parse header information
app.get("/api/whoami", function (req, res) {
  // Try to use the x-forwarded-for header first; this is important for FCC's test runner
  let ipaddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  // If there are multiple IPs, take the first one
  if (ipaddress.indexOf(",") !== -1) {
    ipaddress = ipaddress.split(",")[0];
  }
  const language = req.get("accept-language");
  const software = req.get("user-agent");
  res.json({ ipaddress, language, software });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
