// NESTED LOOPS RECAP

/* let myArray = [6, 5, 4, 3, 2, 1]
let myArray2 = [1, 2, 3, 4, 5, 6];

for(let i = 0; i <= myArray2.length; i++) {
    console.log(myArray2[i]);
    for(let j = 0; j <= myArray.length; j++) {
        console.log(myArray[j]);
    }
} */

let myArray = ["a", "b", "c", "d", "e", "f"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    for(let j = 0; j < myArray.length; j++) {
        console.log(myArray[j]);
    }
    console.log("Hi!");
}
 /* steps for the loop above:
 1. prints the value of myArray at index 0 > a
 2. gets inside the inner loop
 3. runs the inner loop until the condition turns false
 4. executes the last step of the outer loop > prints Hi!
 5. starts again with the outer loop at index 1
 6. goes to inner loop and execute it
 7. prints Hi!
 8. starts again with the outer loop at index 2
 and so on until the condition for the outer loop turns false */

 // daily task loop

 function dreamRobot() {

    let days = 7;
    let tasks = [
    "Clean the floor",
    "Clean the windows",
    "Clear the dinning table",
    "clear the kitchen plattaform",
    [
        "Prepare breakfast",
        "Cook lunch",
        "Cook dinner",
    ],
    "Clean the dishes",
    "Clean the dining table",
    ]
    
    for (let x = 0; x <= days; x++) {
        console.log(`Day: ${x}`);
        for(let i = 0; i < tasks.length; i++) {
            if (i === 4 ) {
                for (let j = 0; j < tasks[4].length; j++) {
                    console.log("sub task:", tasks[4][j]);
                    
                }
            } else {
                    console.log("Daily task:", tasks[i]);
                    
                }
            }
        }
        
    }
    
    dreamRobot();