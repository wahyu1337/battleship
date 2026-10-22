// Ship class
export default class Ship {
    // constructor
    constructor(length, hp = length, sunk = false) {
        this.length = length;
        this.hp = hp;
        this.sunk = sunk;
    }

    // hit 
    hit() {
        return this.hp--;
    }

    // sunk
    isSunk() {
        // case if none hp left
        if(this.hp === 0) {
            return this.sunk = true;
        }
    }
}