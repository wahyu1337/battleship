export default class GameBoard {
    // constructor with dyanmic size
    constructor(rows = 7, columns = 7) {
        // 7x7 board (default)
        this.boards = [];

        // set board depends on input
        for (let i = 0; i < rows; i++) {
            this.boards[i] = [];
            for (let j = 0; j < columns; j++) {
                this.boards[i][j] = null;               
            }
        }        
    };

    // print the board
    getBoards(){
        return this.boards;
    }

    // place ships
    placeShips(ships, position, direction = 'horizontal') {
        this.boards[position] = ships.name;
        
        // set if horizontal adding it's right and left depend on length
        // length = 3
        if(direction === 'horizontal') {
            if (ships.size === 3) {
                this.boards[position + 1] = ships.name;
                this.boards[position - 1] = ships.name;            
            }
        }
        
        return this.boards;
    }
}