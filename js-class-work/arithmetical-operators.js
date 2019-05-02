let a = 15;
let b = 10;

console.log(a + b); /* 25 */
console.log(a - b); /* 5 */
console.log(b - a); /* -5 */
console.log(a * b); /* 150 */
console.log(a / b); /* 1.5 */
console.log(a % b); /* 5 - divides 10 in 15 and gives the remaining of it, in this case 5 */
console.log((a + b) * 2); /* 50 - a+b=25 * 2 is 50 */

let x = 12;
let y = 2;
console.log(x % y);
/* prints 0 because 2 in 12 is 6 and there is not remaining */

// increment
console.log(++x); /* 13 - value of x + 1 */

// decrement 
console.log(--x); /* 11 or 12 - value of x - 1 
11 if ++x is commented out or 12 if ++x counts too, it takes into account the previous 
increment or decrement */

console.log(x - b + y) /* 4 */

console.log(x = ++a); /* 16 - value of a so 15 + 1 so 16 */

let f = 10;
let g = 20;

f -= g; /* is the short cut for f=f-g */
f += g; /* short cut for f=f+g */
console.log(f); /* -10 */