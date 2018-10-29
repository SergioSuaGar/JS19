function crearUl() {
    var body = document.body;
    var ul = document.createElement('ul');
    ul.id = "lista";
    body.appendChild(ul);
}
function crearLi() {
    var ul = document.getElementById('lista');
    var li = document.createElement('li');
    li.innerHTML = "Lista";
    ul.appendChild(li);
}

window.onload = function() {
    crearUl();
};