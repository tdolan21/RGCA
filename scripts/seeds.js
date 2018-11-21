var db = require("../models");
var Game = db.Game;
var sequelize = db.sequelize;

sequelize
  .sync({ force: true })
  .then(function() {
    return Game.bulkCreate([
      {
        romLink: "//www.retrogames.cc/embed/32112-super-mario-64-usa.html",
        title: "Super Mario Kart",
        rating: "E",
        imageLink:
          "http://www.gamesdatabase.org/Media/SYSTEM/Nintendo_N64/Cart/Thumb/Thumb_Super_Mario_64_-_1996_-_Nintendo.jpg",
        description: "Something about the game"
      },
      {
        romLink: "//www.retrogames.cc/embed/32914-banjo-kazooie-usa.html",
        title: "Banjo Kazooie",
        rating: "E",
        imageLink:
          "http://www.nesworld.com/n64/n64list/boxart/nus-nbkp-eur-cb.jpg",
        description: "Something about the game"
      },
      {
        romLink: "//www.retrogames.cc/embed/32121-star-fox-64-usa.html",
        title: "Star Fox",
        rating: "E",
        imageLink: "https://i.ebayimg.com/images/g/vtkAAOSwjDZYgoIt/s-l300.jpg",
        description: "Something about the game"
      }
    ]);
  })
  .then(function() {
    sequelize.close();
  });
module.exports = sequelize;
