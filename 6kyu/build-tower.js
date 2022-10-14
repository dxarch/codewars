// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(n){
    let tower = [];
    tower.unshift("*".repeat(1 + 2 * (nFloors - 1)));

    for (let i = 1; i < nFloors; i++) {
        let newLayer = " ".repeat(i) + tower[nFloors - i - 1].slice(1, -1) + " ".repeat(i);
        tower.unshift(newLayer);
    }
    return tower;
}