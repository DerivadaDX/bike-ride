const canvasSize = 900;
const squareSize = canvasSize / 20;

function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('sketch');
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
  strokeWeight(4);
  line(squareSize - 3, squareSize - 3, squareSize - 3, squareSize * 11 + 5);
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
