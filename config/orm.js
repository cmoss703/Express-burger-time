const connection = require('./connection');

// create the methods that will execute the necessary MySQL commands in the 
// controllers. These are the methods you will need to use in order to retrieve 
// and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const orm = {
    selectAll(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    insertOne(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table}`;
  
      queryString += ' (burger_name) VALUE ?';
      queryString += cols.toString();
  
      console.log(queryString);
  
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne(table, objColVals, condition, cb) {
      let queryString = `UPDATE ${table}`;
  
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;
  
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