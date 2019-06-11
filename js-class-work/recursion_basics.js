// RECURSION

/* Process that repeats again and again. Function that repeats and call itself over and 
over again until certain conditions are met */

let counter = 10;

while (counter > 0) {
    console.log(counter--);
    
}

/* 
10
9
8
7
6
5
4
3
2
1
*/

let countdown = function (value) {
    if(value > 0) {
        console.log(value);
        return countdown(value - 1)
    } else {
        return value;
    }
};
countdown(10);

/* 
10
9
8
7
6
5
4
3
2
1
*/

let factorial = function (number) {
    if (number <= 0) {
        return 1; // return 0.5 // return 2 
        /* is multiplying the final result for the amount given, doing it by 1 was just to avoid
        having negatives values in this case */
    } else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(5)); // 120 // 60 // 240