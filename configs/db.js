const mysql = require('mysql');

module.exports = function(app) {
  const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'example-db'
  });

  connection.connect();

  app.set('db', connection);
};
