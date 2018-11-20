

export class Puzzle {
    constructor() {
        this.tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.numMovimientos = 0;
        this.generarTablero();
    }

    generarTablero() {
        var contenido = [1, 2, 3, 4, 5, 6, 7, 8, " "];
        var order = [];
        while (order.length < contenido.length) {
            var newNumber = contenido[Math.floor((Math.random() * contenido.length))];
            if (order.indexOf(newNumber) == -1) {
                order.push(newNumber);
            }
        }

        var n = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.tablero[i][j] = order[n];
                n += 1;
            }
        }

        console.log(order);
        console.log(this.tablero);
    }

    vacio() {
        var list = []
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.tablero[i][j] == " ") {
                    list.push(i);
                    list.push(j);
                }
            }
        }
        return list;
    }

    numMovimientos(row1, column1) {
        var number = this.tablero[row1][column1];
        this.tablero[this.vacio()[0]][this.vacio()[1]] = number;
        this.tablero[row1][column1] = " ";

    }

    fin() {
        if (this.tablero[0][0] == 1 && this.tablero[0][1] == 2 && this.tablero[0][2] == 3 && this.tablero[1][0] == 4 &&
            this.tablero[1][1] == 5 && this.tablero[1][2] == 6 && this.tablero[2][0] == 7 && this.tablero[2][1] == 8 &&
            this.tablero[2][2] == " ") {
            return true;
        }
        else {
            return false;
        }
    }
}