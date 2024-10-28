const express = require("express");
const mongoose = require("mongoose");
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config");


const app = express();

/* Old hardcoded method:
mongoose.connect("mongodb://seanjeev:mypassword@mongo:27017/?authSource=admin").then(() => {
New method with dynamic variables that reference the 'config.js'
*/
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));



app.get("/", (req, res) => {
    res.send("<h1>Test success!!</h2>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port${port}`));
