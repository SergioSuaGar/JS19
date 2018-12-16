var svgNS = "http://www.w3.org/2000/svg";

/*
class Cuadrado {
    constructor(id, alto, ancho, color) {
        this.id = id;
        this.alto = alto;
        this.ancho = ancho;
        this.color = color;
    }

    vistaCuadrado() {
        this.cuadrado = document.createElementNS(svgNS, "rect");
        this.cuadrado.setAttributeNS(null, "id", this.id);
        this.cuadrado.setAttributeNS(null, "height", this.alto);
        this.cuadrado.setAttributeNS(null, "width", this.ancho);
        this.cuadrado.setAttributeNS(null, "fill", this.color);

        document.getElementById("mySVG").appendChild(this.cuadrado);

        this.atributoWidth = this.cuadrado.getAttribute('width');
        this.width = this.atributoWidth.slice(0, this.atributoWidth.length - 2);
        this.atributoHeight = this.cuadrado.getAttribute('height');
        this.height = this.atributoHeight.slice(0, this.atributoHeight.length - 2);
    }

    cambiarTamaño() {
        if (this.width <= 450) {
            this.cuadrado.setAttribute('width', (this.width++) + "px");
        }
        if (this.height <= 300) {
            this.cuadrado.setAttribute('height', (this.height++) + "px");
        }
    }

    animarCuadrado() {
        self = this;
        setInterval(function() {
            self.cambiarTamaño();
        }, 20);
    }

}
window.onload = function() {
    cuadrado = new Cuadrado("cuadrado", "50px", "50px", "red");
    cuadrado.vistaCuadrado();
};
*/
///////////////
function creaRectangulo(id, alto, ancho, color) {
    var rectangulo = document.createElementNS(svgNS, "rect");
    rectangulo.setAttributeNS(null, "id", id);
    rectangulo.setAttributeNS(null, "height", alto);
    rectangulo.setAttributeNS(null, "width", ancho);
    rectangulo.setAttributeNS(null, "fill", color);

    document.getElementById("mySVG").appendChild(rectangulo);

}

function animaRectangulo() {
    var rectangulo = document.getElementById("rectangulo");
    if (rectangulo.getAttribute("width") <= 450) {
        rectangulo.setAttribute('width', (rectangulo.getAttribute("width")+1) + "px");
    }
}
window.onload = function() {
    creaRectangulo("rectangulo", "50px", "50px", "red");
};