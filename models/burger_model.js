var orm = require('../config/orm.js');

burger_model = {
    getAll: function(tableToGet, cb) {
        orm.getAll(tableToGet, function(res) {
          cb(res);
        });
      },

    getOne: function(tableToGet, idToGet, cb) {
        orm.getOne(tableToGet, idToGet, function(res) {
            cb(res);
        });
    },

    createBurger: function(burgerName, cb) {
        orm.createBurger(burgerName, function(res) {
            cb(res);
        })
    },

    eatBurgerToggle: function(burgerId, burgerStatus, cb) {
        orm.eatBurgerToggle(burgerId, burgerStatus, function(res) {
            cb(res);
        })
    },

    deleteBurger: function(burgerId, cb) {
        orm.deleteBurger(burgerId, function(res){
            cb(res);
        })
    },

    updateBurgerName: function(burgerId, newBurgerName, cb) {
        orm.updateBurgerName(burgerId, newBurgerName, function(res){
            cb(res);
        })
    }
}

module.exports = burger_model;