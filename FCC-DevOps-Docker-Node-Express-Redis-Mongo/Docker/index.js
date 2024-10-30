const express = require("express");
const mongoose = require("mongoose");
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config");

const postRouter = require("./routes/postRoutes.js");
const userRouter = require("./routes/userRoutes.js")

const app = express();


const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const connectWithRetry = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err); // Log connection errors
        setTimeout(connectWithRetry, 5000);
    });
}



/* Old hardcoded method:
mongoose.connect("mongodb://seanjeev:mypassword@mongo:27017/?authSource=admin").then(() => {
New method with dynamic variables that reference the 'config.js'
*/
/*
const connectWithRetry = () => {
    mongoose.connect("mongodb://seanjeev:mypassword@mongo:27017/?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err); // Log connection errors
        setTimeout(connectWithRetry, 5000);
    });
}
*/

connectWithRetry()

app.get("/", (req, res) => {
    res.send("<h1>Test success!!</h2>");
});

app.get("/test-mongo", async (req, res) => {
    try {
        await mongoose.connect(mongoURL);
        res.send("Connected to MongoDB successfully!");
    } catch (error) {
        res.status(500).send("Failed to connect to MongoDB: " + error.message);
    }
});

app.use(express.json());
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port${port}`));
