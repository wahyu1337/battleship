// factory function Ships
function Ships (name, length = 3, sunk = false) {
    let hp = length;
    return {
        name,
        length,            
        sunk,

        // hit function ()
        hit() {
            if (hp > 0) hp--;
            return hp;
        },

        // get hp information
        get hp(){
            return hp;
        },

        // check if ship's sank
        isSunk() {
            if (hp <= 0) {
                return sunk = true;
            } else {
                return false;
            }
        },
    };
};

export default Ships