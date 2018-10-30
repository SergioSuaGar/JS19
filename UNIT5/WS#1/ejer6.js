arrayImagenes = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png","https://s3.amazonaws.com/tinycards/image/3777ccd1a9fc564faa97b328017ec46a",
    "http://ampacolegiojoaquinturina.es/wp-content/uploads/2018/09/tres.png"];

function anteriorImagen() {
    var imagen = document.getElementById('imagen').getAttribute('src');
    var pos = imagenes.indexOf(imagen);
    if (pos == 0) {
        document.getElementById('imagen').setAttribute('src', imagenes[imagenes.length - 1]);
    } else {
        document.getElementById('imagen').setAttribute('src', imagenes[pos - 1]);
    }
}

function siguienteImagen() {
    var imagen = document.getElementById('imagen').getAttribute('src');
    var pos = imagenes.indexOf(imagen);
    if (pos == imagenes.length - 1) {
        document.getElementById('imagen').setAttribute('src', imagenes[0]);
    } else {
        document.getElementById('imagen').setAttribute('src', imagenes[pos + 1]);
    }
}