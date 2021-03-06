module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    romLink: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    title: DataTypes.STRING,
    rating: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Game;
};
