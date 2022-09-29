const padding = 5;
const tamañoDeGrilla = 20;
const tamañoDeCanvas = 900;
const ladoDelCuadrado = tamañoDeCanvas / tamañoDeGrilla;

function setup() {
  const canvas = createCanvas(tamañoDeCanvas, tamañoDeCanvas);
  canvas.parent('sketch');
}

function draw() {
  push();
  noStroke();
  fill('#facc31');
  rect(0, 0, tamañoDeCanvas, tamañoDeCanvas);
  pop();

  push();
  noStroke();
  fill('#62b449');
  rect(ladoDelCuadrado, ladoDelCuadrado, tamañoDeCanvas - (ladoDelCuadrado * 2), tamañoDeCanvas - (ladoDelCuadrado * 2));
  pop();

  push();
  fill('#3773b1');
  noStroke();

  beginShape();
  vertex(ladoDelCuadrado, ladoDelCuadrado);
  vertex(ladoDelCuadrado, ladoDelCuadrado * 11.33);
  vertex(ladoDelCuadrado, ladoDelCuadrado * 11.33);
  vertex(ladoDelCuadrado * 1.5 - padding, ladoDelCuadrado * 10.5);
  vertex(ladoDelCuadrado * 1.5 - padding, ladoDelCuadrado * 10.5);
  vertex(ladoDelCuadrado * 1.5, ladoDelCuadrado * 10.5);
  vertex(ladoDelCuadrado * 1.5, ladoDelCuadrado * 10.5);
  vertex(ladoDelCuadrado * 2.66, ladoDelCuadrado * 8.75);
  vertex(ladoDelCuadrado * 2.66, ladoDelCuadrado * 8.75);
  vertex(ladoDelCuadrado * 3, ladoDelCuadrado * 9);
  vertex(ladoDelCuadrado * 3, ladoDelCuadrado * 9);
  vertex(ladoDelCuadrado * 4 - padding, ladoDelCuadrado * 8);
  vertex(ladoDelCuadrado * 3, ladoDelCuadrado * 9);
  vertex(ladoDelCuadrado * 4 - padding, ladoDelCuadrado * 8);
  vertex(ladoDelCuadrado * 4 - padding, ladoDelCuadrado * 8);
  vertex(ladoDelCuadrado * 4.5, ladoDelCuadrado * 8.66);
  vertex(ladoDelCuadrado * 4.5, ladoDelCuadrado * 8.66);
  vertex(ladoDelCuadrado * 8.25, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 8.25, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 8.33, ladoDelCuadrado * 3.50);
  vertex(ladoDelCuadrado * 8.33, ladoDelCuadrado * 3.50);
  vertex(ladoDelCuadrado * 8.50, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 8.50, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 9 - padding, ladoDelCuadrado * 3.66);
  vertex(ladoDelCuadrado * 9 - padding, ladoDelCuadrado * 3.66);
  vertex(ladoDelCuadrado * 10.33, ladoDelCuadrado * 1.75);
  vertex(ladoDelCuadrado * 10.33, ladoDelCuadrado * 1.75);
  vertex(ladoDelCuadrado * 10.75, ladoDelCuadrado * 2);
  vertex(ladoDelCuadrado * 10.75, ladoDelCuadrado * 2);
  vertex(ladoDelCuadrado * 11.1, ladoDelCuadrado * 1.9);
  vertex(ladoDelCuadrado * 11.1, ladoDelCuadrado * 1.9);
  vertex(ladoDelCuadrado * 11.6, ladoDelCuadrado * 2.75);
  vertex(ladoDelCuadrado * 11.6, ladoDelCuadrado * 2.75);
  vertex(ladoDelCuadrado * 12, ladoDelCuadrado * 2.8);
  vertex(ladoDelCuadrado * 12, ladoDelCuadrado * 2.8);
  vertex(ladoDelCuadrado * 11, ladoDelCuadrado * 1);
  vertex(ladoDelCuadrado * 11, ladoDelCuadrado);
  vertex(ladoDelCuadrado, ladoDelCuadrado);
  endShape();
  pop();

  push();
  stroke('gray');
  for (let position = ladoDelCuadrado; position < tamañoDeCanvas; position += ladoDelCuadrado) {
    line(position, 0, position, tamañoDeCanvas);
    line(0, position, tamañoDeCanvas, position);
  }
  pop();

  noLoop();
}
