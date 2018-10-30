function estructura() {
    var body = document.body;
    var para1 = document.createElement('p');
    var para2 = document.createElement('p');
    var para3 = document.createElement('p');
    para1.innerHTML = "<a href src='https://www.google.es'>Google</a>";
    para2.innerHTML = "<a href src='https://twitter.com/'>Twitter</a>";
    para3.innerHTML = "<a href src='https://www.google.es'>Google</a>";
    body.appendChild(para1);
    body.appendChild(para2);
    body.appendChild(para3);
}
var numEnlaces = document.getElementsByTagName("a");
function numEnlaces() {
    console.log(numEnlaces.length);
    return ('El numero de enlaces en la pagina es: ' + numEnlaces.length);
}
function penultEnlace() {
    console.log(numEnlaces[numEnlaces.length - 2].href);
    return ('El penultimo enlace es: ' + numEnlaces[numEnlaces.length - 2].href);
}
function numGoogle() {
    var contador = 0;
    for (var i = 0; i < numEnlaces.length; i++) {
        if (numEnlaces[i].href == "https://www.google.es") {
            contador++;
        }
    }
    return ('El numero de enlaces a Google es: ' + contador);
}
function numEnlacesP3() {
    var parrafo = document.getElementsByTagName('p');
    var numEnlacess = parrafo[2].numEnlaces;
    return ('El numero de enlaces en el Tercer parrado es: ' + numEnlacess.length);
}