const connection = require('./connection');

// create the methods that will execute the necessary MySQL commands in the 
// controllers. These are the methods you will need to use in order to retrieve 
// and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const table = "burgers"

const orm = {
  selectAll(cb) {
    const queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUE (${vals})`;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne(cols, vals, id, cb) {
    let queryString = `UPDATE ${table} SET ${cols} = ${vals} WHERE id = ${id}`;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // delete(table, condition, cb) {
  //   let queryString = `DELETE FROM ${table}`;
  //   queryString += ' WHERE ';
  //   queryString += condition;

  //   connection.query(queryString, (err, result) => {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
};


module.exports = orm