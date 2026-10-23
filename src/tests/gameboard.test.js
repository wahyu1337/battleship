import GameBoard from "../components/gameboard";

describe("Gameboard", () => {
    const gameBoard = new GameBoard(8);
    // testing place a hit
    gameBoard.placeShip(0);       
    // testing unit
    test("Game board size", () => {
        expect(gameBoard.getBoard().length).toBe(64);
    })

    test("Placing a ship", () => {
        expect(gameBoard.boards[0]).toBe(".");
    })
});