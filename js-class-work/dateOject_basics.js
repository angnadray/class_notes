// DATE OBJECT

/* UNIX time > universal time used, starts counting from 1st January 1970  */

// getTime

let myDate = new Date();
console.log(myDate); // 2019-05-14T09:15:09.740Z

let getTime = myDate.getTime();
console.log(getTime); // 1557825468746

// get year

let getYear = myDate.getFullYear();
console.log(getYear); // 2019

// get month

let getMonth = myDate.getMonth();
console.log(getMonth); // 4

let months = ["January", "February", "March", "April", "May", "June", "July"];
let getMonthName = months[myDate.getMonth()];
console.log(getMonthName); // May
/* january is index 0, that is why may in number here is 4 and not 5, same with sunday */

// get date

let getDate = myDate.getDate();
console.log(getDate); // 14

// get hours

let getHours = myDate.getHours();
console.log(getHours); // 11 > doesn't show minutes

// date can be used for time measurement 

let start = new Date();

for(let i = 0; i < 100000; i++) {
    const doSomething = i * i * i;
}
let end = new Date();
console.log(`The loop took ${end - start} ms.`); // 7 ms > goes faster in the second try and so on
