function paresImpares() {
    var arrayUno = [];
    var arrayAux = [];
    for (let i = 1; i <= 100; i++) {
        let random = Math.round(Math.random() * (1000 - 1)) + 1;
        arrayUno[i] = random;
        document.write(random + " | ");
    }
    document.write("<br>");
    arrayUno.sort();
    for (let i = 0; i < 100; i++) {
        document.write(arrayUno[i] + " | ");
    }
    document.write("<br>");
    arrayUno.sort((a,b)=>{if(a%2==0)return -1;else return 1});
    for (let i = 0; i < 100; i++) {
        document.write(arrayUno[i] + " | ");
    }
}
function ejer7() {
    var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    array.splice(0,10,0,0,0,0,0,0,0,0,0,0);
    document.write(array);
    document.write("<br>");
    var array2 = array.map(function(a) { return a+1;});
    document.write(array2);
    document.write("<br>");
    for (let i=0;i<array2.length;i++) {
        document.write(array2[i]+" ");
    }
}
function ejer8() {
    function tirarDado() {
        return Math.round(Math.random() * 6) + 1;
    }
    function sumarDados(tiradas=36000) {
        var arrayLanzamiento = [];
        for (let i = 0; i < tiradas; i++) {
            arrayLanzamiento.push(tirarDado() + tirarDado());
        }
        return arrayLanzamiento;
    }
    function lanzamientoMultiple() {
        var arrayMultipleLanzamiento = sumarDados();
        for (let i = 2; i < 13; i++) {
            document.write('Resultado de la tirada = ' + i + ' | ' + arrayMultipleLanzamiento.filter(function(a) {
                return a == i;
            }).length + ' veces <br/>')
        }
    }
    lanzamientoMultiple();
}
function ejer9() {
    function lanzarDado() {
        return Math.round(Math.random() * 6) + 1;
    }
    let tabla = new Array(6).fill(new Array(6).fill(0));
    for (let i = 0; i < 36000; i++) {
        tabla[lanzarDado() - 1][lanzarDado() - 1]++;
    }
    for (let i=0;i<6;i++){
        for (let j=0;i<6;i++)
            document.write(tabla[i,j]);
    }
}