// Setup empty JS object to act as endpoint for all routes
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
let path = require('path')
let port = 3000;
let projectData = {

};



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
  res.sendFile(path.join(__dirname+'/website/index.html'));
});

// Initialize the main project folder
app.use(express.static("website"));
// Spin up the server

// Callback to debug

// Initialize all route with a callback function
app.get("/all", (req, res) => {
  res.send(projectData);
});
// Callback function to complete GET '/all'

app.get("/datalast", (req, res) => {
  res.send(dataEnt[dataEnt.length - 1]);
});

// Post Route
app.post("/add", (req, res) => {
  let data = req.body;
  projectData["zipdCode"] = data.zip;
  projectData["CityName"] = data.CityName;
  projectData["date"] = data.date;
  projectData["feelings"] = data.feelings;
  projectData["temprature"] = data.temprature;
  projectData["description"] = data.description;
//send the object to the project endpoint
  res.send(projectData);
});


app.listen(port, () => {
  console.log(`Example app is listening at url http://localhost:${port}`);
});



