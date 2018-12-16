function ejercicio2() {
    var enlaces = document.getElementsByTagName('a');
    if (enlaces.length>0) {
        for (let i = 0; i < enlaces.length; i++) {
            var divEnlaces = document.getElementById("divEnlaces");
            let enlaceAux = enlaces[i].getAttribute('href');
            var nuevoParrafo = document.createElement('p');
            nuevoParrafo.textContent = (enlaceAux);
            divEnlaces.appendChild(nuevoParrafo);
        }
    }
    return enlaces.length;
}

var fecha = new Date();
var minutos = fecha.getMinutes();
function ejercicio3(url,x) {
    var f = new Date();
    var s = f.getSeconds();
    var min = f.getMinutes();
    if (minutos == min) {
        document.getElementById('reloj').innerHTML = s;
    } else {
        minutos = min;
        window.location = url;
    }
    setInterval(ejercicio3, x);
}

function ejercicio4() {
    class bola {
        constructor(x, y, radio) {
            this.x = x;
            this.y = y;
            this.radio = radio;
        }
        get caracteristicas() {
            return 'La bola se encuentra en la posicion ' + this.x + ',' + this.y + ' y tiene radio ' + this.radio+'.';
        }
    }
    class bolitas {
        constructor() {
            this.bolitas = [];

        }
        añadirBola(bola) {
            this.bolitas.push(bola);
        }

        buscarBolaporRadio(radio) {
            var arrayResultado=[];
            for (let bola = 0; bola < this.bolitas.length; bola++) {
                if (radio == this.bolitas[bola].radio) {
                    arrayResultado.push(this.bolitas[bola].radio);
                }
            }return arrayResultado;
        }
        mostrarBolas() {
            this.cantidad = this.bolitas.length;
            for (let bola = 0; bola < this.bolitas.length; bola++) {
                console.log('Total de bolas en el contenedor: ' + this.cantidad + ' ;Soy la bola numero ' + (bola + 1) + ': ' + this.bolitas[bola].caracteristicas);
             }
        }
    }
}



function ejercicio5(tabla) {
    if (document.getElementById(tabla)) {
        var t = document.getElementById(tabla);
        var cabecera = t.getElementsByTagName('tr')[0];
        var titulos = cabecera.getElementsByTagName('td');
        var columnas = t.getElementsByTagName('tr');
        for (var i = 0; i < titulos.length; i++) {
            titulos[i].style.color = "red";
        }
        for (let j = 1; j < columnas.length; j++) {
            var filas = columnas[j];
            if (j % 2 == 0) {
                filas.style.backgroundColor = 'orange';
            } else {
                filas.style.backgroundColor = 'green';
            }

        }
    } else {
        console.log('No se ha introducido una id valida');
    }
}
window.onload = function() {
    ejercicio5('tabla');
};

function ejercicio6() {
    var escribiendo = document.getElementById("divWhat");
    escribiendo.textContent = "escribiendo...";
    setTimeout(function() {
        escribiendo.textContent = "";
    }, 3000);
}