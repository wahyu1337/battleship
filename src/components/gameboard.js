export default class GameBoard {
    // constructor with dyanmic size
    constructor(size = 8) {
        this.boards = Array(size * size).fill(null);
        this.coords = [];
    }

    // print the board
    getBoards(){
        return this.boards;
    }

    // place ships
    placeShips() {
        const rows = this.size;
        const col = this.size;

        for (let i = 0; i < rows; i++){
            this.coords[i] = [];
        }
    }
}

const gameboard = new GameBoard();
console.log(gameboard.getBoards());