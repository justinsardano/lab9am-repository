let startY = -55;
let ballSpeed;
let ballY = startY;
let ballSize = 45;
let ballX;
let avatarSize = 100;
let ballIsMoving = false;
let canvasSize = 400;
let headY = 150;
let isIntersecting = false;
let avatarScale = 0.5;
let ballScale = 1;
function setup() {
  createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);
  ballSpeed = 7;
  ballX = random(canvasSize);
}

function draw() {
  push();
  background("skyblue");
  fill("green");
  rect(0, 380, canvasSize);
  addAvatar(mouseX - 50, 200, avatarScale);
  fill("white");
  addBall(ballX, ballY, ballScale);
  if (ballIsMoving == true) {
    ballY += ballSpeed;
    if (ballY > canvasSize + ballSize) {
      ballY = startY;
      ballX = random(canvasSize);
      ballIsMoving = false;
      isIntersecting = false;
    } else {
      isIntersecting = intersectsHead();
    }
  }

  pop();
}

function addAvatar(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill(255, 224, 189);
  rect(50, headY, avatarSize);

  fill("brown");
  noStroke();
  rect(50, 150, 10, 70);
  rect(50, 150, 100, 10);
  rect(140, 150, 10, 70);
  if (isIntersecting) {
    fill("black");
    rect(70, 180, 20, 10);
    rect(110, 180, 20, 10);
  } else {
    fill("white");
    rect(70, 180, 20, 20);
    rect(110, 180, 20, 20);
    fill("black");
    rect(80, 190, 10, 10);
    rect(110, 190, 10, 10);
  }
  noFill();

  fill("red");
  rect(0, 240, 200, 200);

  pop();
}
function addBall(ballX, ballY, size) {
  translate(ballX, ballY);
  scale(size);
  ellipse(45, 30, ballSize);
}
function mousePressed() {
  ballIsMoving = true;
}
function intersectsHead() {
  let left = mouseX - 50; //+ avatarSize/2 ;
  let right = left + 50; //avatarSize/2;
  let top = headY;
  let bottom = headY + avatarSize;
  let ballBottom = ballY + ballSize;
  //console.log(left,right,ballX);
  if (ballX >= left && ballX <= right && ballY >= top && ballY <= bottom) {
    return true;
  } else {
    return false;
  }
}
