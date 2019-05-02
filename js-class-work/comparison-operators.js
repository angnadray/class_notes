// equal >>> comparison are case sensitive
let firstNumber = 8;
let secondNumber = '8';
console.log(firstNumber == secondNumber); /* to compare the values */
/* prints true because both values are equal 8 and 8 */

console.log(firstNumber === secondNumber); /* to compare the value plus the type of too */
/* prints false because while both values are equal, the type of is not */

let var1 = 'true';
let var2 = 'false';
console.log(typeof var1 === typeof var2);
/* prints true because we are only comparing the type of, which in both cases it is a string */

// not equal
console.log(firstNumber != secondNumber);
/* false because 8 and 8 are the same value, so it is not true that they are not equal */

console.log(firstNumber !== secondNumber);
/* true because while they are  the same value, they are not the same type, so it is true
they are not equal */

console.log(firstNumber > secondNumber);
/* false because they are the same, none is greater than the other */

console.log(firstNumber <= secondNumber);
/* first is less or equal to second - true cause they are equal, the = compares typeof too */

console.log(firstNumber >= secondNumber);
/* first is greater or equal to second - true cause they are equal, the = compares typeof too */
