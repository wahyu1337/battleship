export default class GameBoard {
    // constructor with dyanmic size
    constructor(size = 8) {
        this.boards = Array(size * size).fill(null);
    }

    // print the board
    printBoard(){
        return this.boards;
    }

    // place ships
    placeShip(index, marker = ".") {
        this.boards[index] = marker;
    }
}

const gameboard = new GameBoard();
console.log(gameboard.printBoard());