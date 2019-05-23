// FUNCTIONS

/* 
 Function declaration > syntax

 function myFunction (here goes the parameters) {
  here goes the body of the function
 }

 Function call

 to use a function (it doesn't get used if we don't call for it) we call it by its name  > 
 myFunction (here goes the value of the parameters); 
 */

function printMessage() {
    console.log("Good Morning");
}

printMessage(); // function call

/* the main purpose of functions is:

- avoid duplications
- avoid mistakes
- reusability */

function printMessage2() {
    let myMessage = "Hello World";
    console.log(myMessage);
} 
printMessage2(); // we can call a function before declare it and it works fine

// SCOPE is the limit until where a function would work or not anymore

/* 
- Global > Limited to the file, can be used everywhere inside a file
- Local > start from the opening curly brace and ends at the closing curly brace
*/
let myMessage2 = "Hello Kitty";

function printMessage3() {
    let myMessage2 = "Hello Class Tofu";
    console.log(myMessage2);
} 
printMessage3(); // Hello Class Tofu
console.log(myMessage2); // Hello Kitty

/* if we overwrite a variable inside a local scope without using let, javascript will use 
the overwritten value from them on globally. To limit the change to only inside the scope we declare 
the same variable again inside the local scope using let, like in the example above. 
 */

// FUNCTION PARAMETERS 

function squareRoot(number) {
    let squareRoot = number * number;
    console.log(squareRoot);
}

squareRoot(5); // 25
squareRoot(10); // 100

//__________________________

function squareRoot2(num1, num2) {
    let squareRoot2 = num1 * num2;
    console.log(squareRoot2);
}

squareRoot2(5, 10); // 50
squareRoot2(10, 20); // 200

//___________________________

function newMessage(from, text) {
    let message = `${from}: ${text}`;
    console.log(message);
}

newMessage("John", "Hi! how you doing?"); // John: Hi! how you doing?

// Error handling at small scale

function newMessage2(from, text = "No message available") {
    let message2 = `${from}: ${text}`;
    console.log(message2);
}

newMessage2("John"); // John: No message available > when there is not second parameter

// ____________________________

function calcAge(birthYear) {
 let age = 2019 - birthYear;
 console.log(`Age is ${age}`);
}

calcAge(1997); // Age is 22
calcAge(2001); // Age is 18