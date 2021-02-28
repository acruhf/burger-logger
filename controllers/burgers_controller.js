var express = require("express");

var router = express.Router();

// Import model
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.json(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, req.body.devoured, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/burgers", function(req, res) {
  burger.updateAll(req.body.devoured, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  burger.delete(req.params.id, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;