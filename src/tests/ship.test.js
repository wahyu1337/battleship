import Ships from "../components/ship";


describe("Ships factory function", () => {
    test("Membuat kapal", () => {
        const marine = new Ships("Marine");
        
        // testing unit
        expect(3).toBe(marine.length);        
        expect(3).toBe(marine.length);        
        expect(marine.isSunk()).toBe(false);
    })

    test("Tenggelamkan kapal", () => {
        const marine = new Ships("Marine", 2);

        // testing unit
        expect(2).toBe(marine.lengths);    
        marine.hit();
        marine.hit();
        expect(marine.hp).toBe(0);    
        expect(marine.isSunk()).toBe(true);    
    })
});