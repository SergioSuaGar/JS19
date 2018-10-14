function greaterNum(num1,num2){
    if (num1 != num2) {
        if (num2 > num1){
            document.write("The greater number of "+num1+" and "+num2+" is "+num2);
            return num2;
        }else{
            document.write("The greater number of "+num2+" and "+num1+" is "+num1);
            return num1;
        }
    } else {
        document.write("La primera variable es igual que la segunda");
        return false;
    }
}

function helloWorld(language){
    switch (language) {
        case "es" : document.write("Hola, Mundo");break;
        case "en" : document.write("Hello, World");break;
        case "de" : document.write("Hallo Welt");break;
        default: document.write("Hello, World");
    }
}