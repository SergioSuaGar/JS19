function ejercicio1(){
    document.write("Hola Mundo");
}

function ejercicio2(){
    document.write("Hola Mundo </br> Soy el primer Script");
}

function ejercicio3(){
    var mensaje = "Hola Mundo! </br> Qué fácil es incluir 'comillas simples' </br> y “comillas dobles”"
    document.write(mensaje);
}

function ejercicio4() {
    var var1 = 5;
    var var2 = 3;
    document.write("El valor de la primera variables es: " + var1 + "</br>El valor de la segunda variables es: " + var2 +
        "</br> La suma de ambas variables es: " + (var1 + var2)+"</br> La resta de ambas variables es: " + (var1 - var2)+
        "</br>La multiplicacion de ambas variables es: " + (var1 * var2)+"</br>La division de ambas variables es: " + (var1 / var2));
}

function ejercicio5(){
    var var1 = prompt("Introduce el valor de la primera variable");
    var var2 = prompt("Introduce el valor de la segunda variable");
    document.write("El valor de la primera variables es: " + var1 + "</br>El valor de la segunda variables es: " + var2 +
        "</br> La suma de ambas variables es: " + (var1 + var2)+"</br> La resta de ambas variables es: " + (var1 - var2)+
        "</br>La multiplicacion de ambas variables es: " + (var1 * var2)+"</br>La division de ambas variables es: " + (var1 / var2));
}

function ejercicio6() {
    var var1 = parseInt(prompt("Introduce el valor de la primera variable"));
    var var2 = parseInt(prompt("Introduce el valor de la segunda variable"));
    if (var1 != var2) {
        if (var2 > var1){
            document.write("La segunda variable es mayor que la primera");
        }else{
            document.write("La primera variable es mayor que la segunda");
        }
    } else {
        document.write("La primera variable es igual que la segunda");
    }
}

function ejercicio7(){
    var var1 = parseInt(prompt("Introduce tu nota numerica"));
    switch (var1) {
        case 0: case 1: case 2: case 3:
        case 4 : document.write("Estas suspenso");break;
        case 5 : document.write("Tienes un aprobado raspado");break;
        case 6 : document.write("Tienes un bien");break;
        case 7:
        case 8 : document.write("Tienes un notable");break;
        case 9:
        case 10: document.write("Tienes un sobresaliente");break;
    }
}