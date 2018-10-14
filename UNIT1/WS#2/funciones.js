function ejercicio1(){
    var añoActual = parseInt(prompt("Introduce el año actual"));
    var añoNacimiento = parseInt(prompt("Introduce el año de nacimiento"));
    var edad = añoActual - añoNacimiento;
    var resultado = ("Tienes entre "+edad+" y "+ (edad-1)+" años");
    document.write(resultado);
}

function ejercicio2(){
    var edadActual = parseInt(prompt("Introduce tu edad actual"));
    var edadMaxima = parseInt(prompt("Introduce tu esperanza de vida"));
    var cantidadDia = parseInt(prompt("Intorduce la consumicion diaria"));
    var total = ((edadMaxima - edadActual)*365)*cantidadDia;
    document.write("You will need "+total+ " to last you until the ripe old age of "+edadMaxima);
}
function ejercicio3(){
    var radio= 15;
    var circunferencia= (radio*2)*3.14;
    var area=1/4*3.14*((radio*2)*(radio*2));
    document.write("La circunferencia es: "+ circunferencia +"<br/>El area es: "+ area);
}
function ejercicio4(){
    var celsius=27;
    var fahrenheit=celsius*1.8+32;
    var celsius2=0;
    document.write(celsius +"ºC son"+ fahrenheit+"ºF");
    document.write(fahrenheit +"ºF son"+ celsius2+"ºC");
}