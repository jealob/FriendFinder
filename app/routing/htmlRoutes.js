// Dependencies
// Requires the friends.js file to get the friend array data
let friendsData = require("../data/friends.js");
let path = require("path");

// Routing
module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // the default path, Home page
    app.use(function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}