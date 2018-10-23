function validarNombre() {
    var x = document.forms["form"]["nombre"].value;
    let nombreExpresion = new RegExp("^[a-zA-Z\s]+$");
    if (nombreExpresion.test(x)) {
        document.getElementById("nombre").style.backgroundColor="green"
    }else{document.getElementById("nombre").style.backgroundColor="red"}
}

function validarApellido() {
    var x = document.forms["form"]["apellido"].value;
    let apellidoExpresion = new RegExp("^[a-zA-Z\s]+$");
    if (apellidoExpresion.test(x)) {
        document.getElementById("apellido").style.backgroundColor="green"
    }else{document.getElementById("apellido").style.backgroundColor="red"}
}

function validarDNI(){
    var x = document.forms["form"]["dni"].value;
    let dniExpresion = new RegExp("^\\d{8}([A-Z])$");
    if (dniExpresion.test(x)) {
        document.getElementById("dni").style.backgroundColor="green"
    }else{document.getElementById("dni").style.backgroundColor="red"}
}

function validarTelefono(){
    var x = document.forms["form"]["telefono"].value;
    let telefonoExpresion = new RegExp("^\\d{9}$");
    if (telefonoExpresion.test(x)) {
        document.getElementById("telefono").style.backgroundColor="green"
    }else{document.getElementById("telefono").style.backgroundColor="red"}
}

function validarEmail(){
    var x = document.forms["form"]["email"].value;
    let emailExpresion = new RegExp("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
    if (emailExpresion.test(x)) {
        document.getElementById("email").style.backgroundColor="green"
    }else{document.getElementById("email").style.backgroundColor="red"}
}

function validarUsuario(){
    var x = document.forms["form"]["usuario"].value;
    let usuarioExpresion = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[$@$!%?&])([A-Za-z\\d$@$!%?&]|[^ ]){8,15}$");
    if (usuarioExpresion.test(x)) {
        document.getElementById("usuario").style.backgroundColor="green"
    }else{document.getElementById("usuario").style.backgroundColor="red"}
}