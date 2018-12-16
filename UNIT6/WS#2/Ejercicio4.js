function comprobarNombre() {
    var nombre = document.getElementById('nombre').value;
    var respuestaComprobacion = document.getElementById('comprobacion');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nombresRegistrados = JSON.parse(this.responseText);
            if(nombresRegistrados['nombreFormulario'] == 'true'){
                respuestaComprobacion.innerHTML = 'Ocupado';
            } else {
                respuestaComprobacion.innerHTML = 'Correcto';

            }
        }
    };
    xhttp.open("GET", "comprobar.php?nombreFormulario="+nombre, true);
    xhttp.send();
}