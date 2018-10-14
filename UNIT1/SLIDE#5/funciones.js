function ejercicio1(...arg) {
    let suma = 0;
    let cantidad = arg.length;
    for (let i = 0; i < cantidad; i++) {
        suma += arg[i];
    }
    document.write(suma);
    return suma;
}

function ejercicio2(...arg) {
    let suma = 0;
    let cantidad = arg.length;
    for (let i = 0; i < cantidad; i++) {
        if (arg[i] > 0 || arg[i] < 0) {
            suma += arg[i]
        }
    }
    document.write(suma);
    return suma;
}

function ejercicio3() {
    let a1 = ['hola', 'adios'];
    let a2 = ['nos vemos'];
    let a3 = [...a1, ...a2];
    document.write(a3);
    return a3;
};

function ejercicio4(...a) {
    let suma = 0;
    let cantidad = a.length;
    for (let i = 0; i < cantidad; i++) {
        if (a[i] > 0 || a[i] < 0) {
            suma += a[i];
            i++
        }
    }
    document.write(suma);
    return suma;
};

function ejercicio5(...a) {
    let n = [];
    for (let i = 0; i < a.length; i++) {
        if (!n.includes(a[i])) {
            n.push(a[i])
        }
    }
    return n;
}

function ejercicio6(a, ...b) {
    return a.concat(...b);
}

function ejercicio7(...a) {
    let suma = 0;
    var c = [...a];
    for (var i = 0; i < c.length; i++) {
        suma += (c[i] * c[i])
    }
    document.write(suma);
    return suma;
}
