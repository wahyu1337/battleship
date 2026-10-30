// // factory function Ships
// function Ships (name, length = 3, sunk = false) {
//     let hp = length;
//     return {
//         name,
//         length,            
//         sunk,

//         // hit function ()
//         hit() {
//             if (hp > 0) hp--;
//             return hp;
//         },

//         // get hp information
//         get hp(){
//             return hp;
//         },

//         // check if ship's sank
//         isSunk() {
//             if (hp <= 0) {
//                 return sunk = true;
//             } else {
//                 return false;
//             }
//         },
//     };
// };

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