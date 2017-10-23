var express = require('express');
var router = express.Router();

var burgerModel = require('../models/burger_model.js');

router.get('/', function(req, res) {
    burgerModel.getAll('burgers', function(data) {
      var formattedObject = {
        burgers: data
      };
      console.log(formattedObject);
      res.render("index", formattedObject);
    });
  });

router.put('api/burger', function(req, res){
    let burgerName = req.params.burgerName;
    console.log(`from web: '${burgerName}' - changing to store it`)
    burgerName = 'ThisNewBurger';
    burgerModel.createBurger(burgerName, function(data){
        
    })
})

module.exports = router;