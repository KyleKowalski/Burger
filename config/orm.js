var db = require('./connection.js');

var orm = {
    getAll: function(selectTable, cb) {
        db.query(`SELECT * FROM ${selectTable};`, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    getOne: function(selectTable, selectId, cb) {
        db.query(`SELECT * FROM ${selectTable} WHERE burger_id = ${selectId}`, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },

    createBurger: function(burger_name, cb) {
        db.query(`INSERT INTO burgers (burger_name) VALUES ('${burger_name}')`, (err, res) => {
            if (err) throw err;
            console.log(`${burger_name} added`);
            cb(res);
        });
    },

    eatBurgerToggle: function(burger_id, burgerStatus, cb) {
        db.query(`UPDATE burgers SET burger_eaten = ${burgerStatus} WHERE burger_id = ${burger_id}`, (err, res) => {
            if (err) throw err;
            console.log(`burger id ${burger_id} has been consumed!`);
            cb(res);
        });
    },

    deleteBurger: function(burger_id, cb) {
        db.query(`DELETE FROM burgers WHERE burger_id = ${burger_id}`, (err, res) => {
            if (err) throw (err);
            console.log(`Burger ID ${burger_id} deleted`);
            cb(res);
        });
    },

    updateBurgerName: function(burger_id, newBurgerName, cb) {
        console.log(`ID: '${burger_id}' and name: '${newBurgerName}'`)
        db.query(`UPDATE burgers SET burger_name = '${newBurgerName}' WHERE burger_id = ${burger_id}`, (err, res) => {
            if (err) throw err;
            console.log(`burger id ${burger_id} to be renamed to ${newBurgerName}`);
            cb(res);
        })
    }
}

module.exports = orm;