// Enemies Class
var Enemy = function() {
  this.x = 0, this.y = 230 * Math.random(), this.speed = 10 + Math.random()*200; //defines bug's random start position and random speed
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, check collisions and define random enemy speed
Enemy.prototype.update = function(dt) {
  if (this.x >= 475){
    this.x = 0, this.y = 230 * Math.random(), this.speed = 10 + Math.random()*200; //resets the bug to random starting position and random speed
}; //resets the bug to starting position & random speed when it reaches the right limit of the canvas
  this.checkCollisions();
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.x += (this.speed) * dt ;
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



Enemy.prototype.checkCollisions = function(){
  var r = 40;
if (this.x <= player.x + r && this.x >= player.x - r && this.y <=  player.y + r && this.y >= player.y - r){ //if the bug is to the left of the player or to the right of player; if the player is above or below the bug in range r, reset the player and print message to console
  player.reset();
  console.log("Oops, you hit a bug!");
}
};






// Player class
var Player = function() {
  this.reset();
  this.sprite = 'images/char-horn-girl.png';
  this.win = 1; //used in the player update function for player's score
};

//Player handleInput function to move player
Player.prototype.handleInput = function(allowedKeys){
  if (allowedKeys === 'left' && this.x > 0){
    this.x -= 20;
  }
  if (allowedKeys === 'right' && this.x >= 0){
    this.x += 20;
  }
  if (allowedKeys === 'down' && this.y > 0){
    this.y += 20;
  }
  if (allowedKeys === 'up' && this.y > 0){
    this.y -= 20; //did not include reset for up because the player.reset function resets player when they hit the water
  }
  if (this.x >= 425 ){
    player.reset(); //resets player to start when reaches right side of canvas
  }
  if (this.y >= 440 ){
    player.reset(); //resets player to start when reaches bottom side of canvas
  }
  if(this.x <= 0){
    player.reset(); //resets player to start when reaches left side of canvas
  }
};

//Player reset function
Player.prototype.reset = function(){
 this.x = 200, this.y = 400;
}; //when player.reset() is called, the player moves back to starting position

// Player update function
Player.prototype.update = function(){
  if (this.y <= 0) {
    player.reset(); //resets player to start when player reaches the water,
    console.log("Great Job!! Score:", this.win ++); //adds 1 to the player's score printed out in the console.
  }
};

// Draw the Player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Instantiate objects.
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1,enemy2,enemy3,enemy4];
var player = new Player();


// This listens for key presses and sends the keys to your Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
