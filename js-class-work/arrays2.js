let fruits = [];
console.log(typeof fruits);
// object

fruits = [
    "Apple", 
    "Orange", 
    "Banana", 
    "Melon", 
    "Lemon"
];
console.log(fruits);
console.log(fruits[0]); // Apple
console.log(fruits.length); // 8

let arrayToString = fruits.toString();
console.log(arrayToString);
// Apple,Orange,Banana,Melon,Lemon
console.log(typeof arrayToString);
console.log(arrayToString[3]); //l

let arrNum = [1, 2, 36, 345, true, 6645, false, "wajhdbfj", 8.6, null, "let", 9.0, -4875483];
        // [ -4875483, 1, 2, 345, 6645, 8.6, 9, false, true, 'wajhdbfj' ]
console.log(arrNum.sort());
console.log(arrNum.reverse());

console.log(fruits[fruits.length - 1]); // Lemon

fruits.push("grapes");
console.log(fruits);
// [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon', 'grapes' ]
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// join turns an array into a string
let newArrrr = fruits.join("!");
console.log(typeof newArrrr);

console.log(fruits[0]); // Apple
// changing values
fruits[0] = "Cherry";
console.log(fruits);
// [ 'Cherry', 'Orange', 'Banana', 'Melon' ]

// empty spaces
fruits[6] = "Grapes";
console.log(fruits);

// deleting values
delete fruits[fruits.length -1];
console.log(fruits); // [ 'Cherry', 'Orange', 'Banana', 'Melon', <3 empty items> ]

// shift
// console.log(fruits.shift()); // Cherry
let shiftedItem = fruits.shift();
console.log(shiftedItem); // Cherry
console.log(fruits); // [ 'Orange', 'Banana', 'Melon', <3 empty items> ]

// unshift
let newFruits = fruits.unshift("Lemon", "hsgdsh");
console.log(newFruits); //8

console.log(fruits); // [ 'Lemon', 'hsgdsh', 'Orange', 'Banana', 'Melon', <3 empty items> ]

fruits.splice(2, 1, "Peach", "Guava");
console.log(fruits);
// [ 'Lemon',
//   'hsgdsh',
//   'Peach',
//   'Guava',
//   'Banana',
//   'Melon',
//   <3 empty items> ]

let todaysFruits = fruits.splice(0, 2);
console.log(todaysFruits); //[ 'Lemon', 'hsgdsh' ]
console.log(fruits); //[ 'Peach', 'Guava', 'Banana', 'Melon', <3 empty items> ]

let neewString = "Digital Career Institute";
let neewString2 = neewString.split(" ");
console.log(Array.isArray(neewString2));