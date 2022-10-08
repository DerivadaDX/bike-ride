const tamañoDeCanvas = 750;
const tamañoDeCuadro = 600;

function setup() {
    const canvas = createCanvas(tamañoDeCanvas, tamañoDeCanvas);
    canvas.parent('voronoi');
    background('red');
    strokeWeight(5);
    stroke('white');
}

function draw() {
    dibujarCuadro(tamañoDeCanvas, tamañoDeCuadro);
}

function mousePressed() {
    point(mouseX, mouseY);
}

function dibujarCuadro(tamañoDeCanvas, tamañoDeCuadro) {
    const distanciaParaCentrar = tamañoDeCanvas - tamañoDeCuadro;

    push()
    fill(51);
    rect(distanciaParaCentrar / 2, distanciaParaCentrar / 8, tamañoDeCanvas - distanciaParaCentrar, tamañoDeCanvas - distanciaParaCentrar);
    pop();
}
