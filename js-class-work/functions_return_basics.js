// RETURN statement > outcome of the function

/* return can be explicit > the command is written
or implicit > it is no written but is assumed.
If we only write return; and nothing else after, the result is undefined */

function sum(a, b) {
    let sum = a + b;
    return sum;
} 
let result = sum(10, 10);
console.log("returned", result); // returned 20

/* the example above is another way to use a function and store its return value
into a variable but still being flexible, without it having the limitations 
of function expressions. This way we can call for the function before declaring it,
like in a regular function declaration. */

function checkAge(age) {
    if(age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// no need to call it, it is only checking if the condition exists, to use it in the function below

function letDrive(age) {
    if(checkAge(age)) {
        return console.log("You can drive");
    }
    else {
        return console.log("You can't drive");
    }
}
letDrive(17); // You can't drive
letDrive(27); // You can drive

function doNothing() {
    return;
}
console.log(doNothing() === undefined); // true

/* return without saying what should be returned, returns undefined */
/* return is a statement that ends the function, return means go back.
Console log should be before return or else nothing shows.
Must put ";" after the return statement.
A return can be used for every block of code, a function can have more than
one return as long as they are inside their own block of code. */

// return myFunction(); /* this is how a function is returned */
