// REST PARAMETERS 
/* works only in functions but not in arrow functions, because we are required to write parameters
in functions */

function sum1(a,b) {
    return a+b;
}
console.log(sum1(10,10)); // 

function sum2(...args) {
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

console.log(sum2(1,2)); // 3
console.log(sum2(1,2,3)); // 6
console.log(sum2(1,2,3,4)); // 10
console.log(sum2(1,2,3,4,5)); // 15

/* ... is called rest parameters, it gathers the remaining parameters 
and put them into an array, converts the rest parameters into an array. 
So instead of mentioning all the parameters we will be using on top we jus use ... 
in this way we don't need to worry about how many parameters we are going to use
it can't be use at the beginning */

//____________________________________________

function showName (StName, LsName, ...titles) {
    console.log(`${StName} ${LsName}`); // Julius Caesar
    console.log(titles); // [ 'Consul', 'Imperator' ]
    
    console.log(titles[0]); // Consul
    console.log(titles[1]); // Imperator 
    console.log(titles.length); // 2
    
}
showName("Julius", "Caesar", "Consul", "Imperator");
/* the remain arguments are put into an array and its values can be treated as an array, 
meaning we can apply all the array methods on it */

//______________________________________________

// ARGUMENT VARIABLE

function theName() {
    console.log("arguments variable:", arguments.length);
    console.log(arguments[0]);
    
}
console.log(theName());
console.log(theName("Hello", "World"));
    /*
        2
        arguments variable: 0
        undefined
        undefined
        arguments variable: 1
        Hello
        undefined 
    */

function funcT() {
    let showArg = () => console.log(arguments[0]);
    showArg();
}
console.log(funcT(1)); // 
/* argument variable doesn't work very well with arrow functions, it will get an error somewhere */

// SPREAD OPERATOR

/* for everything else that is not a function we can use spread, but not with numbers, booleans
undefined, works on values that can be iterated */

console.log(Math.max(3,5,7,9)); // 9
/* works on a set of numeric arguments, it doesn't work with the name of an array which 
values are numbers for example > 
let arr = [3,5,7,9]
console.log(Math.max(arr)); // NaN
array is not a number but an object, but it does work if we provide the index value
for example arra[0], arr[1] etc because they are numbers */

let myArr = [3,5,7,9]
console.log(Math.max(...myArr)); // 9

/* to pass an array with Math we use the spread operator ...
it separates every index inside the array and gives its individual numeric value.
Unlike rest parameters, spread can be located at the beginning, middle or end of the arguments */

// spread operator use to combine arrays

let arr1 = [1,2,4,5];
let arr2 = [6,7,8,9];

let merge = [0, ...arr1, ...arr2];
console.log(merge); // [ 0, 1, 2, 4, 5, 6, 7, 8, 9 ]

let spreadString = "Hello";
console.log(...spreadString); // H e l l o  > it spread the word into its individual letters 

//________________________________

function myFunc(param1, param2, ...restParam) {
    console.log([...arguments]); // [ 'please', 'help', 'me', 'I', 'am', 'all', 'alone' ]
    console.log(restParam); // [ 'me', 'I', 'am', 'all', 'alone' ]
}
myFunc("please", "help", "me", "I", "am", "all", "alone"); 

/* in first print we have all parameters, in the second only the rest parameters */