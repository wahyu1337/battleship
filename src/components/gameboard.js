export default class GameBoard {
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
        this.boards[rows][cols] = ships.name;

        // horizontal
       if (direction === 'horizontal' && ships.size === 3) {
            this.boards[rows][cols] = ships.name;
            this.boards[rows][cols + 1] = ships.name;
            this.boards[rows][cols - 1] = ships.name;
       } else if (direction === 'horizontal' && ships.size === 2) {
            this.boards[rows][cols] = ships.name;
            this.boards[rows][cols + 1] = ships.name;
       }

        // vertical
        if (direction === 'vertical' && ships.size === 3) {
            this.boards[rows][cols] = ships.name;
            this.boards[rows + 1][cols] = ships.name;
            this.boards[rows - 1][cols] = ships.name;
        } else if (direction === 'vertical'  && ships.size === 2) {
            this.boards[rows][cols] = ships.name;
            this.boards[rows + 1][cols] = ships.name;
        }
    }

    // receiveAttack
    receiveAttack(x, y, ships = '') {
        let tracks = [];

        // check if there's ship and subtract 1 hp
        if (this.boards[x][y] !== null) {
            // hit function
            this.boards[x][y] = `${ships.name}'s hit!`                                        
        } else {
            tracks.push(this.boards[x][y]);
        }
    }
}