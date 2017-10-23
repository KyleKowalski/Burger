var orm = require('../config/orm.js');

burger_model = {
    getAll: function(tableToGet, cb) {
        orm.getAll(tableToGet, function(res) {
          cb(res);
        });
      },

    createBurger: function(burgerName, cb) {
        orm.createBurger(burgerName, function(res) {
            cb(res);
        })
    }
}

module.exports = burger_model;