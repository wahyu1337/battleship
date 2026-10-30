export default class GameBoard {
    // constructor with dyanmic size
    constructor(size = 8) {
        this.boards = Array(size * size).fill(null);        
    }

    // print the board
    getBoards(){
        return this.boards;
    }

    // place ships
    placeShips(position, direction = 'horizontal') {
        this.boards[position] = position;
        
        return this.boards;
    }
}