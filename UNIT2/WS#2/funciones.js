function ejer1() {
    document.write("Un numero aleatorio entre 0 y 1: "+Math.round(Math.random())+'<br>');
    document.write("Un numero aleatorio entre 100 y 200: "+Math.round(Math.random()*(200-100)+parseInt(100))+'<br>');
    let principio = prompt('Entre: ')
    let final = prompt('Hasta: ')
    document.write("Un numero aleatorio entre "+principio+" y "+final+": "+Math.round(Math.random()*(final-principio)+parseInt(principio)));
}

function ejer5(){
    var num1 = parseInt(prompt('Introduce el primer coeficiente'));
    var num2 = parseInt(prompt('Introduce el segundo coeficiente'));
    var num3 = parseInt(prompt('Introduce el tercer coeficiente'));
    var num4 = (Math.pow(num2, 2) - (4 * num1 * num3));
    if (num4 > 0) {
        var solu1 = (-num2 + (Math.sqrt(num4))) / (2 * num1);
        var solu2 = (+num2 + (Math.sqrt(num4))) / (2 * num1);
        document.write('Las dos posibles sluciones son: ' + solu1 + '<br> y '+solu2);
    } else {
        document.write('No es posible de resolver');
    }
}

function 7() {

}

function ejer8(){
    var num = Math.round(Math.random()*2);
    switch (num) {
        case 0: document.getElementById("numImagen").src = "https://vignette.wikia.nocookie.net/kirby/images/e/eb/Bot%C3%B3n_1.png/revision/latest?cb=20130111184053";break;
        case 1: document.getElementById("numImagen").src = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Die_sch%C3%B6ne_2.png";  break;
        case 2: document.getElementById("numImagen").src = "https://purepng.com/public/uploads/large/21504467933dsbcivyrjg4ksrlv7f86hb2gx8jtsdo585lznyn0na3yxse43mgyjwb71tkkyunt1be8hbf5trfj2lvccit0nypfo9gpo8yqj9lq.png";break;
    }
}