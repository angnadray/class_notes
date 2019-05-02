//logical operators

let firstNumber = 10;
let secondNumber = 20;
let thirdNumber = 20;
let fourthNumber = 20;

console.log(firstNumber > secondNumber) && (firstNumber == secondNumber); /* false */
/* with this && comparison every operation must be true in order for the result to be true */
/* T T  = T */
/* T F  = F */
/* F T  = F */
/* F F  = F */

console.log(firstNumber < secondNumber) || (firstNumber == secondNumber) 
|| (thirdNumber == fourthNumber); /* true */
/* with this || comparison at least one operation must be true in order for the result to be true */
/* T T T = T */
/* T F T = T */
/* F T T = T */
/* F F F = F */

console.log(((firstNumber < secondNumber) && (firstNumber == secondNumber)) 
|| (thirdNumber === fourthNumber)); /* true */
/* the parenthesis are important because they indicate which group we are comparing to another,
in this case we have the && group in double parenthesis compared to the last || group and everything
closes with parenthesis too */