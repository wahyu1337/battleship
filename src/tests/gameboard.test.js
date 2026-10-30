import GameBoard from "../components/gameboard";

describe("Gameboard", () => {
    const gameBoard = new GameBoard(8);
    
    // get boards
    test("GameBoards", () => {
        expect(gameBoard.boards).toBe(gameBoard.boards);
    })
});