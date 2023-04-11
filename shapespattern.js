let shapes = [
  {
    color: "cyan",
    size: 0.5,
  },
  {
    color: "hotpink",
    size: 0.8,
  },
  {
    color: "purple",
    size: 0.3,
  },
];
function setup() {
  createCanvas(600, 500);
  angleMode(DEGREES);
  Width = 100;
  Height = 100;
  patternsPerRow = 6;
  patternsPerColumn = 4;
  horizontalSpace = -5;
  verticalSpace = 25;
  noLoop();
}

function draw() {
  background("black");
  for (let rowsDrawn = 0; rowsDrawn < patternsPerColumn; rowsDrawn++) {
    for (let columnsDrawn = 0; columnsDrawn < patternsPerRow; columnsDrawn++) {
      let offsetRight = columnsDrawn * (Width + horizontalSpace);
      let offsetDown = rowsDrawn * (Height + verticalSpace);
      push();
      addPatternFinal(offsetRight, offsetDown, 0.3);
      pop();
    }
  }
}
function addShape(shapeX, shapeY, size) {
  translate(shapeX, shapeY);
  scale(size);
  for (let linesDrawn = 0; linesDrawn < 36; linesDrawn++) {
    rotate(10);
    noStroke();
    triangle(0, 0, 1, 100, 70, 100);
  }
}

function addPatternFinal(x, y) {
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    translate(x, y);
    scale(shape.size);
    push();
    fill(shape.color);
    addShape(random(400), random(400), random(0.3 - 1));
    pop();
  }
}
