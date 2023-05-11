var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
function createSawBlade(x, y) {
  var hitZoneSize = 25;
  var damageFromObstacle = 50;
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
  sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage)
obstacleImage.x = -25;
obstacleImage.y = -25;    
}
createSawBlade(900, 178)
createSawBlade(2600, 280)
createSawBlade(2000, 178)
createSawBlade(1800, 178)
createSawBlade(1300, 280)
createSawBlade(4000, 178)
createEnemy(500, groundY - 25);
createEnemy(3000, groundY - 25);
createEnemy(6000, groundY - 25);
createEnemy(9000, groundY - 25);

function createEnemy(x,y){
var enemy = game.createGameItem("enemy", 30);
var yellowSquare = draw.rect(50, 50, "yellow");
yellowSquare.x = -25;
yellowSquare.y = -25;
enemy.addChild(yellowSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -5;
enemy.rotationalVelocity = 1000000000;

enemy.onPlayerCollision = function () {
  game.changeIntegrity(-1000000)
}
    
enemy.onProjectileCollision = function () {
  game.increaseScore(100);
  enemy.fadeOut();
}

function createReward(x,y){
  var reward = game.createGameItem("reward", 30);
  var yellowSquare = draw.rect(50, 50, "blue");
  yellowSquare.x = -90;
  yellowSquare.y = -25;
  reward.addChild(yellowSquare);
  reward.x = x;
  reward.y = groundY - y;
  game.addGameItem(reward);
  reward.velocityX = -10;
  reward.rotationalVelocity = 1000000000;
  
  reward.onPlayerCollision = function () {
    game.changeIntegrity(1000000)
  }
      
  reward.onProjectileCollision = function () {
    game.increaseScore(100);
    reward.fadeOut();
  }

};

    function startLevel() {
      

      var levelData = [
  {
    name: "Robot Romp",
    number: 1,
    speed: -3,
    gameItems: [
      { type: "sawblade", x: 400, y: groundY },
      { type: "sawblade", x: 600, y: groundY },
      { type: "sawblade", x: 900, y: groundY },
    ],
  },
  {
    name: "Robot Rampage",
    number: 2,
    speed: -3,
    gameItems: [
      { type: "sawblade", x: 400, y: groundY },
      { type: "sawblade", x: 600, y: groundY },
      { type: "sawblade", x: 900, y: groundY },
    ],
  },
];
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
}

var levelData = [
  {
    name: "Robot Romp",
    number: 1,
    speed: -3,
    gameItems: [
      { type: "sawblade", x: 400, y: groundY },
      { type: "sawblade", x: 600, y: groundY },
      { type: "sawblade", x: 900, y: groundY },
    ],
  },
  {
    name: "Robot Rampage",
    number: 2,
    speed: -3,
    gameItems: [
      { type: "sawblade", x: 400, y: groundY },
      { type: "sawblade", x: 600, y: groundY },
      { type: "sawblade", x: 900, y: groundY },
    ],
  },
];
var firstGameItemObject = gameObjects[0];
var firstX = firstGameItemObject.x;
var firstY = firstGameItemObject.y;
var firstType = firstGameItemObject.type;
createSawBlade(firstX, firstY);

for (var i = 0; i < myArray.length; i++) {
  var eachElement = myArray[i];

  // code to do something with each element
}