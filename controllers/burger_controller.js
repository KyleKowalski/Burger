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

  // router.get('/salads', function(req, res) {
  //   burgerModel.getAll('salads', function(data) {
  //     var formattedObject = {
  //       salads: data
  //     };
  //     console.log(formattedObject);
  //     res.render("saladIndex", formattedObject);
  //   });
  // });


router.post('/api/burger', function(req, res){
  console.log(req.params);
    let burgerName = req.params.burgerName;
    console.log(`from web: '${burgerName}' - changing to store it`)
    // burgerModel.createBurger(burgerName, function(data){
        
    // });
});

router.put('/api/burger/:id', function(req, res){

})

router.delete('/api/burger:id', function(req, res){

})

module.exports = router;