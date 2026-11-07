class Ships {
  // constructor
  constructor(name) {
    this.name = name;
    // ships
    if (this.name === "Submarine") {
      this.size = 2;
      this.hp = 2;
      this.sunk = false;
    } else if (this.name === "Destroyer") {
      this.size = 3;
      this.hp = 3;
      this.sunk = false;
    } else if (this.name === "Battleship") {
      this.size = 3;
      this.hp = 3;
      this.sunk = false;
    } else if (this.name === "PetrolBoat") {
      this.size = 1;
      this.hp = 1;
      this.sunk = false;
    }
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
  isSunk() {
    if (this.hp <= 0) {
      this.sunk = true;
      return this.sunk;
    } else {
      return this.sunk;
    }
  }
}

export default Ships;
