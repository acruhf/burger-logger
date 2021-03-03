// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  create(burger_name, cb) {
    orm.create("burgers", burger_name, (res) => cb(res));
  },
  update(id, devoured, cb) {
    orm.updateOne("burgers", id, devoured, (res) => cb(res));
  },
  updateAll(devoured, cb) {
    orm.updateAll("burgers", devoured, (res) => cb(res));
  },
  delete(id, cb) {
    orm.deleteOne("burgers", id, (res) => cb(res));
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;