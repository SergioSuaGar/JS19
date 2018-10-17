function ejerA(){
    var array = [1,2,3,4,5,6,7,8,9,10];
    document.write(array.sort(function(a,b){return a - b}).pop());
    return (array.sort(function(a,b){return a - b}).pop());
}
function ejerB() {
    var array = ["Hola","que","tal","genial","yo","me","alegro"];
    document.write(array.sort(function(a,b){return a.length - b.length}).pop());
    return (array.sort(function(a,b){return a.length - b.length}).pop());
}
function ejerC() {
    var array = [1,2,3,4,5,6,7,8,9,10];
    document.write((array.filter(function (a) {return a%2==0})));
    return (array.filter(function (a) {return a%2==0}));
}
function ejerD() {
    var array = [1,2,3,4,5,6,7,8,9,10];
    document.write((array.filter(function (a) {return a%2!=0})));
    return (array.filter(function (a) {return a%2==0}));
}
function ejerE() {
    var array = ["Luis","Paco","Manolo","Luisa"];
    document.write((array.filter(function (a) {return a.includes("is")})));
    return (array.filter(function (a) {return a.includes("is")}));
}
function ejerF() {
    var array = [1,2,3,4,5,6,7,8,9,10];
    return (array.filter(function(a) {return a%3==0}));
}
function ejerG(){
    var arrayUno = ["hola","que","tal"];
    var arrayDos = ["muy", "bien"];
    var arrayTres = arrayUno.concat(arrayDos);
    document.write(arrayTres);
    return(arrayTres);
}
function ejerH() {
    var arrayUno = ["hola","que","tal"];
    var arrayDos = ["muy", "bien"];
    var arrayTres = arrayUno.concat(arrayDos);
    document.write((arrayTres.sort(function(a,b){return a - b})));
    return (arrayTres.sort(function(a,b){return a - b}));
}
function ejerI() {
    var array = ["Hola","que","tal"];
    document.write(array.shift());
    return(array.shift());
}
function ejerJ() {
    var array = ["Hola","que","tal"];
    document.write(array.splice(1,3));
}
function ejerK() {
    var array = ["Hola","que","tal"];
    array.splice(2,1,'reemplazado');
    document.write(array);
    return array;
}
function ejerL() {
    var array = ["Luis","Jose","Paco","Manolo","Juanma"];
    document.write(array.filter(function(a){return a[0] == 'J'})).sort();
    return (array.filter(function(a){return a[0] == 'J'})).sort();
}