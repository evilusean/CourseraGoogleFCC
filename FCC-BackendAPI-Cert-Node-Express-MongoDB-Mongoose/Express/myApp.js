require("dotenv").config();
let express = require("express");
let path = require("path");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

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

module.exports = app;
