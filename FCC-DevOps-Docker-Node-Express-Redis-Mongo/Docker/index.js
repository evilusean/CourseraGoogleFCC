const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://seanjeev:mypassword@mongo:27017/?authSource=admin").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});



app.get("/", (req, res) => {
    res.send("<h1>Test success!!</h2>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port${port}`));
