function tellFortune(numChild,namePart,location,job){
    document.write("You will be a "+job+" in "+location+", and married to "+namePart+" with "+numChild+" kids.");
}
function calculateAge (añoNacimiento,añoActual){
    var edad = añoActual - añoNacimiento;
    var resultado = ("Tienes entre "+edad+" y "+ (edad-1)+" años");
    document.write(resultado);
}

function calculateSupply (edadActual, edadMaxima,cantidadDia){
    var total = ((edadMaxima - edadActual)*365)*cantidadDia;
    document.write("You will need "+total+ " to last you until the ripe old age of "+edadMaxima);
}

function calcCircumfrence(radio){
    var radio;
    var circunferencia= (radio*2)*3.14;
    document.write("La circunferencia es: "+ circunferencia);
}

function calcArea(radio){
    var radio;
    var area=1/4*3.14*((radio*2)*(radio*2));
    document.write("El area es: "+ area);
}

function celsiusToFahrenheit(celsius){
    var fahrenheit=celsius*1.8+32;
    document.write(celsius +"ºC son "+ fahrenheit+"ºF");
}

function fahrenheitToCelsius(fahrenheit){
    var celsius2=(fahrenheit-32)*(5/9);
    document.write(fahrenheit +"ºF son "+ celsius2+"ºC");
}