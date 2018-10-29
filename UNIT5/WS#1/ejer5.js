function añadirSubida() {
    var form = document.getElementById('form');
    let br = document.createElement('br');
    form.appendChild(br);

    var input = document.createElement('input');
    input.type = 'file';
    form.appendChild(input);

    var enviar = document.createElement('button');
    enviar.textContent = "Enviar";
    form.appendChild(enviar);
}