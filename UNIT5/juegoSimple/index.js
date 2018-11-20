function preparacion(){
    var body = document.getElementsByTagName("body");
    for (let i=0;i<=10;i++){
        var imagen = document.createElement("img");
        imagen.style.src = 'https://i0.wp.com/www.my-bolivia.com/wp-content/uploads/2018/06/Our-flag-in-rplace-is-dying.-Try-and-defend-it-if-youre-online-guys.jpg?w=680';
        body.appendChild(imagen);
    }
    var imagenes = document.getElementsByTagName("img");
    for (let i=0;i<=imagenes.length;i++){
        var h4 = document.createElement("h4");
        imagenes[i].appendChild(h4);
    }
}
function contadorClicks() {

    clicks1++;
    document.getElementById("contClicks").innerHTML = clicks1;
}
window.onload = function() {
    preparacion();
};

