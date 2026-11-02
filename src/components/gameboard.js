export default class GameBoard {    
    tracks = {};
    // constructor with dyanmic size
    constructor(rows = 7, columns = 7) {
        this.rows = rows;
        this.columns = columns;
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
    placeShips(ships, rows,  cols, direction = 'horizontal') {
        // check the size first and direction
        this.boards[rows][cols] = ships;
        this.tracks = ships;        

        // horizontal
       if (direction === 'horizontal' && ships.size === 3) {
            this.boards[rows][cols] = ships;
            this.boards[rows][cols + 1] = ships;
            this.boards[rows][cols - 1] = ships;
       } else if (direction === 'horizontal' && ships.size === 2) {
            this.boards[rows][cols] = ships;
            this.boards[rows][cols + 1] = ships;
       }

        // vertical
        if (direction === 'vertical' && ships.size === 3) {
            this.boards[rows][cols] = ships;
            this.boards[rows + 1][cols] = ships;
            this.boards[rows - 1][cols] = ships;
        } else if (direction === 'vertical'  && ships.size === 2) {
            this.boards[rows][cols] = ships;
            this.boards[rows + 1][cols] = ships;
        }
    }

    // receiveAttack
    receiveAttack(x, y) {        
        if(this.boards[x][y] !== null) {
            const shipName = this.boards[x][y].name;
            
            // hit the ship
            this.tracks[shipName].hit();            
            this.boards[x][y] = `${this.tracks[shipName].name}'s hit!`;
        } else {
            this.boards[x][y] = ".";
        }
    }
}