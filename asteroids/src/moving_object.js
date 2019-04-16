function MovingObject(options) {
  for (let key in options) {
    this[key] = options[key];
  }
}

// { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}

// ctx.drawImage(img, 0,0); //normal drawing
// ctx.drawImage(img, //draw stretched
//     0,0,66,66, //source (x,y,w,h)
//     100,0,100,100//destination (x,y,w,h)
//     );
// ctx.drawImage(img, //draw a slice
//     20,10,20,20, //source coords (x,y,w,h)
//     250,0,250,50//destination coords (x,y,w,h)
//     );


MovingObject.prototype.draw = function(ctx) {
  const canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');

  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

let mov = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});
mov.draw();

module.exports = MovingObject