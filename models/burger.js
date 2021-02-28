// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(result) {
      cb(result);
    });
  },
  create: function(burger_name, cb) {
    orm.insertOne("burgers", burger_name, function(result) {
      cb(result);
    });
  },
  update: function(id, devoured, cb) {
    orm.updateOne("burgers", id, devoured, function(result) {
      cb(result);
    });
  },
  updateAll: function(devoured, cb) {
    orm.updateAll("burgers", devoured, function(result) {
      cb(result);
    });
  },
  delete: function(id, cb) {
    orm.deleteOne("burgers", id, function(result) {
      cb(result);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;