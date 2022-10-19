const padding = 5;
const tamañoDeGrilla = 20;
const tamañoDeCanvas = 600;
const ladoDelCuadrado = tamañoDeCanvas / tamañoDeGrilla;

function setup() {
  const canvas = createCanvas(tamañoDeCanvas, tamañoDeCanvas);
  canvas.parent('hoffman');
  noLoop();
}

function draw() {
  dibujarBordeAmarillo();
  dibujarParteVerde();
  dibujarCieloAzul();
  dibujarCieloRojo();
  dibujarCumbreDeMontaña();
  dibujarGrilla();
}

function dibujarBordeAmarillo() {
  push();
  noStroke();
  fill('#facc31');
  rect(0, 0, tamañoDeCanvas, tamañoDeCanvas);
  pop();
}

function dibujarParteVerde() {
  push();
  noStroke();
  fill('#62b449');
  rect(
    ladoDelCuadrado, ladoDelCuadrado,
    tamañoDeCanvas - ladoDelCuadrado * 2, tamañoDeCanvas - ladoDelCuadrado * 2
  );
  pop();
}

function dibujarCieloAzul() {
  push();
  fill('#3773b1');
  noStroke();

  beginShape();
  vertex(ladoDelCuadrado, ladoDelCuadrado);
  vertex(ladoDelCuadrado * 11, ladoDelCuadrado);
  vertex(ladoDelCuadrado * 12, ladoDelCuadrado * 2.8);
  vertex(ladoDelCuadrado * 11.6, ladoDelCuadrado * 2.75);
  vertex(ladoDelCuadrado * 11.1, ladoDelCuadrado * 1.9);
  vertex(ladoDelCuadrado * 10.75, ladoDelCuadrado * 2);
  vertex(ladoDelCuadrado * 10.33, ladoDelCuadrado * 1.75);
  vertex(ladoDelCuadrado * 9 - padding, ladoDelCuadrado * 3.66);
  vertex(ladoDelCuadrado * 8.50, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 8.33, ladoDelCuadrado * 3.50);
  vertex(ladoDelCuadrado * 8.25, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 4.5, ladoDelCuadrado * 8.66);
  vertex(ladoDelCuadrado * 4 - padding, ladoDelCuadrado * 8);
  vertex(ladoDelCuadrado * 3, ladoDelCuadrado * 9);
  vertex(ladoDelCuadrado * 2.66, ladoDelCuadrado * 8.75);
  vertex(ladoDelCuadrado * 1.5, ladoDelCuadrado * 10.5);
  vertex(ladoDelCuadrado * 1.5 - padding, ladoDelCuadrado * 10.5);
  vertex(ladoDelCuadrado, ladoDelCuadrado * 11.33);
  vertex(ladoDelCuadrado, ladoDelCuadrado);
  endShape(CLOSE);
  pop();
}

function dibujarCieloRojo() {
  push();
  fill('#f8445d');
  noStroke();

  beginShape();
  vertex(ladoDelCuadrado * 11, ladoDelCuadrado);
  vertex(ladoDelCuadrado * 19, ladoDelCuadrado);
  vertex(ladoDelCuadrado * 19, ladoDelCuadrado * 11.33);
  vertex(ladoDelCuadrado * 17.95, ladoDelCuadrado * 8.5);
  vertex(ladoDelCuadrado * 17.66, ladoDelCuadrado * 8.66);
  vertex(ladoDelCuadrado * 17.25, ladoDelCuadrado * 8 - padding);
  vertex(ladoDelCuadrado * 16.5, ladoDelCuadrado * 9 - padding);
  vertex(ladoDelCuadrado * 12, ladoDelCuadrado * 2.8);
  vertex(ladoDelCuadrado * 11, ladoDelCuadrado);
  endShape(CLOSE);
  pop();
}

function dibujarCumbreDeMontaña() {
  push();
  fill('#f0f0f0');
  noStroke();

  beginShape();
  vertex(ladoDelCuadrado * 7.5, ladoDelCuadrado * 4.33);
  vertex(ladoDelCuadrado * 8.25, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 8.33, ladoDelCuadrado * 3.50);
  vertex(ladoDelCuadrado * 8.50, ladoDelCuadrado * 3.33);
  vertex(ladoDelCuadrado * 9 - padding, ladoDelCuadrado * 3.66);
  vertex(ladoDelCuadrado * 10.33, ladoDelCuadrado * 1.75);
  vertex(ladoDelCuadrado * 10.75, ladoDelCuadrado * 2);
  vertex(ladoDelCuadrado * 11.1, ladoDelCuadrado * 1.9);
  vertex(ladoDelCuadrado * 11.6, ladoDelCuadrado * 2.75);
  vertex(ladoDelCuadrado * 12, ladoDelCuadrado * 2.8);
  vertex(ladoDelCuadrado * 12.9, ladoDelCuadrado * 4);
  vertex(ladoDelCuadrado * 13.15, ladoDelCuadrado * 4.33);
  endShape(CLOSE);

  beginShape();
  curveVertex(ladoDelCuadrado * 6.9, ladoDelCuadrado * 5.2);
  curveVertex(ladoDelCuadrado * 6.9, ladoDelCuadrado * 5.2);
  curveVertex(ladoDelCuadrado * 8.25, ladoDelCuadrado * 4.25)
  curveVertex(ladoDelCuadrado * 12.5, ladoDelCuadrado * 4.25);
  curveVertex(ladoDelCuadrado * 14.15, ladoDelCuadrado * 5.7);
  curveVertex(ladoDelCuadrado * 13, ladoDelCuadrado * 5.3);
  curveVertex(ladoDelCuadrado * 12.75, ladoDelCuadrado * 6.2);
  curveVertex(ladoDelCuadrado * 11.5, ladoDelCuadrado * 4.5);
  curveVertex(ladoDelCuadrado * 11, ladoDelCuadrado * 6.25);
  curveVertex(ladoDelCuadrado * 9.75, ladoDelCuadrado * 4.5);
  curveVertex(ladoDelCuadrado * 9.33, ladoDelCuadrado * 5);
  curveVertex(ladoDelCuadrado * 9.25, ladoDelCuadrado * 4.5);
  curveVertex(ladoDelCuadrado * 8, ladoDelCuadrado * 5.5);
  curveVertex(ladoDelCuadrado * 7.9, ladoDelCuadrado * 4.66);
  curveVertex(ladoDelCuadrado * 6.9, ladoDelCuadrado * 5.2);
  curveVertex(ladoDelCuadrado * 6.9, ladoDelCuadrado * 5.2);
  endShape(CLOSE);

  triangle(
    ladoDelCuadrado * 6.9, ladoDelCuadrado * 5.2,
    ladoDelCuadrado * 7.5, ladoDelCuadrado * 4.33,
    ladoDelCuadrado * 8, ladoDelCuadrado * 4.33,
  );

  triangle(
    ladoDelCuadrado * 12.75, ladoDelCuadrado * 4.33,
    ladoDelCuadrado * 13.15, ladoDelCuadrado * 4.33,
    ladoDelCuadrado * 14.15, ladoDelCuadrado * 5.7,
  );
  pop();
}

function dibujarGrilla() {
  push();
  stroke('gray');
  for (let position = ladoDelCuadrado; position < tamañoDeCanvas; position += ladoDelCuadrado) {
    line(position, 0, position, tamañoDeCanvas);
    line(0, position, tamañoDeCanvas, position);
  }
  pop();
}
