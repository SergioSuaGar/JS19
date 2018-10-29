function setCookie(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (5*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    checkCookie();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
    configurarPref();
}
function borrarCookie(cname,cvalue) {
    var expires = "expires=Thu, 01 Jan 1970 00:00:01 GMT";
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function configurarPref() {
    let cFondo = prompt("Introduce el color de fondo deseado:");
    let cParrafo = prompt("Introduce el color de parrafo deseado:");
    let tamañoLetra = prompt("Introduce el tamaño de la letra:");
    document.body.style.bgColor = +"'"+cFondo+"'";
}