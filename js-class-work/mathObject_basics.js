// MATH OBJECT

/* functions that change the nature of parameters are called methods */

// round 
function mathRound(number) {
    return Math.round(number);
}
console.log(mathRound(2.5)); // 3

// ceil > highest number 
function mathCeil(number) {
    return Math.ceil(number);
}
console.log(mathCeil(2.1)); // 3

// floor > lowest number
function mathFloor(number) {
    return Math.floor(number);
}
console.log(mathFloor(2.1)); // 2

// random > there is no need to give parameter with random
function mathRandom() {
    return Math.random();
}
console.log(mathRandom()); // 0.2512419121318208

// min
function mathMin(arg1, arg2, arg3) {
    let minValue = Math.min(arg1, arg2, arg3);
    return minValue;
}
console.log(mathMin(456, -678, 0.56)); // -678

// max

function mathMax() {
    let maxValue = Math.max(arg1, arg2, arg3);
    return maxValue;
}
console.log(mathMin(456, -678, 0.56)); // 456