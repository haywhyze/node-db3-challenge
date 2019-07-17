const db = require('../data/dbConfig.js');

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id: Number(id) })
    .first();
}

module.exports = {
  find,
  findById
}