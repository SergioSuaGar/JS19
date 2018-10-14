function ejer1() {
    if ("geolocation" in navigator) {
        document.write('La geolocalización está disponible en este navegador <br><br>')
        navigator.geolocation.getCurrentPosition(miPosicion,error);
    } else {
        document.write('El permiso de geolocalización ha sido denegado')
    }
    function miPosicion(posicion) {
        var coords=posicion.coords;
        document.write("La latitud es "+coords.latitude+'<br>');
        document.write("La longitud es "+coords.longitude);
    }
    function error(error){
        document.write(error.code+ " : "+error.message);
    }
}

function ejer1Improved() {
    if ("geolocation" in navigator) {
        document.write('La geolocalización está disponible en este navegador <br><br>')
        var id = navigator.geolocation.watchPosition(miPosicion,error);
    } else {
        document.write('El permiso de geolocalización ha sido denegado')
    }
    function miPosicion(posicion) {
        var coords=posicion.coords;
        document.write('POSICION LOCALIZADA'+'<br><br>');
        document.write("La latitud es "+coords.latitude+'<br><br>');
        document.write("La longitud es "+coords.longitude+'<br><br>');
        document.write("La distancia recorrida es de "+coords.accuracy+'<br><br><br><br>');
    }
    function error(error){
        document.write(error.code+ " : "+error.message);
    }
}

function ejer2() {
    if ("geolocation" in navigator) {
        document.write('La geolocalización está disponible en este navegador <br><br>')
        navigator.geolocation.getCurrentPosition(miPosicion,error);
    } else {
        document.write('El permiso de geolocalización ha sido denegado')
    }
    function miPosicion(posicion) {
        var coords= {lat:posicion.coords.latitude,lng:posicion.coords.longitude};
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: coords});
        var marker = new google.maps.Marker({draggable: true,position: coords, map: map});
    }
    function error(error){
        document.write(error.code+ " : "+error.message);
    }
}