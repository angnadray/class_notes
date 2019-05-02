console.log("Hello World");

/* strings */

let myName = "Angie Rey Romero";
/* let to define a variable, myName is the name of the variable = and "Angie"
is the value of the variable which must be written in quotes*/
console.log(myName[3]);
/* [3] prints the letter/element that is number 3 in the string, starts counting from 0 */
console.log(myName.length);
/* length prints the total number of letters/elements in the string, in this case 16 */
console.log(myName[0], myName[6], myName[10]);

/* numbers */

let currentYear = 2019;
/* when not in quotes it treats the value as a number not a string */
console.log(currentYear);
/* it will print 2019 */
console.log(currentYear[3]);
console.log(currentYear.length);
/* it will print undefined because js does not work like this with numbers only with strings */

let myNumber = 1234e7;
console.log(myNumber);
/* the e is used to declare how many zeros one want after a said number,
in this case after 1234 comes 7 zeros, it prints 12340000000 */

let myNumber1 = 1234e-3;
console.log(myNumber1);
/* the minus after the e puts the decimal dot at the place we declared, in this case is -3,
so it counts 3 numbers to the left, put the dot there and then the rest of the numbers,
it prints 1.234, moving to the left 4 - 3 - 2 then the dot at position -3 and then 1.
If the -value is bigger than the number we have for example e-7 it would add zeros until
reaching 7 positions to the left, like this 0.001234 */

let newNum = 20;
console.log(newNum * Infinity);
/* multiply every number by infinity the result is infinity */

let country = "Germany";
console.log(country / newNum);
/* results in NaN = Not a Number */

let concat = "Hello";
let concat1 = "World";
let concat2 = concat + concat1;
console.log(concat + " " + concat1 + "!" + " " + concat2);
/* concatenation, prints Hello World! HelloWorld. It is just adding values together in one line.
Spaces have an index value too. The + add the next value but without any space in between,
to add space we either use a coma or " ". Don't know if coma is the same thing as just a space */

let num1 = 62;
let num2 = 23;
let num3 = "43";
let num4 = num1 + num2 + num3;
console.log(num4);
/* it will do the addition for the values that are numbers > 62+23=85 
and then without space adds the string value 43. It prints 8543 */

console.log(typeof 245);
/* typeof prints the type of data it is, if it is a number or any other type of data */

// boolean

let isDay = true;
console.log(isDay);
console.log(typeof isDay);
/* has a value of true or false */

console.log(boolean("hello"));