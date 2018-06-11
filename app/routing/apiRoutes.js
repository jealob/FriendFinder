// Dependencies
// Requires the friends.js file to get the friend array data
let friendsData = require("../data/friends.js");

// Routing
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })
    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        console.log("data submitted");
    })
}