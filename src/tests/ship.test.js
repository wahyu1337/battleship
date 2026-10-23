import Ship from "../components/ship";

test("Adding a new ship and console the info", () => {
    const ship1 = new Ship(3);

    // testing unit
    expect(ship1.length).toBe(3);
    expect(ship1.hp).toBe(3);
    expect(ship1.sunk).toBe(false);

    // testing hit logic
    ship1.hit();
    ship1.isSunk();
    expect(ship1.hp).toBe(2);
    expect(ship1.sunk).toBe(false);
    ship1.hit();
    ship1.isSunk();
    expect(ship1.hp).toBe(1);
    expect(ship1.sunk).toBe(false);
    ship1.hit();
    ship1.isSunk();
    expect(ship1.hp).toBe(0);
    expect(ship1.sunk).toBe(true);
})