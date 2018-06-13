// Dependencies
// Requires the friends.js file to get the friend array data
let friendsData = require("../data/friends.js");

// API endpoint for all friends data
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        let friendFinder = req.body;
        let match = {
            name: null,
            photo: null,
            matchRating: null
        }
        for (friend in friendsData) {
            let difference = null;
            for (score in friendsData[friend].scores) {
                difference += Math.abs(friendFinder.scores[score] - friendsData[friend].scores[score]);
            }
            if (!match.matchRating || difference < match.matchRating) {
                match.name = friendsData[friend].name;
                match.photo = friendsData[friend].photo;
                match.matchRating = difference;
            }
        };
        if (match.name) {
            res.json(match);
        }
        friendsData.push(req.body);
        // console.log("data submitted");
    });
}