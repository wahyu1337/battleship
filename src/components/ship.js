class Ships {
    // constructor
    constructor(name, lengths = 3) {
        this.name = name;
        this.lengths = lengths;
        this.hp = lengths;
        this.sunk = false;
    }

    // hit function()
    hit() {
        if (this.hp > 0) this.hp--;
        return this.hp;
    }

    // check current hp
    getHp() {
        return this.hp;
    }

    // isSunk to check ship is sunk
    isSunk(){
        if(this.hp <= 0) {
            this.sunk = true;
            return this.sunk;
        } else {
            return this.sunk;
        }
    }

}

export default Ships