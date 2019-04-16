console.log("Webpack is working!");

const MovingObject = require("./moving_object.js")

window.MovingObject = MovingObject;

const canvasEl = document.getElementsById("game-canvas");
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;