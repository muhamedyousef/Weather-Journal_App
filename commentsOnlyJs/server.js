// Setup empty JS object to act as endpoint for all routes
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
let port = 3000;
let projectData = {
   
};

let dataEnt = [];
let apiKey = process.env.OPENWEATHERAPPAPI;
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Here we are configuring express to use body-parser as middle-ware.
app.use(cors());
// Cors for cross origin allowance
app.get("/", (req, res, next) => {
    res.send("hello world");
});

// Initialize the main project folder
app.use(express.static("website"));
// Spin up the server
app.listen(port, () => {
    console.log(`Example app is listening at url http://localhost:${port}`);
});
// Callback to debug

// Initialize all route with a callback function
app.get("/all", (req, res) => {
    res.send(dataEnt);
});
// Callback function to complete GET '/all'

app.get("/datalast", (req, res) => {
    res.send(dataEnt[dataEnt.length - 1]);
});


// Post Route
app.post("/data", (req, res) => {
    dataEnt.push(req.body);
});