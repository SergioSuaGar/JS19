function ejer1() {
    function invierteCadena (cad) {
        var x = cad.length;
        var y = ''
        while (x >= 0) {
            y += cad.charAt(x)
            x--
        }
        return y
    }

    function inviertePalabras (cad) {
        var t = ''
        var z = cad.split(' ')
        for (let i = 0; i <= z.length - 1; i++) {
            t += invierteCadena(z[i]) + '&nbsp'
        }
        return t
    }

    function encuentraPalabraMasLarga (cad) {
        let x = ''
        let c = 0
        let y = cad.split(' ')
        for (let i = 0; i <= y.length - 1; i++) {
            if (y[i].length >= c) {
                x = y[i]
                c = x.length
            }
        }
        return x
    }

    function fltraPalabrasMasLargas (cad, c) {
        let x = 0
        let y = cad.split(' ')
        for (let i = 0; i <= y.length - 1; i++) {
            if (y[i].length >= c) {
                x++
            }
        }
        return x
    }

    function cadenaBienFormada (cad) {
        let x = ''
        x = cad[0].toUpperCase() + cad.slice(1, (cad.length)).toLowerCase();
        return x
    }
    document.write(invierteCadena('cadena') + '<br>')
    document.write(inviertePalabras('invierte esta cadena') + '<br>')
    document.write(encuentraPalabraMasLarga('encuentra la palabra mas larga') + '<br>');
    document.write(fltraPalabrasMasLargas('filta las palabras mas largas', 3) + '<br>')
    document.write(cadenaBienFormada('pOn EN maYusCuLA lA pRimERa') + '<br>')
}

function ejer2(){
    function detectorMayus(cad) {
        var x = ""
        if (cad == cad.toUpperCase()) {
            x = "Son todas mayusculas"
        } else if (cad == cad.toLowerCase()) {
            x = "Son todas minusculas"
        } else {
            x = "Tiene mayusculas y minusculas"
        }
        return x
    }
    document.write(detectorMayus('SOY TODO MAYUS') +'<br>')
    document.write(detectorMayus('SoY uNA MEzclA') +'<br>')
    document.write(detectorMayus('soy todo minusculas') +'<br>')
}

function ejer7() {
    function invierteCadena (cad) {
        var x = cad.length
        var y = ''
        while (x >= 0) {
            y += cad.charAt(x)
            x--
        }
        return y
    }

    function formateo (cad) {
        var x = cad.toLowerCase().split(' ').join('')
        return x
    }

    var c = 'reconocer'
    var y = formateo(invierteCadena(c))
    var x = formateo(c)

    document.write(x + '<br>')
    document.write(y + '<br>')

    if (x == y) {
        document.write('Es palindromo')
    } else {
        document.write('No es palindromo')
    }
}

function ejer9() {
    function formateo(cad) {
        var x = cad.toLowerCase().split(' ').join('')
        return x
    }

    function invierteCadena (cad) {
        var x = cad.length
        var y = ''
        while (x >= 0) {
            y += cad.charAt(x)
            x--
        }
        return y
    }

    function tabla(cad) {
        var cadi = invierteCadena(cad)
        document.write('<table>')
        document.write('<tr>')
        for (let i = 0; i < cad.length; i++) {
            document.write('<td>' + cad[i] + '</td>')
        }
        document.write('</tr>')
        for (let j = 1; j < cad.length - 1; j++) {
            document.write("<tr>");
            document.write("<td>" + cad[j] + "</td>");

            for (let k = 0; k < cad.length - 2; k++) {
                document.write("<td></td>");
            }

            document.write("<td>" + cadi[j] + "</td>");
            document.write("</tr>");
        }
        for (let i = 0; i < cadi.length; i++) {
            document.write('<td>' + cadi[i] + '</td>')
        }
        document.write('</tr>')
    }
    tabla(formateo('sergio'))

}