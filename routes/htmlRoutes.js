var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Game.findAll({}).then(function(dbExample) {
      res.render("index", {
        msg: "Welcome!",
        example: dbExample
      });
    });
  });


  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/games/:id", function(req, res) {
    db.Game.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("player", {
        example: dbExample
      });
    });
  });


  app.get("/linkedin", function(req, res) {
    db.Game.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("linkedin", {
        example: dbExample
      });
    });
  });

  app.get("/library", function(req, res) {
    db.Game.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("library", {
        example: dbExample
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
