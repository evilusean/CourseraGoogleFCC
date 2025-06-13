// Init express app, get env variables if present
require("dotenv").config();
var express = require("express");
var app = express();

// Log incoming requests in development:
if (process.env.RUN_MODE === "development") {
  app.use((req, res, next) => {
    console.log(
      `${req.method} ${req.path}; IP=${req.ip}; https?=${req.secure}`
    );
    next();
  });
}

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// Return index.html on GET request to '/'
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Enable trust proxy - important for getting correct IP when behind a proxy
app.enable("trust proxy");

// Return request header info on API call
app.get("/api/whoami", function (req, res) {
  // Simplify IP address handling
  let ipaddress = req.ip;
  if (ipaddress.includes("::ffff:")) {
    ipaddress = ipaddress.split("::ffff:")[1];
  }

  res.json({
    ipaddress: ipaddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// 404 page not found:
app.get("*", (req, res) => {
  // Redirect to index
  res.redirect("/");
});

// Internal Error Handler:
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server error: See Server Logs");
});

// Listen for requests on given PORT, else 3000
// http://localhost:3000/
var listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
