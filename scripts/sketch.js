const squareSize = 25;
const canvasSize = 500;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  push();
  fill('#facc31');
  rect(0, 0, width, height);
  pop();

  push();
  noStroke();
  fill('#62b449');
  rect(20, 20, width - 40, height - 40);
  pop();

  push();
  strokeWeight(3);
  line(22, 22, 22, 22 * 12);
  pop();

  push();
  stroke('gray');
  for (let position = 0; position < canvasSize; position += squareSize) {
    line(position, 0, position, canvasSize);
    line(0, position, canvasSize, position);
  }
  pop();

  noLoop();
}
