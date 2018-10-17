function ejer1() {
    alert("Ejercicio 1");
}
function ejer2() {
    var x = window.event.clientX;
    var y = window.event.clientY;
    console.log(x+","+y);
}
function ejer4() {
    document.write("<table id='tabla' cellspacing='0' onmousemove='pintar(event)'>");
    for (let i=0;i<80;i++){
        document.write("<tr>")
        for (let j=0;j<120;j++) {
            document.write("<td width='15px' height='6px'></td>");
        }
    }
    document.write("</tr>");
}
function pintar(e) {
    if (event.ctrlKey) {
        event.target.style.backgroundColor="#FF0000";
    } else if(event.shiftKey){
        event.target.style.backgroundColor="#0000FF";
    } else if(event.altKey){
        document.getElementById("tabla").remove();
        ejer4();
    }else if(event.buttons==1){
        event.target.style.backgroundColor="#FFFFFF";
    }
}
//window.onload = ejer4;

var clickSobreImagen = false;

function iniciar() {
    document.getElementById("imagen").addEventListener("mousedown", clickada);
    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", soltar);
}
function clickada() {
    clickSobreImagen = true;
}
function soltar() {
    clickSobreImagen = false;
}
function mover(event) {
    var objetoImagen = document.getElementById("imagen");
    var x = window.event.clientX;
    var y = window.event.clientY;
    if (clickSobreImagen) {
        objetoImagen.vspace = y;
        objetoImagen.hspace = x;
    }
}



