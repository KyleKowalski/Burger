const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Luca1234',
    database : 'burger_db'
  });
   
  connection.connect();

  module.exports = {
    connection: connection
  }