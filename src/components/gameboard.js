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
    placeShips(ships, position, direction = 'horizontal') {
        this.boards[position] = ships;
        
        // set if horizontal adding it's right and left depend on length
        // length = 3
        if(direction === 'horizontal') {
            if (ships.lengths === 3) {
                this.boards[position + 1] = ships;
                this.boards[position - 1] = ships;            
            }
        }
        
        return this.boards;
    }
}