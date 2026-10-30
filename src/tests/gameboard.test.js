import GameBoard from "../components/gameboard";
import Ships from "../components/ship";

describe("Gameboard", () => {
    const gameBoard = new GameBoard(8);
    const marine = new Ships("Marine", 3);
    
    // get boards
    test("GameBoards", () => {
        expect(gameBoard.boards).toBe(gameBoard.boards);
    })

    // placeShips
    test("Place a ships", ()  => {
        gameBoard.placeShips(marine.name, 1, 'horizontal')
        expect(gameBoard.boards[0]).toBe('Marine');
        expect(gameBoard.boards[1]).toBe('Marine');
        expect(gameBoard.boards[2]).toBe('Marine');
        console.log(gameBoard.getBoards());
    })
});