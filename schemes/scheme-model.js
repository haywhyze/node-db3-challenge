const db = require('../data/dbConfig.js');

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id: Number(id) })
    .first();
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "scheme_id")
    .select("steps.*", "scheme_name as scheme")
    .where("scheme_id", id);
}

module.exports = {
  find,
  findById,
  findSteps,
}