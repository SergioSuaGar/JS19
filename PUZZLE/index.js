import {Puzzle} from "./funcionesPuzzle.js";

class View {
    constructor() {
        this.drawTable();
    }

    drawTable() {
        var textTable = '<table id="t" border = "0" cellspacing ="5"> ';
        for (let i = 0; i < 3; i++) {
            textTable += '<tr bgcolor = "" height="100px">';
            for (let j = 0; j < 3; j++) {
                textTable += '<td id="' + i + j + '"width="100"></td>';
            }
        }
        textTable += '</tr></table>';
        //return textTable
        document.getElementById("table").innerHTML = textTable;
    }

    placeNumber(row, column, number) {
        document.getElementById(row.toString() + column.toString()).innerHTML = number;
    }

    createAlert(message) {
        alert(message);
    }

} //view

class Controller {
    constructor() {
        this.puzzle = new Puzzle();
        this.view = new View();
        this.start();
    }

    start() {
        this.puzzle.generarTablero();
        this.placeBoard();
        this.puzzle.numMovimientos = 0;
        document.onkeydown = (e) => this.pressedKey(e, this);
        document.getElementById("notifications").innerHTML = "Movimientos: " + this.puzzle.numMovimientos;
    }

    placeBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.view.placeNumber(i, j, this.puzzle.tablero[i][j]);
            }
        }

    }

    pressedKey(e, that) { //that means the controller's this

        e = e || window.event;
        if (e.keyCode == '38') { // up arrow
            if (that.puzzle.vacio()[0] + 1 < 3) {
                that.puzzle.numMovimientos(that.puzzle.vacio()[0] + 1, that.puzzle.vacio()[1]);
            }
        }
        else if (e.keyCode == '40') { // down arrow
            if (that.puzzle.vacio()[0] - 1 > -1) {
                that.puzzle.numMovimientos(that.puzzle.vacio()[0] - 1, that.puzzle.vacio()[1]);
            }
        }
        else if (e.keyCode == '37') { // left arrow
            if (that.puzzle.vacio()[1] + 1 < 3) {
                that.puzzle.numMovimientos(that.puzzle.vacio()[0], that.puzzle.vacio()[1] + 1);
            }
        }
        else if (e.keyCode == '39') { // right arrow
            if (that.puzzle.vacio()[1] - 1 > -1) {
                that.puzzle.numMovimientos(that.puzzle.vacio()[0], that.puzzle.vacio()[1] - 1);

            }
        }
        that.placeBoard();
        that.puzzle.numMovimientos += 1;
        document.getElementById("notifications").innerHTML = "Movimientos: " + that.puzzle.numMovimientos;

        if (that.Puzzle.fin() == true) {
            that.view.createAlert("Has ganado en " + that.puzzle.numMovimientos + " movimientos");
            that.view.createAlert("Un nuevo juego va a comenzar");
            that.start();
        }
    }

}

window.onload = function () {
    var controller = new Controller();
}

