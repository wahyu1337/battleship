import GameBoard from "../components/gameboard";

describe("Gameboard", () => {
    const gameBoard = new GameBoard(8);
    
    // get boards
    test("GameBoards", () => {
        expect(gameBoard.boards).toBe(gameBoard.boards);
    })

    // placeShips
    test("Place a ships", ()  => {
        gameBoard.placeShips(1);
        expect(gameBoard.boards[1]).toBe(1);
        console.log(gameBoard.getBoards());
    })
});