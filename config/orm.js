const connection = require("./connection.js");

const orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, burger_name, cb) {
    var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    connection.query(queryString, [table, burger_name], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(table, id, devoured, cb) {
    devoured = devoured == "true";
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
    connection.query(queryString, [table, devoured, id], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateAll: function(table, devoured, cb) {
    devoured = devoured == "true";
    var queryString = "UPDATE ?? SET devoured = ?";
    connection.query(queryString, [table, devoured], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  deleteOne: function(table, id, cb) {
    var queryString = "DELETE FROM ?? WHERE id = ?";
    connection.query(queryString, [table, id], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;