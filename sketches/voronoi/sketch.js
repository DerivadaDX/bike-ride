let canvas;
const tamañoDeCanvas = 750;
const tamañoDeCuadro = 600;
const distanciaParaCentrar = tamañoDeCanvas - tamañoDeCuadro;

function setup() {
    canvas = createCanvas(tamañoDeCanvas, tamañoDeCanvas);
    canvas.parent('voronoi');

    centrarHorizontalmente();
    background('red');

    dibujarCuadro(tamañoDeCanvas, distanciaParaCentrar);
}

function draw() {
}

function windowResized() {
    centrarHorizontalmente();
}

function centrarHorizontalmente() {
    const parent = select('#voronoi');
    const x = (parent.width - width) / 2;

    canvas.position(x, canvas.y);
}

function mousePressed() {
    const descripciónDelCuadro = obtenerDescripciónDelCuadro(tamañoDeCanvas, distanciaParaCentrar);

    if (estáDentroDelCuadro(mouseX, mouseY, descripciónDelCuadro)) {
        dibujarPunto(mouseX, mouseY, 'white');
    }
}

function dibujarCuadro(tamañoDeCanvas, distanciaParaCentrar) {
    const descripción = obtenerDescripciónDelCuadro(tamañoDeCanvas, distanciaParaCentrar);

    push();
    fill(51);
    noStroke();
    rect(descripción.x, descripción.y, descripción.width, descripción.height);
    pop();
}

function dibujarPunto(x, y, color) {
    push()
    strokeWeight(5);
    stroke(color);
    point(x, y);
    pop();
}

function estáDentroDelCuadro(xDelPunto, yDelPunto, descripciónDelCuadro) {
    const estáDentroHorizontalmente = xDelPunto >= descripciónDelCuadro.x && xDelPunto <= descripciónDelCuadro.x + descripciónDelCuadro.width;
    const estáDentroVerticalmente = yDelPunto >= descripciónDelCuadro.y && yDelPunto <= descripciónDelCuadro.y + descripciónDelCuadro.height;

    return estáDentroHorizontalmente && estáDentroVerticalmente;
}

function obtenerDescripciónDelCuadro(tamañoDeCanvas, distanciaParaCentrar) {
    const descripción = {
        x: distanciaParaCentrar / 2,
        y: distanciaParaCentrar / 8,
        width: tamañoDeCanvas - distanciaParaCentrar,
        height: tamañoDeCanvas - distanciaParaCentrar
    };

    return descripción;
}
