function ejer10(){
    for (let i=1;i<=6;i++){
        document.write('<h'+i+'>'+"Cabecera h"+i+'</h></br>');
    }
}

function ejer11(){
    var numCol= prompt("Introduce el numero de columnas");
    var alto= prompt("Introduce el alto de la celda");
    var ancho= prompt("Introduce el ancho de la celda");
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    document.write("<tr bgcolor = 'white' height = "+alto+">");
    for (let i=1;i<=numCol;i++){
        document.write("<td width= "+ancho+" > Hola </td>");
    }
    document.write("</tr>");
    document.write("</table>");
}

function ejer12(){
    var numCol= prompt("Introduce el numero de columnas");
    var alto= prompt("Introduce el alto de la celda");
    var ancho= prompt("Introduce el ancho de la celda");
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    document.write("<tr bgcolor = 'white' height = "+alto+">");
    for (let i=1;i<=numCol;i++){
        if(i%2){
            document.write("<td bgcolor = 'black' width= "+ancho+" > Hola </td>");
        }else {
            document.write("<td width= " + ancho + " > Hola </td>");
        }
    }
    document.write("</tr>");
    document.write("</table>");
}

function ejer13(){
    var numCol= prompt("Introduce el numero de columnas");
    var alto= prompt("Introduce el alto de la celda");
    var ancho= prompt("Introduce el ancho de la celda");
    var i=0;
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    document.write("<tr bgcolor = 'white' height = "+alto+">");
    while (i<=numCol){
        document.write("<td width= "+ancho+" > Hola </td>");
        i++;
    }
    document.write("</tr>");
    document.write("</table>");
}

function ejer14(){
    var numCol= prompt("Introduce el numero de columnas");
    var alto= prompt("Introduce el alto de la celda");
    var ancho= prompt("Introduce el ancho de la celda");
    var i=1;
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    document.write("<tr bgcolor = 'white' height = "+alto+">");
    while (i<=numCol){
        if(i%2){
            document.write("<td bgcolor = 'black' width= "+ancho+" > Hola </td>");
            i++;
        }else {
            document.write("<td width= " + ancho + " > Hola </td>");
            i++;
        }
    }
    document.write("</tr>");
    document.write("</table>");
}

function ejer15(){
    var numAdivinar = parseInt(prompt("Introduce el numero a adivinar"));
    var num = -1;
    while (num!=numAdivinar){
        num= parseInt(prompt("Introduce un numero"));
        if (num>numAdivinar){
            alert("El numero a adivinar es menor");
        } else if(num<numAdivinar){
            alert("El numero a adivinar es mayor");
        } else{
            alert("Has acertado!");
        }
    }
}

function ejer16() {
    var numAdivinar = parseInt(prompt("Introduce el numero a adivinar"));
    var num = -1;
    do{
        num= parseInt(prompt("Introduce un numero"));
        if (num>numAdivinar){
            alert("El numero a adivinar es menor");
        } else if(num<numAdivinar){
            alert("El numero a adivinar es mayor");
        } else{
            alert("Has acertado!");
        }
    } while (num!=numAdivinar)
}

function ejer17() {
    for(let y=1;y<=10;y++){
        document.write("<h3>Tabla del "+y+"</h3>");
        for(let x=1;x<=10;x++){
            document.write(y+"x"+x+"="+y*x+"</br>");
        }
    }
}

function ejer18() {
    var numCol= prompt("Introduce el numero de columnas");
    var numFil= prompt("Introduce el numero de filas");
    var alto= prompt("Introduce el alto de la celda");
    var ancho= prompt("Introduce el ancho de la celda");
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    for (let z=1;z<=numFil;z++) {
        document.write("<tr bgcolor = 'white' height = "+alto+">");
        for (let i = 1; i <= numCol; i++) {
            document.write("<td width= " + ancho + " > Hola </td>");
        }
    }
    document.write("</tr>");
    document.write("</table>");
}

function ejer19() {
    var ancho= prompt("Introduce el ancho de las celdas");
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    for (let z=1;z<=8;z++) {
        document.write("<tr bgcolor = 'white' height = " + ancho + ">");
        for (let i = 1; i <= 8; i++) {
            if (i % 2 == 0) {
                document.write("<td bgcolor='black' width='" + ancho + "'> &nbsp;</td>");
                document.write("<td bgcolor='white' width='" + ancho + "'> &nbsp;</td>");

            } else {
                document.write("<td bgcolor='white' width='" + ancho + "'> &nbsp;</td>");
                document.write("<td bgcolor='black' width='" + ancho + "'> &nbsp;</td>");
            }
        }
        document.write("</tr>");
        document.write("</table>");
    }
}