// Setup empty JS object to act as endpoint for all routes
var express = require('express');
var cors = require('cors');
var app = express();
let port = 5500;

// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.get('/', (req, res, next) => {
    res.send('hello world');
});
app.get('website/index.html/hello', (req, res, next) => {
    res.send('hello world');
});
// Initialize the main project folder
app.use(express.static('website'))
    // Spin up the server
    // Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
app.listen(port, () => {
    console.log(`Example app is listening at url http://localhost:${port}`);
})