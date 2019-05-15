let addition = function(a,b) {
  return a+b;
}
console.log(addition(10,10));//20
​
console.log("......................................arrow func ....................");
​
let addedVal = (a,b) => a+b;
console.log(addedVal(5,5));//10, arrow function code in 1 line
​
console.log(".....................................arrow func .....................");
​
let double = number => number * 2;
console.log(double(25));//50
​
console.log("....................................arrow func ......................");
​
let sayHi = () => console.log("Hello!");
sayHi();//we ll get 'Hello!'
​
console.log("................................ arrow function .................");
​
let age = 17;
let welcome = (age < 18) ? 
(firstName, lastName) => console.log(`Hello ${firstName + lastName}`):
(firstName, lastName) => console.log(`Welcome ${firstName + lastName}`);
​
welcome("Ashenafi", " SHIFERAW");//'hello', 1st & 2nd name ternary on arrow funct'n
​
/* and or */
​
console.log("................... function expression ............................");
​
const age1 = 25;
let welcome1 = (age1 <= 20) ?
function(name) {console.log(`Hello! ${name}`); }:
function(name) {console.log(`Welcome! ${name}`); };
​
welcome1("Melkam");
​
console.log(".................................arrow func .........................");
​
let addIt = (a,b) => {
  let result = a+b;
  return result;
};
console.log(addIt(15,15));//we ll get 30
​
console.log("..................................arrow func ........................");