function ejer1() {
    var fecha = new Date();
    document.write('Estamos en el año ' + fecha.getFullYear() + '<br>')
    document.write('En el mes ' + fecha.getMonth() + '<br>')
    document.write('A día de ' + fecha.getDate() + '<br>')
    document.write('La hora actual es ' + fecha.getHours() + '<br>')
    document.write('Los minutos actuales son ' + fecha.getMinutes() + '<br>')
    document.write('Y los segundos actuales son ' + fecha.getSeconds() + '<br>')
}

function ejer2() {
    function sumadias (dias) {
        let fecha = new Date()
        fecha.setDate(fecha.getDate() + dias)
        return fecha
    }

    function anosuma (ano) {
        let anyo = new Date()
        anyo.setFullYear(anyo.getFullYear() + ano)
        return anyo
    }

    function horasuma (hora) {
        let time = new Date()
        time.setHours(time.getHours() + hora)
        return time
    }

    function restarfechas (fecha1, fecha2) {
        let f1 = fecha1.getTime()
        let f2 = fecha2.getTime()
        let fecha3 = (f1 - f2) / (1000 * 60 * 60 * 24)
        return fecha3
    }
    var fechaactual = new Date()
    var fecha85 = sumadias(85)
    var fecha187 = sumadias(-187)
    document.write('La fecha actual es: ' + fechaactual + '<br>')
    document.write('La fecha sumada 85 dias: ' + fecha85 + '<br>')
    document.write('La fecha restada 187 dias: ' + fecha187 + '<br>')
    document.write('Los dos años sumados son: ' + anosuma(2) + '<br>')
    document.write('Las 24h restadas son: ' + horasuma(-24) + '<br>')
    document.write('Las fechas restadas son: ' + restarfechas(fecha85, fecha187) + '<br>')
}

var acum = 60;
function ejer3(){
    if(acum>=0){
        document.write(acum);
        acum--;
        setTimeout(ejer3,1000);
    }
}

function ejer5(){
    var horaActual = new Date();
   document.write(horaActual.getHours()+":"+horaActual.getMinutes()+":"+horaActual.getSeconds()+'<br>');
    setTimeout(ejer5,1000);
}