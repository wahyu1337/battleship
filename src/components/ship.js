class Ships {
    // constructor
    constructor(name, length = 3) {
        this.name = name;
        this.length = length;
        this.hp = length;
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