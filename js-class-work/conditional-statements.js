// Conditional Statements

/* there is an if statement, a condition and whatever is inside the curly brackets gets
executed, sintax >   if (condition) {} */

let varOne = 10;
let varTwo = 10;
let varThree = 20;

if (varOne >= varTwo) {
    console.log("Bello")
}
/* Bello */

if (varOne < varThree) {
    console.log("HaHa")
}

/* if the condition is true then what is inside the curly brackets gets executed,
if the condition is false nothing is shown */

if (varOne >= varTwo) {
    console.log("Hello");
    (12 > 2) ? console.log("this is true") : console.log("this is false")
}
/////

if (((varOne >= varTwo) && (120 % 2 === 0)) || (varOne * 260 === 2600)) {
    console.log("Hi");
    (12 < 2) ? console.log("body") : console.log("dude")
}

// and if statement inside another if statement

if (((varOne >= varTwo) && (120 % 2 === 0)) || (varOne * 260 === 2600)) {
    console.log("Hi");
    (12 < 2) ? console.log("body") : console.log("dude")

    let varFour = 1;
    if (varFour == true) {
        console.log("long time not seen");
    }
}
/* to print additional info, following the same system we can include another if statement, 
variables and conditions inside the curly brackets */
/* the outer condition must be true to be able to disclose the inner conditions */
/* in the last example 3 values are being printed if the 3 conditions turn out true */

if (5 < 20) {
    console.log("good morning");
    let varFive = 30;
    if (20 < varFive) {
        console.log("sleeping beauty")
    }
}
/* good morning sleeping beauty */
