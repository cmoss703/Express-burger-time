const mysql = require('mysql');

// Set up our connection information
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'pw',
    database: 'burgers_db',
  })
};

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection
module.exports = connection;