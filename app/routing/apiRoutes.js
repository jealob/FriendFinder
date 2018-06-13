// Dependencies
// Requires the friends.js file to get the friend array data
let friendsData = require("../data/friends.js");


module.exports = function (app) {
    // get API endpoint for friends data array
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        console.log(friendsData);
    });
    // Post to API endpoint for friends data array
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
                // Determines the closeest match
                difference += Math.abs(friendFinder.scores[score] - friendsData[friend].scores[score]);
            }
            // Insert the closest match from the friends data array 
            if (!match.matchRating || difference < match.matchRating) {
                match.name = friendsData[friend].name;
                match.photo = friendsData[friend].photo;
                match.matchRating = difference;
            }
        };
        if (match.name) {
            res.json(match);
        }
        else {
            match = {
                name: "No Match at the time",
                photo: null,
                matchRating: ""
            }
            res.json(match);
        }
        friendsData.push(req.body);
    });
}