// function Surrogate() {}
// Surrogate.prototype = Superclass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function(parent){
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject(color, direction) {
  this.color = color;
  this.direction = direction;
}

MovingObject.prototype.change = function() {
  this.color = 'red';
  console.log(this.color);
};

let move = new MovingObject('white');

function Ship(...args) { 
  MovingObject.apply(this, args);
}

Ship.inherits(MovingObject);

let ship = new Ship('black', 'up');
// let color = ship.color;
console.log(ship.color);
console.log(ship.direction);
ship.change();

