// Ship class
export default class Ship {
    // constructor
    constructor(length) {
        this.length = length;
        this.hp = length;
        this.sunk = false;
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