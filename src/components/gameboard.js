export default class GameBoard {
    // constructor with dyanmic size
    constructor(size = 8) {
        this.board = Array(size * size).fill(null);
    }

    // prin the board
    getBoard(){
        return this.board;
    }
}