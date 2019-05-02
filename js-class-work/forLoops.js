/* for (let i = 0; i <= 3; i++) {
    console.log(i)
} // 0 1 2 3 */

/* for (let i = 1; i < 3; i++) {
    console.log(i)
} // 1 2 */

let i;

for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log("value of i", i); // 0 1 2 3 4 5 - value of i undefined

////////

let sum = 10; 

for (let i = 5; i <= 10; i++) {
    sum = sum + i;
     console.log(`Sum = ${sum}`);
    // console.log(`Value of i: ${i}`);
}
/*  answer of the first console.log
    Sum = 15 > sum 10 + 5 = 15
    Sum = 21 > sum gets updated with the result of the above operation not with the original value 
    of 10 and i gets updated to + 1 too > 15 + 6 = 21
    Sum = 28 > 21 + 7 = 28
    Sum = 36 > 28 + 8 = 36
    Sum = 45 > 36 + 9 = 45
    Sum = 55 > 45 + 10 = 55 */

/*  answer of the second console.log
    Value of i: 5
    Value of i: 6
    Value of i: 7
    Value of i: 8
    Value of i: 9
    Value of i: 10 */

/* if the variable is global or local they behave differently, the purpose of having a loop
is lost if the original value is inside the loop. The best way to do it is declaring the variable
globally meaning outside the loop */


