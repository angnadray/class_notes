// VALUE vs REFERENCE

// VALUE

/* In values both variables change and behave differently */

/* In javaScript all the primitive objects are values and objects are references */

let myVal = 10;

function addTen(val) {
    return val + 10;
}
console.log(addTen(myVal)); // 20

// Numbers > numbers are always clones or passed by values 

let germany = 0;
let skorea = germany;

germany += 1;
skorea += 2;

console.log(germany, skorea); // 1 2

// ________________

let cheer = "Ole";
let boo = cheer;

cheer = "Gol!!!!!"

console.log(cheer, boo); // Gol!!!!!

// Booleans are always clones or passed by values

let win = true;
let loose = win;

win = !win;

console.log(win); // false
console.log(loose); // true

// REFERENCE

/* In reference both variables change in the same way */

// Objects (arrays are also objects) are always references

let score18 = [[0, 1], [2, 1]];
let score22 = score18;

score18.push([3, 1]);

console.log(score18); // [ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ] ]
console.log(score22); // [ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ] ]

/* both arrays will be affected when thy are references of each other */

let player = {
    name: "Ronaldo",
    Goals: 650,
}

let playerClone = player;

playerClone.Goals = 6;

console.log(player); // { name: 'Ronaldo', Goals: 6 }
console.log(playerClone); // { name: 'Ronaldo', Goals: 6 }

// Objects have identity

let num = [1, 2, 3];
let num2 = [1, 2, 3];

console.log(num === num2); // false
/* it is false because even though they are the same type and have the same value, they have
different identity */

// Primitives do not have and identity

let primOne = true;
let primTwo = true;

console.log(primOne === primTwo); // true
/* it is true because they are the same type and have the same value, as primitives don't 
have an identity in this case they are the same in every way */

//_________________

// SHALLOW CLONE

/* to overcome the changing of both referenced objects as default property we use shallow clone. 
Where only the original gets affected but not the clone? */

const players = ["Ronaldo", "Messi", "Silva"];

function cloneArrFor(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// 2. Clone and array with each other

function cloneArrForEach(arr) {
    let newArr = [];
    arr.forEach(item => newArr.push(item));
    return newArr;
}

// 3. Clone an array with an array.slice

function cloneArrSlice(arr) {
    let newArr = arr.slice(0);
    return newArr;
}

// 4. Clone an array with an array.from

function cloneArrFrom(arr) {
    let newArr = Array.from(arr);
    return newArr;
}

// Clone an array with the ...spread operator

function cloneArrSpread(arr){
    let newArr = [... arr];
    return newArr
}

const players2 = cloneArrSpread(players)

players [0] = 'Hazzard';
console.log(cloneArrFor(players)); // [ 'Hazzard', 'Messi', 'Silva' ]
console.log(cloneArrFor(players2)); // [ 'Ronaldo', 'Messi', 'Silva' ]

// _________________

const ball = {
    weight: "400gm",
    diameter: "15cm",
}

const ball2 = {
    ...ball
}

ball2.weight = "500gm";

console.log(ball); // { weight: '400gm', diameter: '15cm' }
console.log(ball2); // { weight: '500gm', diameter: '15cm' }

// ____________________________

// How ++ and -- works

let x = 10;
// ++x
console.log(x); // 10 > prints the value of x
console.log(++x); // 11 > the ++ before the x adds 1 to the value and prints the sum directly
console.log(x++); // 11 > the ++ after the x adds 1 in the background but not prints the value yet
console.log(x); // 12 > x gets the plus 1 from the background operation in the step before

// --x

console.log(x); // 12 > prints the new value of x from the previous log and it continues
console.log(--x); // 11 > the -- before the x reduces 1 from the new value and prints it directly
console.log(x--); // 11 > the -- after the x reduces 1 in the background but not printed yet
console.log(x); // 10 > x gets the reduced 1 from the background operation in the step before

let y = 1;

while(y < 5) {
    console.log(++y);
}

/*
2
3
4
5
 */

// objects and const

let x2 = 1;
x2 = "45";

const y2 = 22;

let greet = {
    greeting: "Hello"
}
console.log(greet); // { greeting: 'Hello' }

greet = "Hello"; /* by reassigning a different value with a different type of, the object gets
changed into a string. It is a common mistake while using let because let allows it, we normally 
don't want this to happen, to avoid it is better to use const */

console.log(greet); // Hello
console.log(typeof greet); // string