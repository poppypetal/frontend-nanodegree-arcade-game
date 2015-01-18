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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed) * dt ;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//end Enemy js



//start Player js
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.x = 200, this.y =400;
  this.sprite = 'images/char-boy.png';
};

/*Player.prototype.input = function(allowedKeys){
  if (allowedKeys === 'left'){
  if(this.x < 0){
  this.x = 200, this.y = 400;//produces error
}
else{this.x - 100;}
}
};*/

Player.prototype.handleInput = function(allowedKeys){
  if (allowedKeys === 'left'){
    if(this.x < 0){
      this.x = 200, this.y = 400; // no error, but still can't move
    }
    else{this.x - 100;}
    }
  };
/*player hits left key move 5px to the left
     player hits right key move 5px to the right
     player hits up key move 5px up
     player hits down key move 5px down

}*/


Player.prototype.update = function(){
  //if this.y <= 0 reset player to start
};
// Draw the *Player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //copied from Enemy
};

//check for Player/bug collisions
Player.prototype.checkCollisions = function(){
  if (this.y == 0){
  this.x = 200, this.y =400;
}
  /*else if(Player(this.x, this.y) === Enemy(this.x, this.y)){
    reset
  }*/
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var enemy = Enemy();
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1,enemy2,enemy3];
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




//there are 5 (width) x 6 (height) squares in the scene

//dimka: each square is 101 x 83 pixels

/*you can use Math.random() to generate a random speed for each bug

dimka: and you should also use Math.random() to set the y position for each bug

temp = Math.random();

temp2=Math.random();

console.log(temp);

console.log(temp2);

dimka: you should see different numbers because Math.random() generates a different number every time

dimka: so when you call:

dimka: enemy1= new Enemy(); enemy2= new Enemy(); enemy3= new Enemy();

→this.y = Math.random()

dimka: each time when you call Enemy() you will call Math.random() which will give you a different number

dimka: Almost

→this.speed=Math.random()

dimka: Math.random() generates a number between 0 and 1

dimka: so you will have to manipulate it to get a number in the range you want

dimka: BTW, our time is up so we will have to wrap up

→this.speed= function(Math.random * dt)


dimka: but you can read more about Math.random() here: http://www.w3schools.com/jsref/jsref_random.asp
*/
