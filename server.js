// =============================================================
// Dependencies
// Series of npm packages that we will use to give our server useful functionality
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
// Sets up the Express App
// This sets up the basic properties for our express server
// =============================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json()) basically tells the system that you want json to be used.
// bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) 
// or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
// https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// =============================================================
//ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// =============================================================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// =============================================================
// LISTENER
// Starts the server to begin listening
// =============================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});