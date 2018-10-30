function añadirSubida() {
    var form = document.getElementById('form');
    var input = document.createElement('input');
    input.type = 'file';
    form.appendChild(input);
    var enviar = document.createElement('button');
    enviar.textContent = "Enviar";
    form.appendChild(enviar);
    var br = document.createElement('br');
    form.appendChild(br);
    var br = document.createElement('br');
    form.appendChild(br);
}
function crearForm() {
    var body = document.body;
    var form = document.createElement('form');
    form.id = "form";
    body.appendChild(form);
    var input = document.createElement('input');
    input.type = 'file';
    form.appendChild(input);
    var enviar = document.createElement('button');
    enviar.textContent = "Enviar";
    form.appendChild(enviar);
    var br = document.createElement('br');
    form.appendChild(br);
    var br = document.createElement('br');
    form.appendChild(br);
}

window.onload = function() {
    crearForm();
};