// ADVANCED ARRAY METHODS >>> A Higher Order Function passes a function as an argument

/* 
- map
-filler
-reduce
this 3 above are somewhat related
__________

-sort
-array.isArray

this methods are only used for arrays
*/

// MAP

let arr = [1,2,3,4];

let squareArr = arr.map(num => num ** 2);
console.log(squareArr); // [ 1, 4, 9, 16 ]

let numbers = [4,9,16,25];

function mapMethod() {
    return numbers.map(Math.sqrt)
}
console.log(mapMethod()); // [ 2, 3, 4, 5 ]
console.log(numbers); // [ 4, 9, 16, 25 ]

/* map does what the function indicates on every item of the array, then automatically
returns the array modified. It doesn't affect the original array, it creates a new array
with updated values */

//___________________________________

let numArr = [1,4,9];
let doubles = numArr.map(function(num) {
    return num * 2;
})
console.log("doubles", doubles); // doubles [ 2, 8, 18 ]
console.log("numArr", numArr); // numArr [ 1, 4, 9 ]

//_________________________________

let lengths = ["John", "Tom", "Harry"].map(item => item.length);
console.log(lengths); // [ 4, 3, 5 ]
/* the length of john is 4, 3 is the length of tom and 5 is the length of harry */

//_____________________________________

let newArr = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];

let modifArr = newArr.map(objParam => {
    let newObj = {};
    newObj[objParam.key] = objParam.value;
    return newObj;
})
console.log(modifArr); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ] >> modified array
console.log(newArr);
/* 
original array
[ { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 } ]
*/

// FILTER

let arr2 = [1,2,3,4,5];
const evenArr = arr2.filter(num => num % 2 === 0);

console.log(evenArr); // [ 2, 4 ]

// __________________________________

let age = [32, 44, 53, 12, 34];

function checkAdults(age) {
    return age >= 18;
}
console.log(age.filter(checkAdults)); // [ 32, 44, 53, 34 ]

//____________________________________

let words = ["spray", "limit", "elite", "destruction", "present"];
const result = words.filter(word => word.length > 6);

console.log(result); // [ 'destruction', 'present' ]

// REDUCE

/* it takes an array and returns 1 value not another array */

let arr3 = [1,2,3,4];

const sumReduceFunc = (accumulator, currentValue) => accumulator + currentValue;
const sum = arr3.reduce(sumReduceFunc);

console.log(sum); // 10

//________________________________________

const sum2 = arr3.reduce(sumReduceFunc, 5);

console.log(sum2); // 15 >>> sumReduceFunc and arr3 from the example above

//___________________________________

let arr5 = [1,2,3,4];
let result2 = arr5.reduce((sum, current) => sum + current, 10);

console.log(result2); // 20

//________________________________________

const reducer = function(accumulator, currentValue, currentIndex, array) {
    console.log("acc:", accumulator, "currVal:", currentValue, "currentIndex:", currentIndex, "array:", array);
    return accumulator + currentValue;    
}

arr5.reduce(reducer); // arr5 from the example above
/* 
this is an explanation of what is happening in the background when using reduce

acc: 1 currVal: 2 currentIndex: 1 array: [ 1, 2, 3, 4 ]
acc: 3 currVal: 3 currentIndex: 2 array: [ 1, 2, 3, 4 ]
acc: 6 currVal: 4 currentIndex: 3 array: [ 1, 2, 3, 4 ]
*/

// SORT

let months = ["March", "Jan", "Dec", "April"];

months.sort();
console.log(months); // [ 'April', 'Dec', 'Jan', 'March' ] >>> sorted in alphabetic order


let arr6 = [1, 10000000, 30, 21, 4];

arr6.sort();
console.log(arr6); // [ 1, 10000000, 21, 30, 4 ] >>> modifies the original array

//_____________________________________________

let numbers2 = [4,2,-5,3.5,1];

numbers2.sort((a, b) => a - b);
console.log(numbers2); // [ -5, 1, 2, 3.5, 4 ]

numbers2.sort((a, b) => b - a);
console.log(numbers2); // [ 4, 3.5, 2, 1, -5 ]

//_______________________________________________

let items = [
    {name: "Edward", value: 21},
    {name: "Sharpe", value: 37},
    {name: "And", value: 45},
    {name: "The", value: -12},
    {name: "Magnetic", value: 13},
    {name: "Zeros", value: 37}
]

// Sort By Value

items.sort(function(a, b) {
    return a.value - b.value;
})
console.log(items);
/* 
[ { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'Zeros', value: 37 },
  { name: 'And', value: 45 } ]
*/

// Sort By Name

items.sort(function(a, b) {
    let nameA = a.name.toLocaleUpperCase(); // ignore upper and lower case
    let nameB = b.name.toLocaleUpperCase();

    if(nameA < nameB) {
        return -1;
    }
    if(nameA > nameB) {
        return 1;
    }
    return 0;
})
console.log(items);
/* 
[ { name: 'And', value: 45 },
  { name: 'Edward', value: 21 },
  { name: 'Magnetic', value: 13 },
  { name: 'Sharpe', value: 37 },
  { name: 'The', value: -12 },
  { name: 'Zeros', value: 37 } ]
*/

// ARRAY.ISARRAY

let arr7 = [1,2,3,4];

console.log(typeof arr7); // object
console.log(Array.isArray([])); // true