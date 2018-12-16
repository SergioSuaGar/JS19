function ejercicio1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            maquetaRestaurantes(JSON.parse(this.response));
        }
    };

    xhttp.open("GET", "restaurantes.json", true);
    xhttp.send();
    function maquetaRestaurantes(ficheroRestaurantes) {
        var restaurantes = ficheroRestaurantes.restaurantes;
        var tabla = document.createElement("table");
        tabla.setAttribute("border","1");
        document.body.appendChild(tabla);
        for (let i=0;i<restaurantes.length;i++){
            var trElement = document.createElement("tr");
            var nombreElement = document.createElement("td");
            nombreElement.innerHTML = restaurantes[i].nombre;
            trElement.appendChild(nombreElement);
            var direccionElement = document.createElement("td");
            direccionElement.innerHTML = restaurantes[i].direccion;
            trElement.appendChild(direccionElement);
            var webElement = document.createElement("td");
            var webEnlace = document.createElement("a");
            webEnlace.setAttribute("href",restaurantes[i].web);
            webEnlace.setAttribute("target", "_blank");
            webEnlace.innerHTML = "Web";
            webElement.appendChild(webEnlace);
            trElement.appendChild(webElement);
            var imagenesElement = document.createElement("td");
            imagenesElement.innerHTML = "Imagenes";
            trElement.appendChild(imagenesElement);
            tabla.appendChild(trElement);
            tabla.appendChild(nombreElement);
            tabla.appendChild(direccionElement);
            tabla.appendChild(webElement);
            tabla.appendChild(imagenesElement);
        }
    }
}
var arrayRestaurantes=[];
function ejercicio2(nombre,direccion,web,id) {
   var nombre = nombre;
   var direccion = direccion;
   var web = web;
   var id = id;


   arrayRestaurantes.push([nombre,direccion,web,id]);

   var tabla = document.getElementById(id);
   tabla.setAttribute("border","1");

   var trElement = document.createElement("tr");
   var nombreElement = document.createElement("td");
   nombreElement.innerHTML = nombre;
   var direccionElement = document.createElement("td");
   direccionElement.innerHTML = direccion;
   var webElement = document.createElement("td");
   webElement.innerHTML = web;
   trElement.appendChild(nombreElement);
   trElement.appendChild(direccionElement);
   trElement.appendChild(webElement);
   tabla.appendChild(trElement);
   guardarStorage();
}
function guardarStorage() {
    localStorage.setItem("Restaurantes", JSON.stringify(arrayRestaurantes));
}
function obtenerLocalStorage(){
    if(localStorage.getItem("Restaurantes")){
        let arrayAux = JSON.parse(localStorage.getItem("Restaurantes"));
        for (let i=0;i<arrayAux.length;i++){
            let nuevoArray = [];
            nuevoArray.push(arrayAux[i]);
            ejercicio2(arrayAux[i][0],arrayAux[i][1],arrayAux[i][2],arrayAux[i][3]);
        }
    }else{
        console.log("No hay restaurantes guardados");
    }
}

function ejercicio3(posicion,id){
    var posicion = posicion;
    var id = id;
   // var filaEliminar = document.getElementById(id).getElementsByTagName("tr")[posicion];
    document.getElementById(id).deleteRow(posicion);
    if(localStorage.getItem("Restaurantes")) {
        let arrayAux = JSON.parse(localStorage.getItem("Restaurantes"));
        arrayAux.splice(posicion, 1);
        arrayRestaurantes = arrayAux;
        guardarStorage();
    }
}




    class Book {
        constructor(Author, Title, Genre, Price, PublishDate, Description) {
            this.Author = Author;
            this.Title = Title;
            this.Genre = Genre;
            this.Price = Price;
            this.PublishDate = PublishDate;
            this.Description = Description;
        }
    }

    class Controlador {
        constructor() {
            this.collection = [];

        }

        ajax() {
            self = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    self.crearLibros(this);
                }
            };
            xhttp.open("GET", "examenDiciembre.xml", true);
            xhttp.send();
        }

        crearLibros(xml) {
            this.view = new Vista();
            var xmlDoc = xml.responseXML;
            var x = xmlDoc.getElementsByTagName("Book");
            for (var i = 0; i < x.length; i++) {
                var n = new Book(
                    x[i].getElementsByTagName("Author")[0].childNodes[0].nodeValue,
                    x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue,
                    x[i].getElementsByTagName("Genre")[0].childNodes[0].nodeValue,
                    x[i].getElementsByTagName("Price")[0].childNodes[0].nodeValue,
                    x[i].getElementsByTagName("PublishDate")[0].childNodes[0].nodeValue,
                    x[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue);
                this.collection.push(n);
                this.view.maquetaLibro(n);
            }
        }
    }

    class Vista {
        maquetaLibro(Book) {
            //Crea campos
            var div = document.createElement('div');
            div.setAttribute("style", "background-color:#FF0000");
            document.body.appendChild(div);

            var p = document.createElement('p');
            p.textContent = Book.Author;
            div.appendChild(p);

            var p2 = document.createElement('p');
            p2.textContent = Book.Title;
            div.appendChild(p2);

            var p3 = document.createElement('p');
            p3.textContent = Book.Genre;
            div.appendChild(p3);

            var p4 = document.createElement('p');
            p4.textContent = Book.Price;
            div.appendChild(p4);

            var p5 = document.createElement('p');
            p5.textContent = Book.PublishDate;
            div.appendChild(p5);

            var p6 = document.createElement('p');
            p6.textContent = Book.Description;
            div.appendChild(p6);

        }

    }


window.onload = function() {
    obtenerLocalStorage();
    var c = new Controlador();
    c.ajax();
}