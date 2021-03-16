const connection = require('./connection');

const objToSql = (ob) => {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }

      arr.push(`${key}=${value}`);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

// const table = "burgers"

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUE ('${vals}')`;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET `;
    
    queryString += objToSql(objColVals);
    queryString += ` WHERE ${condition}`;

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