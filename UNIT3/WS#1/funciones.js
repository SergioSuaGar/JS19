function lanzamiento(){
    for (let i=0;i<6000;i++) {
        var resultado = Math.round((Math.random() * 6) + 1);
    }
    return resultado;
}

function ejer3(){
    var uno = 0;
    var dos = 0;
    var tres = 0;
    var cuatro = 0;
    var cinco = 0;
    var seis = 0;
    for (let i=0;i<6000;i++) {
        var resultado = Math.round((Math.random() * 6) + 1);
        switch (resultado) {
            case 1: uno++;break;
            case 2: dos++;break;
            case 3: tres++;break;
            case 4: cuatro++;break;
            case 5: cinco++;break;
            case 6: seis++;break;
        }
    }
    document.write("El numero 1 ha salido "+uno+" veces <br>");
    document.write("El numero 2 ha salido "+dos+" veces <br>");
    document.write("El numero 3 ha salido "+tres+" veces <br>");
    document.write("El numero 4 ha salido "+cuatro+" veces <br>");
    document.write("El numero 5 ha salido "+cinco+" veces <br>");
    document.write("El numero 6 ha salido "+seis+" veces <br>");
}

function ejer6(x,y) {
    if (y != 0){
        return x * ejer6(x, y-1);
    } else {
        return 1;
    }
}

function ejer7(x) {
    if (x != 0){
        return x * ejer7(x-1);
    } else {
        return 1;
    }
}