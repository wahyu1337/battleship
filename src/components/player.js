export default class CreatePlayer {
    playerBoards = {};
    // constructor
    constructor(name) {
        this.name = name;
    }

    getBoard(gameboard) {
        if (playerBoards[gameboard] === null) {
            this.playerBoards = gameboard;
        }
    }
}