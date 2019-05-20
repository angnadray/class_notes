// While LOOP

let text = "";
let i = 0;

while (i < 10) {
    text = `${text} the number is ${i} \n`;
    i++;
}
console.log(text);

    /*  the number is 0 
        the number is 1 
        the number is 2 
        the number is 3 
        the number is 4 
        the number is 5 
        the number is 6 
        the number is 7 
        the number is 8 
        the number is 9
    */

/* while loop is used when we don't know the number of iterations, do something while something 
else is happening but is is not clear when it will end. Is a pre-test, meaning it tests the
condition before running the block of code */


// doWhile LOOP

let text2 = "";
let j = 0;

do {
    text2 += `The number is ${j} \n`;
    j++;
}

while(j < 10);
console.log(text2);

    /*  the number is 0 
        the number is 1 
        the number is 2 
        the number is 3 
        the number is 4 
        the number is 5 
        the number is 6 
        the number is 7 
        the number is 8 
        the number is 9
    */

/* the block of code gets executed without looking into the condition first, is a post-test
because it test the condition only after */

// forIn LOOP

let oldCar = {
    make: "Toyota",
    model: "Tercel",
    year: "1995",
}
for(const key in oldCar) {
    console.log(`${key} : ${oldCar[key]}`);   
}

    /*  
        make : Toyota
        model : Tercel
        year : 1995 
    */

/* not used for arrays, it looks for keys */

let person = {
    fName: "John",
    lName: "Doe",
    age: 28,
}

let texT = "";
let x; // x is a variable which is looping through the properties of the object

for(x in person) {
    texT += `${person[x]}`;
    console.log(`${person[x]}`);
} 

    /* 
        make : Toyota
        model : Tercel
        year : 1995
        John
        Doe
        28
    */

// forEach LOOP

let aRr = ["apple", "pear", "mango"];

aRr.forEach(function(elem) {
    console.log(elem);
    
});

    /*
        apple
        pear
        mango 
    */

let taSks = [
    ["clean", "floor"],
    ["clean", "windows"],
    ["clean", "table"],
    ["clean", "kitchen"],
    ["cook", "breakfast"],
    ["clean", "dishes"],
    ["clean", "table2"],
]
taSks.forEach(paRam => {
    switch(paRam[0]) {
        case "clean": // looks for the index "clean"
            console.log(`I am cleaning ${paRam[1]}`);
            break;
        case "cook": // looks for the index "cook"
            console.log(`I am cooking ${paRam[1]}`);
            break;
        default:
            break;   
    }
})

    /* 
        I am cleaning floor
        I am cleaning windows
        I am cleaning table
        I am cleaning kitchen
        I am cooking breakfast
        I am cleaning dishes
        I am cleaning table2
    */

/* forEach loop is best for nested arrays, written as arrow function with the loop inside */

// forOf LOOP

const fruitsF = {
    apple: 27,
    mango: 48,
    banana: 30,
}
const entries = Object.entries(fruitsF);
console.log(entries);
// [ [ 'apple', 27 ], [ 'mango', 48 ], [ 'banana', 30 ] ]

const keys = Object.keys(fruitsF);
console.log(keys);
// [ 'apple', 'mango', 'banana' ]

const value = Object.values(fruitsF);
console.log(value);
// [ 27, 48, 30 ]

for(const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}`);
}

    /*
        There are 27 apple
        There are 48 mango
        There are 30 banana 
    */

/* works well with objects */

let simpleArray = ["apple", "pear", "mango"];

for(const i of simpleArray) {
    console.log(`${i}`);
}

    /* 
        apple
        pear
        mango
    */

