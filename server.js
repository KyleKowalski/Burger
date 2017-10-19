(function () { //IIFE

    const express = require("express");
    // const bodyParser = require("body-parser");
    // const path = require("path");
    var exphbs = require("express-handlebars");

    const app = express();
    const PORT = 3000;

    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(bodyParser.json());

    app.listen(process.env.PORT || 3000, function() {
        console.log("App listening on PORT " + PORT);
    });

    // Set Handlebars as the default templating engine.
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    // Data
    var burgers = [
    {
        burger: "Beet & Goat Cheese Salad with minestrone soup.", 
        burgerStatus: false
    }, {
        burger: "Pizza, two double veggie burgers, fries with a big glup",
        burgerStatus: false
    }
    ];

    // Routes
    // app.get("/weekday", function(req, res) {
    // res.render("index", lunches[0]);
    // });

    app.get('/burger.png', function(req, res) {
        res.sendFile('burger.png', { root: './public/assets/img' })
    });

    app.get('/aLittleSeasoning.css', function(req, res) {
        res.sendFile('aLittleSeasoning.css', { root: './public/assets/css' })
    });

    app.get('/', function(req, res) {
        res.render('index', {
            burgers: burgers
        });
    });

    })(); // IIFE