var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/example", function(req, res) {
    db.Game.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/example", function(req, res) {
    var newGames = {
      romLink: "//www.retrogames.cc/embed/32112-super-mario-64-usa.html",
      title: "Super Mario 64",
      rating: "E",
      imageLink:
        "http://www.gamesdatabase.org/Media/SYSTEM/Nintendo_N64/Cart/Thumb/Thumb_Super_Mario_64_-_1996_-_Nintendo.jpg",
      description: "Something about the game"
    };
    db.Game.create(newGames).then(function(Games) {
      res.json(Games);
    });
  });
};
//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
