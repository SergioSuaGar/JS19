/*
--------------------------PARA UN ARCHIVO XML---------------------

setInterval(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            maquetaCorreos(this);
        }
    };

    xhttp.open("GET", "correos.xml", true);
    xhttp.send();
    function maquetaCorreos(ficheroCorreos) {
        var correosXml = ficheroCorreos.responseXML;
        var arrayCorreos = correosXml.getElementsByTagName("correo");
        for (var i = 0; i < arrayCorreos.length; i++) {
            var remitente = arrayCorreos[i].getElementsByTagName("remitente")[0].childNodes[0].nodeValue;
            var asunto = arrayCorreos[i].getElementsByTagName("asunto")[0].childNodes[0].nodeValue;
            var mensaje = arrayCorreos[i].getElementsByTagName("mensaje")[0].childNodes[0].nodeValue;
            var divRaiz = document.createElement("div");
            var remitenteElement = document.createElement("p");
            remitenteElement.innerHTML="Remitente: "+remitente;
            divRaiz.appendChild(remitenteElement);
            var asuntoElement = document.createElement("h3");
            asuntoElement.innerHTML="Asunto: "+asunto;
            divRaiz.appendChild(asuntoElement);
            var mensajeElement = document.createElement("p");
            mensajeElement.innerHTML="Mensaje: "+mensaje;
            divRaiz.appendChild(mensajeElement);
            document.body.appendChild(divRaiz);
        }
    }
}, 5000);
*/

// ---------------------------PARA UN ARCHIVO JSON----------------------------

setInterval(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            maquetaCorreos(JSON.parse(this.response));
        }
    };

    xhttp.open("GET", "correos.json", true);
    xhttp.send();
    function maquetaCorreos(ficheroCorreos) {
        var correos = ficheroCorreos.correos;
        for (let i=0;i<correos.length;i++){
            var remitenteElement = document.createElement("p");
            var asuntoElement = document.createElement("h3");
            var mensajeElement = document.createElement("p");
            remitenteElement.innerHTML = correos[i].remitente;
            asuntoElement.innerHTML = correos[i].asunto;
            mensajeElement.innerHTML = correos[i].mensaje;
            document.body.appendChild(remitenteElement);
            document.body.appendChild(asuntoElement);
            document.body.appendChild(mensajeElement);
        }
    }
}, 5000);