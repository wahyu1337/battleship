import Ships from "../components/ship";


describe("Ships factory function", () => {
    test("Membuat kapal", () => {
        const marine = new Ships("Marine");
        
        // testing unit
        expect(3).toBe(marine.size);        
        expect(3).toBe(marine.size);        
        expect(marine.isSunk()).toBe(false);
    })

    test("Tenggelamkan kapal", () => {
        const marine = new Ships("Marine", 2);

        // testing unit
        expect(2).toBe(marine.size);    
        marine.hit();
        marine.hit();
        expect(marine.hp).toBe(0);    
        expect(marine.isSunk()).toBe(true);    
    })
});