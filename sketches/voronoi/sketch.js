const tamañoDeCanvas = 750;
const tamañoDeCuadro = 600;
const distanciaParaCentrar = tamañoDeCanvas - tamañoDeCuadro;

function setup() {
    const canvas = createCanvas(tamañoDeCanvas, tamañoDeCanvas);
    canvas.parent('voronoi');

    background('red');

    dibujarCuadro(tamañoDeCanvas, distanciaParaCentrar);
}

function draw() {
}

function mousePressed() {
    dibujarPunto(mouseX, mouseY, 'white');
}

function dibujarCuadro(tamañoDeCanvas, distanciaParaCentrar) {
    push()
    fill(51);
    noStroke();
    rect(distanciaParaCentrar / 2, distanciaParaCentrar / 8, tamañoDeCanvas - distanciaParaCentrar, tamañoDeCanvas - distanciaParaCentrar);
    pop();
}

function dibujarPunto(x, y, color) {
    push()
    strokeWeight(5);
    stroke(color);
    point(x, y);
    pop();
}
