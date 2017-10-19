(function () { //IIFE

    const express = require("express");
    // const bodyParser = require("body-parser");
    // const path = require("path");
    var exphbs = require("express-handlebars");

    const app = express();
    const PORT = 3000;

    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(bodyParser.json());

    app.listen(process.env.PORT || 3000);

    // Set Handlebars as the default templating engine.
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    // Data
    var burgers = [
    {
        burger: "Beet & Goat Cheese Salad with minestrone soup."
    }, {
        burger: "Pizza, two double veggie burgers, fries with a big glup"
    }
    ];

    // Routes
    // app.get("/weekday", function(req, res) {
    // res.render("index", lunches[0]);
    // });

    // app.get("/weekend", function(req, res) {
    // res.render("index", lunches[1]);
    // });

    app.get("/", function(req, res) {
        res.render("index", {
            burgers: burgers //,
            // eater: "david"
        });
    });

    })(); // IIFE