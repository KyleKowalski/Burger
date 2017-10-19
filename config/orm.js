var db = require('./connection.js');

// selectAll()
function getAllBurgers() {
    db.connection.query(`SELECT * FROM burgers`, (err, res) => {
        if (err) throw err;
        console.log(JSON.stringify(res));
    });
}

// insertOne()
function createBurger(burger_name) {
    db.connection.query(`INSERT INTO burgers (burger_name) VALUES ('${burger_name}')`, (err, res) => {
        if (err) throw err;
        console.log(`${burger_name} added`);
    });
}

// updateOne()
function eatBurger(burger_id) {
    db.connection.query(`UPDATE burgers SET burger_eaten = true WHERE burger_id = ${burger_id}`, (err, res) => {
        if (err) throw err;
        console.log(`burger id ${burger_id} has been consumed!`);
    });
}

module.exports = {
    getAllBurgers: getAllBurgers,
    createBurger: createBurger,
    eatBurger: eatBurger
}