// for loop
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     sum = sum + i;
// }
// console.log("For -> Sum = " + sum);



//while loop
// let sum = 0;
// let number = 1;
// while (number <= 50) {
//     sum += number;
//     number++;
// }
// console.log("While -> Sum = " + sum);




//do while 
// let sum = 0;
// let number = 1;
// do {
//     sum += number;
//     number++;
// } while (number <= 50);
// console.log("do while -> Sum = " + sum);



//for each
let array1 = ['a', 'b', 'c'];
array1.forEach(function (element) {
    console.log(`forEach -> ${element}`);
});
/* 
forEach -> a
forEach -> b
forEach -> c
*/



//for in
let string1 = "";
let object1 = { a: 1, b: 2, c: 3 };
for (let property1 in object1) {
    string1 += object1[property1];
}

console.log(`for in -> ${string1}`); // for in -> 123

//Nested loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        let result = i * j;
        console.log(`${i} X ${j} = ${result}`);
    }
}
/* 
1 X 1 = 1
1 X 2 = 2
1 X 3 = 3
1 X 4 = 4
1 X 5 = 5
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
3 X 1 = 3
3 X 2 = 6
3 X 3 = 9
3 X 4 = 12
3 X 5 = 15
4 X 1 = 4
4 X 2 = 8
4 X 3 = 12
4 X 4 = 16
4 X 5 = 20
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
5 X 4 = 20
5 X 5 = 25
*/

//map
let arr = [1, 2, 3, 4];
const mappedArr = arr.map(x => x ** 2);
console.log(mappedArr);
// output: [ 1, 4, 9, 16 ]


//filter
const arrNumbers = [1, 2, 3, 4, 324, 432, 32, 90, 80];
const result = arrNumbers.filter(number => number > 10);
console.log(result); // [ 324, 432, 32, 90, 80 ]

const ages = [
    { name: "Jess", age: 30 },
    { name: "Tess", age: 22 },
    { name: "Chris", age: 15 },
    { name: "Vick", age: 18 },
    { name: "Mar", age: 32 },
    { name: "Sean", age: 41 },
    { name: "Jean", age: 30 },
    { name: "Jake", age: 12 },
    { name: "Lewis", age: 25 },
    { name: "John", age: 9 },
]
function filterAge(object) {
    if (object.age >= 18) {
        return true;
    } else {
        return false;
    }
}
const id = ages.filter(filterAge);

const identity = ages.filter((a) => (a.age >= 18));
// console.table(id);
console.table(identity);
/* 
┌─────────┬─────────┬─────┐
│ (index) │  name   │ age │
├─────────┼─────────┼─────┤
│    0    │ 'Jess'  │ 30  │
│    1    │ 'Tess'  │ 22  │
│    2    │ 'Vick'  │ 18  │
│    3    │  'Mar'  │ 32  │
│    4    │ 'Sean'  │ 41  │
│    5    │ 'Jean'  │ 30  │
│    6    │ 'Lewis' │ 25  │
└─────────┴─────────┴─────┘
*/

//reduce
const numbers = [1, 2, 3, 4, 324, 432, 32, 90, 80];
const results = numbers.reduce((acc, cur) => acc + cur);
console.log(results); // 968

let cityPopulation = [
    {
        city: "Berlin",
        pop: 3575000
    },
    {
        city: "Hamburg",
        pop: 1810000
    },
    {
        city: "Munich",
        pop: 1450000
    }
];

const totalPopulations = cityPopulation.reduce((acc, cur) => acc + cur.pop, 0);
console.log(`total population: ${totalPopulations}`); // total population: 6835000

//sort 
const characters = [
    { name: 'Tom Sawyer', birthdate: 1876, death: 1945 },
    { name: 'Bart Simpson', birthdate: 1989, death: 2019 },
    { name: 'Holden Caufield', birthdate: 1951, death: 1992 },
    { name: 'Tom Joad', birthdate: 1939, death: 1967 },
    { name: 'Peter Griffin', birthdate: 1999, death: 2019 }
];

const oldestCharacters = characters.sort(function (a, b) {
    const lastPerson = a.death - a.birthdate;
    const nextPerson = b.death - b.birthdate;
    if (lastPerson > nextPerson) {
        return -1;
    } else {
        return 1;
    }
});

console.table(oldestCharacters);
/* 
┌─────────┬───────────────────┬───────────┬───────┐
│ (index) │       name        │ birthdate │ death │
├─────────┼───────────────────┼───────────┼───────┤
│    0    │   'Tom Sawyer'    │   1876    │ 1945  │
│    1    │ 'Holden Caufield' │   1951    │ 1992  │
│    2    │  'Bart Simpson'   │   1989    │ 2019  │
│    3    │    'Tom Joad'     │   1939    │ 1967  │
│    4    │  'Peter Griffin'  │   1999    │ 2019  │
└─────────┴───────────────────┴───────────┴───────┘
*/

let shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"],
    [6, "Hexagon"],
    [10, "Decagon"]
];

const sortedShapes = shapes.sort(function (a, b) {
    const lastShape = a[0];
    const nextShape = b[0];
    if (lastShape > nextShape) {
        return 1;
    } else {
        return -1
    }
})
console.table(sortedShapes);
/* 
┌─────────┬────┬─────────────┐
│ (index) │ 0  │      1      │
├─────────┼────┼─────────────┤
│    0    │ 3  │ 'Triangle'  │
│    1    │ 4  │ 'Rectangle' │
│    2    │ 5  │ 'Pentagon'  │
│    3    │ 6  │  'Hexagon'  │
│    4    │ 8  │  'Octagon'  │
│    5    │ 10 │  'Decagon'  │
└─────────┴────┴─────────────┘
*/


