import Ships from "../components/ship";


describe("Ships factory function", () => {
    test("Membuat kapal", () => {
        const marine = new Ships("Marine");
        
        // testing unit
        expect(marine.length).toBe(3);        
        expect(marine.hp).toBe(3);        
        expect(marine.isSunk()).toBe(false);
    })

    test("Tenggelamkan kapal", () => {
        const marine = new Ships("Marine", 2);

        // testing unit
        expect(marine.length).toBe(2);    
        marine.hit();
        marine.hit();
        expect(marine.hp).toBe(0);    
        expect(marine.isSunk()).toBe(true);    
    })
});