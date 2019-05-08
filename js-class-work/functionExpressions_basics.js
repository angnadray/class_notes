// FUNCTION EXPRESSIONS

/* let myFun = function(Exp1, Exp2) {
    functions body goes here
} */ // to stores a function inside a variable, it become an expression and behaves differently

function sayHi() {
    console.log("Hi!"); // Hi!
}

let myFunction = sayHi; // stores the function in a variable, writing function name without the ()

myFunction(); // Hi! > call the function stored in this variable

let square = function (number) {
    let result = number * number;
    console.log(result);
}
square(2); // 4

/* function expressions behave like javaScript statements and are no more block of code,
calling for the function in this case must occur after the function expression is already
declared */

const age = 45;
let welcome = (age <= 18) ?
function() {console.log("Hello!");}:
function() {console.log("Welcome!");};

welcome();

/* the example above is the use of ternary and function combined */

