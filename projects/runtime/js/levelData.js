var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        currentLevel: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: 250 },
          { type: "sawblade", x: 1500, y: 250 },
          { type: "sawblade", x: 2500, y: 250 },
          { type: "reward", x: 3000, y: 250 },
          { type: "reward", x: 6000, y: 250 },
          { type: "reward", x: 9000, y: 250 },
          { type: "enemy", x: 700, y: 250 },
          { type: "enemy", x: 1300, y: 250 },
          { type: "enemy", x: 1800, y: 250 },
          { type: "enemy", x: 1900, y: 250 },
          { type: "marker", x: 10000, y: 250 },
        ],
      },
      {
        name: "Robot Rampage",
        currentLevel: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: 250 },
          { type: "sawblade", x: 1500, y: 300 },
          { type: "sawblade", x: 2500, y: 200 },
          { type: "reward", x: 3000, y: 250 },
          { type: "reward", x: 6000, y: 250 },
          { type: "reward", x: 9000, y: 250 },
          { type: "enemy", x: 700, y: 250 },
          { type: "enemy", x: 6000, y: 250 },
          { type: "enemy", x: 8000, y: 250 },
          { type: "enemy", x: 3000, y: 250 },
          { type: "marker", x: 10000, y: 250 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}


