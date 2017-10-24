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
  let burgerObject = req.body;
  console.log(`from web: '${burgerObject.burgerName}' - changing to store it`)
  burgerModel.createBurger(burgerObject.burgerName, function(data){
      // res.send(data); // not sure if we need this part.  
      // TODO add a reload here
      res.redirect('/'); // sends data, but not reloading the page?
  });
});

router.put('/api/burger/:id', function(req, res){
  let burgerObject = req.body;
  console.log(`from web:  '${burgerObject.burgerId} - ${burgerObject.burgerEaten}' - changing to next type`);

  // change burger eaten to the other possibility - the interface takes care of the rest
  if (burgerObject.burgerEaten === '0') {
    burgerObject.burgerEaten = 1;
  }
  else {
    burgerObject.burgerEaten = 0;
  }
  burgerModel.eatBurgerToggle(burgerObject.burgerId, burgerObject.burgerEaten, function(data){
    res.redirect('/');
  })
});

router.delete('/api/burger:id', function(req, res){
  let burgerObject = req.body;
  console.log(`from web: '${burgerObject.burgerId}' - to be deleted`);

  burgerModel.deleteBurger(burgerObject.burgerId, function(data){
    res.redirect('/');
  })
});

module.exports = router;