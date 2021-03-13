const orm = require('../config/orm');

const burger = {
    selectAll(cb) {
        orm.selectAll((res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
        orm.insertOne(cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne(cols, vals, id, (res) => cb(res));
    },
    // delete(condition, cb) {
    //     orm.delete('burgers', condition, (res) => cb(res));
    // },
};

// code that will call the orm functions using burger specific input for the orm

module.exports = burger;