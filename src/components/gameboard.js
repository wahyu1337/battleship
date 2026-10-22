export default class GameBoard {
    constructor(size = 8) {
        this.board = Array(size * size).fill(null);
    }

    getBoard(){
        return this.board;
    }
}