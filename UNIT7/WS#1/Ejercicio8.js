$(document).ready(function(){

    /// Cambia el tamaño de fuente de las noticias (3 tamaños).
    var texto = $('body');
    $("#pequeña").click(function(){
        texto.css('font-size',10);
    });
    $("#mediana").click(function(){
        texto.css('font-size',16);
    });
    $("#grande").click(function(){
        texto.css('font-size',22);
    });

    /// Al pulsar sobre cada título se debe mostrar u ocultar ésta.
    $("h1").click(function(){
        $(this).siblings("p").hide();
    });

    /// Al colocar el ratón sobre el texto de la noticia debe cambiar el color de fondo de ésta.
    /// haciendo que al salir el ratón se vuelva a su color original el fondo.

    $("p").mouseover(function(){
        $(this).css('background-color','blue');
    });
    $("p").mouseout(function(){
        $(this).css('background-color','white');
    });
});
