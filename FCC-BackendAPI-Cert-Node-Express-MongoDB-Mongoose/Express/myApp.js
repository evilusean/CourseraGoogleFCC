require("dotenv").config();
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser"); // Require the body-parser package
let app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Mount middleware to handle URL-encoded data

app.use("/public", express.static(__dirname + "/public"));

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

console.log("Hello World");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message });
});

// Chain middleware for /now route
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

// Echo server for GET /:word/echo
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

// API endpoint for GET /name with query string parameters
app.route("/name").get((req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;
