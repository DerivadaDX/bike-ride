const tamañoDeCanvas = 750;
const tamañoDeCuadro = 600;

function setup() {
    const canvas = createCanvas(tamañoDeCanvas, tamañoDeCanvas);
    canvas.parent('voronoi');
    background('red');
    dibujarCuadro(tamañoDeCanvas, tamañoDeCuadro);
}

function draw() {
}

function mousePressed() {
    dibujarPunto(mouseX, mouseY);
}

function dibujarCuadro(tamañoDeCanvas, tamañoDeCuadro) {
    const distanciaParaCentrar = tamañoDeCanvas - tamañoDeCuadro;

    push()
    fill(51);
    noStroke();
    rect(distanciaParaCentrar / 2, distanciaParaCentrar / 8, tamañoDeCanvas - distanciaParaCentrar, tamañoDeCanvas - distanciaParaCentrar);
    pop();
}

function dibujarPunto(x, y) {
    push()
    strokeWeight(5);
    stroke('white');
    point(x, y);
    pop();
}
