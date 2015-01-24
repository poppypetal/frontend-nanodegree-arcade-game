// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
  this.x = 0, this.y = 230 * Math.random(), this.speed = 10 + Math.random()*200;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.start = function(){
this.x = 0, this.y = 230 * Math.random(), this.speed = 10 + Math.random()*200;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  if (this.x >= 475){
    this.x = 0, this.y = 230 * Math.random(), this.speed = 10 + Math.random()*200;
  } //resets the bug to starting position & random speed when it reaches the right limit of the canvas
  Enemy.prototype.checkCollisions();
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.x += (this.speed) * dt ;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Enemy.prototype.checkCollisions = function(){
var r = 20; //defines the range where collision occurs larger numbers for added difficulty, smaller numbers for beginner.
for (i in allEnemies){
  if (allEnemies[i].x <= player.x + r && allEnemies[i].x >= player.x - r && allEnemies[i].y <= player.y + r && allEnemies[i].y >= player.y - r){ //if the bug is to the left of the player
  player.reset();
    }
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.reset();
  this.sprite = 'images/char-boy.png';
  this.win = 1;
};



Player.prototype.handleInput = function(allowedKeys){
  if (allowedKeys === 'left'){
    if(this.x > 0){
      this.x -= 20;
    }
    else if(this.x < 0){
      player.reset(); //resets player to start when reaches left side of canvas
    }
  }
  if (allowedKeys === 'right'){
    if(this.x > 0){
      this.x += 20;
    }
    if(this.x > 440){
      player.reset(); //resets player to start when reaches right side of canvas
    }
  }
  if (allowedKeys === 'down'){
    if(this.y > 0){
      this.y += 20;
    }
    if(this.y >= 430){
      player.reset();  //resets player to start when reaches bottom side of canvas
    }
  }
  if (allowedKeys === 'up'){
    if(this.y > 0){
      this.y -= 20;
    }
      else if(this.y <= 0){
        player.reset();  //resets player to start when reaches water
    }
  }
};

Player.prototype.reset = function(){
 this.x = 200, this.y = 400;
}; //when player.reset() is called, the player moves back to starting position

Player.prototype.update = function(){
  if (this.y <= 0){
    player.reset(); //resets player to start when reaches water
  console.log("Great Job!!", this.win ++);
  }
};
// Draw the *Player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //copied from Enemy
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var enemy = Enemy();
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1,enemy2,enemy3,enemy4];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});



/*dimka: but you can read more about Math.random() here: http://www.w3schools.com/jsref/jsref_random.asp
*/
