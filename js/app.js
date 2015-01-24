// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0, this.y = 300 * Math.random(), this.speed = 10 + Math.random()*200;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  if (this.x >= 475){
    this.x = 0, this.y = 230 * Math.random(), this.speed = 10 + Math.random()*200;
  }
    Enemy.prototype.checkCollisions();
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed) * dt ;
    //console.log("enemy update ",this.x)


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Enemy.prototype.checkCollisions = function(){
var r = 40;
for (i in allEnemies){
  if (allEnemies[i].x <= player.x + r && allEnemies[i].x >= player.x - r && allEnemies[i].y <= player.y + r && allEnemies[i].y >= player.y - r){
    player.reset();
    }
  }
}





/*var r = 0;
  if ((player.y >= this.y + r) || (player.x >= this.x + r) || (player.y <= this.y + r) || (player.y <= this.y + r)){
    player.reset();
    //this doesn't work...yet
  }*/
//console.log(enemy1.x);

//console.log("Player x ",player.x);
//  if (player.x <= enemy1.x + 40 || player.x >= enemy1.x + 40 ){
  //  console.log("player reset");
    //player.reset();
//if (Math.abs(this.x <= (player.x + 50)) || Math.abs(this.y <= (player.y +50))){
// player.reset(); //doesn't work
//}
//if (player.y === 370 || player.x === 170){
// player.reset();
// //this actually works
//}
/*if(player.x >= this.x - 30 && player.x <= this.x + 30){
  if(player.y >= this.y - 30 && player.y <= this.y + 30){
    player.reset(); //this doesn't work
  }
}*/

/*if (player.y <= this.y + 20){
  player.reset(); //tried something simple, doesn't work
}*/
//};
//start Player js
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.reset();//this.x = 200, this.y =400;
  this.sprite = 'images/char-boy.png';
};



Player.prototype.handleInput = function(allowedKeys){
  if (allowedKeys === 'left'){
    if(this.x > 0){
      this.x -= 20;
    }
    else if(this.x < 0){
      player.reset(); //resets player to start when reaches left border
    }
  }
  if (allowedKeys === 'right'){
    if(this.x > 0){
      this.x += 20;
    }
    if(this.x > 440){
      player.reset(); //resets player to start when reaches right border
    }
  }
  if (allowedKeys === 'down'){
    if(this.y > 0){
      this.y += 20;
    }
    if(this.y >= 430){
      player.reset();  //resets player to start when reaches bottom border
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
};

Player.prototype.update = function(){
  if (this.y <= 0){
    player.reset(); //this.x = 200, this.y = 400; //resets player to start when reaches water
  }
};
// Draw the *Player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //copied from Enemy
};

//check for Player/bug collisions--don't think I need this code

/*Player.prototype.checkCollisions = function(){
  if (this.y <= 300){
    this.x = 200, this.y = 400;
  }
};*/




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