//callback function
function add(a, b, fn) {
    return `The sum of ${a} and ${b} is ${a + b}. ${fn()}`;
}
// callFn function is called just
function callFn() {
    return 'This is the callback function working.';
}
// calling add() function
console.log(add(5, 6, callFn)); // The sum of 5 and 6 is 11. This is the callback function working.


//switch
// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}

function packMyThings(num) {
    let output = `I'm going on a trip and taking: `
    switch (num) {
        case 6:
            output += `my red tshirt, `;
        case 5:
            output += `my laptop, `;
        case 4:
            output += `my sunglasses, `;
        case 3:
            output += `my passport, `;
        case 2:
            output += `my boarding pass, `;
        case 1:
            output += `and my headphones`;
            break;
        case 7:
            output += `a full suitcase! There's no more space!`
            break;
        default:
            output += `oops, no list!`;
    }
    return output;
}


console.log(packMyThings(0)); // I'm going on a trip and taking: oops, no list!

// classes : data
let Human = class {
    constructor(height, gender, name, age) {
        this.height = height;
        this.gender = gender;
        this.name = name;
        this.age = age;
    }
    ageCheck() {
        if (this.age < 18) {
            return `${this.name} is not an adult.`
        } else {
            return `${this.name} is an adult`
        }
    }
}

const john = new Human(170, "male", "John", 15);
console.log(john.ageCheck()); // John is not an adult.


//super + extends
let Animal = class {
    constructor(type, gender, name, age) {
        this.type = type;
        this.gender = gender;
        this.name = name;
        this.age = age;
    }
    ageCheck() {
        if (this.age < 2) {
            return `${this.name} is a baby ${type}.`
        } else {
            return `${this.name} is fully grown ${type}`
        }
    }
}

class Dog extends Animal {
    constructor(gender, name, age, typeDog) {
        super("dog", gender, name, age);
        this.typeDog = typeDog;
    }
    ageCheck() {
        if (this.age < 2) {
            return `${this.name} is a puppy ${this.typeDog}`;
        } else {
            return `${this.name} is a fully grown ${this.typeDog} ${this.type}`;
        }
    }   
}

let toby = new Dog("male", "Toby", 3, "husky");
console.log(toby.ageCheck()); // Toby is a fully grown husky dog

// binding  

let eventTicket = {
    eventType: "Hackathon",
    ticketHolder: "Fran",
    ticketID: "FN106H",
    displayDetails: function () {
        return `${this.ticketID} issued to ${this.ticketHolder} for ${this.eventType} event`;
    },
    displayDate: function(date) {
        return `The ${this.eventType} is being held on ${date}`;
    }
}
//this will work perfectly
console.log(eventTicket.displayDetails()); // FN106H issued to Fran for Hackathon event

//but what if we want to store this in a variable? 
//won't work since `this` keyword is now assigned to the global context
let userTicketDetails = eventTicket.displayDetails;
console.log(userTicketDetails()); // undefined issued to undefined for undefined event

//The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “eventTicket”. This way the bind() method enables calling a function with a specified “this” value.

let userTicket = eventTicket.displayDetails.bind(eventTicket);
console.log(userTicket()); // FN106H issued to Fran for Hackathon event

let eventDate = eventTicket.displayDate.bind(eventTicket, "12th July");
console.log(eventDate()); // The Hackathon is being held on 12th July


//call, apply
//both function and obj are in the global context
let laptop = {
    processor: "CORE i5 8th Gen",
    brand: "ThinkPad, Lenovo"
}

function displayItemDetails(owner){
    return `A ${this.brand} was issued to ${owner}. Processor Details: ${this.processor}`;
}

// call
let callItemDetails = displayItemDetails.call(laptop, "Fran");
console.log(callItemDetails);
/* A ThinkPad, Lenovo was issued to Fran. Processor Details: CORE i5 8th Gen */

//apply
let applyItemDetails = displayItemDetails.apply(laptop, ["Fran"]);
console.log(applyItemDetails);
/* A ThinkPad, Lenovo was issued to Fran. Processor Details: CORE i5 8th Gen */

//Note that when using the apply() function the parameter must be placed in an array. Call() accepts both an array of parameters and a parameter itself.

// naqvi explanations to call back

let CoffeeMachine=(callbackWater,callbackSugar,callbackCoffee)=>{
    callbackWater();
    callbackCoffee();
    callbackSugar();
    
    console.log("Your coffee is ready now");
 }
 
 function water(){
     console.log("water is boiling");
 }
 function sugar(){
     console.log("added sugar in water");
 }
 function coffee(){
     console.log("added coffee");
 }
 
 CoffeeMachine(water,sugar,coffee);
 
 
 let calculator=(num1,num2, operation)=>{
        return operation(num1,num2);
 };
 function Add(number1,number2){
     return (number1+number2);
 }
 function Product(number1,number2){
     return number1*number2;
 }
 function Subtract(number1,number2){
     return number1-number2;
 }
 /* console.log(Add(3,4)); */
 
 let result2=calculator(4,6,Product);
 
 console.log(result2);
 /* 
water is boiling
added coffee
added sugar in water
Your coffee is ready now
 */
 
 
 
 //main function using callback
 let sum=(arr,acc)=>{
 return acc(arr);
 }
 
 function SumAllitems(array){
 let sum=0;
 array.forEach(elem=>{
     sum+=elem;
 })
 return sum;
 };
 console.log(sum([3,5,78,4,3,6555677,8,9],SumAllitems));
 /* 
 24
 6555787
 */