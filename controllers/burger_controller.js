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
      // res.redirect('/'); // TODO add 404 / 200 / etc
  });
});

router.put('/api/burger/:id/:eaten', function(req, res){
  let burgerId = req.params.id;
  let burgerEaten = req.params.eaten;
  console.log(`from web:  '${burgerId} - ${burgerEaten}' changing to next type`);

  // change burger eaten to the other possibility - the interface takes care of the rest
  if (burgerEaten === '0') {
    burgerEaten = 1;
  }
  else {
    burgerEaten = 0;
  }
  burgerModel.eatBurgerToggle(burgerId, burgerEaten, function(data){
    // res.redirect('/'); // TODO add 404 / 200 / etc
  });
});

router.delete('/api/burger/:id', function(req, res){
  let burgerId = req.params.id;
  console.log(`from web: '${burgerId}' - to be deleted`);

  burgerModel.deleteBurger(burgerId, function(data){
    // res.redirect('/'); // TODO add 404 / 200 / etc
  });
});

router.get('/burger/:id', function(req, res){
  let thisBurgerId = req.params.id;
  burgerModel.getOne('burgers', thisBurgerId, function(data) {
    var formattedObject = {
      burger: data
    };
    console.log(formattedObject);
    res.render('update', formattedObject);
  });
});

router.put('/api/burger/:id', function(req, res){
  let burgerId = req.params.id;
  let newBurgerName = req.body;
  console.log(`from web: '${burgerId}' to be renamed to ${newBurgerName}`);

  burgerModel.updateBurgerName(burgerId, newBurgerName, function(data){
    // TODO add 404 / 200 / etc
  });
});

module.exports = router;