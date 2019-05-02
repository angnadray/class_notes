//////////////// forLoop Strings

let myString = "Digital Career Institute";

for (let i = 0; i < myString.length; i++) {
    console.log(`The index of ${myString[i]} is ${i}`);
}
/* 
The index of D is 0
The index of i is 1
The index of g is 2
The index of i is 3
The index of t is 4
The index of a is 5
The index of l is 6
The index of   is 7
The index of C is 8
The index of a is 9
The index of r is 10
The index of e is 11
The index of e is 12
The index of r is 13
The index of   is 14
The index of I is 15
The index of n is 16
The index of s is 17
The index of t is 18
The index of i is 19
The index of t is 20
The index of u is 21
The index of t is 22
The index of e is 23 */
console.log(`${myString[8]}`);
// C

///////////// forLoop arrays

/* let fruits = ["apple", "orange", "cherry"];
let newArr = [];

for (let i = fruits.length -1; i >= 0; i--) {
    newArr.push(fruits[i]);
    console.log(newArr);
    console.log(typeof newArr); // string
}
console.log(newArr) // */

let fruits = ["apple", "orange", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    const newArr = fruits[i];
    console.log(newArr);
}
/* 
apple
orange
cherry */