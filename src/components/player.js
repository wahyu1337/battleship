export default class CreatePlayer {
  playerBoards = {};
  // constructor
  constructor(name) {
    this.name = name;
  }

  // get player board
  createBoard(gameboard) {
    return (this.getPlayerBoards = gameboard);
  }

  // print players board
  getPlayerBoards() {
    return this.playerBoards;
  }
}
