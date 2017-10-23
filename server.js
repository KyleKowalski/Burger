(function () { //IIFE

    const express = require("express");
    const bodyParser = require("body-parser");
    // const path = require("path");
    var exphbs = require("express-handlebars");

    const app = express();
    const PORT = 3000;

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static('public'));

    app.listen(process.env.PORT || 3000, function() {
        console.log("App listening on PORT " + PORT);
    });

    // Set Handlebars as the default templating engine.
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    var routes = require('./controllers/burger_controller.js');

    app.use("/", routes);

    })(); // IIFE