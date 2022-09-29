const canvasSize = 900;
const squareSize = canvasSize / 20;

function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('sketch');
}

function draw() {
  push();
  noStroke();
  fill('#facc31');
  rect(0, 0, canvasSize, canvasSize);
  pop();

  push();
  noStroke();
  fill('#62b449');
  rect(squareSize, squareSize, canvasSize - (squareSize * 2), canvasSize - (squareSize * 2));
  pop();

  push();
  strokeWeight(4);
  line(squareSize - 2, squareSize - 2, squareSize - 2, squareSize * 11 + 5);
  pop();

  push();
  stroke('gray');
  for (let position = squareSize; position < canvasSize; position += squareSize) {
    line(position, 0, position, canvasSize);
    line(0, position, canvasSize, position);
  }
  pop();

  noLoop();
}
