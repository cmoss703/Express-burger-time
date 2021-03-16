const connection = require('./connection');

// create the methods that will execute the necessary MySQL commands in the 
// controllers. These are the methods you will need to use in order to retrieve 
// and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const objToSql = (ob) => {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

const table = "burgers"

const orm = {
  selectAll(cb) {
    const queryString = `SELECT * FROM burgers;`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(cols, vals, cb) {
    let queryString = `INSERT INTO burgers (${cols}) VALUE ('${vals}')`;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne(objColVals, condition, cb) {
    let queryString = `UPDATE burgers SET`;
    
    queryString += objToSql(objColVals);
    queryString += `WHERE ${condition}`;

    // ${cols} = ${vals} WHERE ${condition}`;

    console.log(queryString);
    console.log("123");
    
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