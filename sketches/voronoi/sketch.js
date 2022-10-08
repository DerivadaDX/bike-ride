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
