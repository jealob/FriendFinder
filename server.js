// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Listening Port
PORT = process.env.PORT || 3600;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import the express routes from the routing files. apiRoutes.js and htmlRoutes.js
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
