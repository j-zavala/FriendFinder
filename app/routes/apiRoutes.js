// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// We only have one data source which  hold arrays of information on friends
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/friends...the are shown a JSON of the data in the table)
    //---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.join(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the cases below, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out their info...this data is then sent to the server...
    // then the server saves the data to the friendsData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // req.body is available since we're using the body-parser middleware
        if (friendData) {
            friendsData.push(req.body);
            res.json(true);
        }
        else {
            res.join(false);
        }
    });





};
