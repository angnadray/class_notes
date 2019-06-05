// Object Oriented Programming ******

// New Keyword

/* function car (speed) {
    console.log(`I am a car. I move at a speed of ${speed}`);
    // I am a car. I move at a speed of 80
    
}

car(80); // 

function truck (speed) {
    console.log(`I am a car. I move at a speed of ${speed}`);
    // I am a car. I move at a speed of 100
}

truck(100); //  */

/* there is not need to write 2 or more times the same thing, here there is common elements
like they are all vehicles and has a speed, so we can just re-use the same function for the
different objects */

/* function vehicle (type, speed) {
    console.log(`I am a ${type}. I move at a speed of ${speed}`);
    // I am a car. I move at a speed of 80
    
}

truck("truck", 80); // */ 

/* not a good way to do  it because we still have to hard code */

/* function vehicle2 (type, speed) {
    this.type = type
    this.speed = speed
    console.log(`I am a ${this.type}. I move at a speed of ${this.speed}`);
    // I am a car. I move at a speed of 80
    
}

truck("car", 80); */

/* not the best way to do  it because while not that hard coded nothing is getting stored */

// all examples above are just to explain and show that, they are not the way to do it

// ______________ using new keyword

function vehicle3 (type, speed) {
    this.type = type;
    this.speed = speed;

    this.move = function() {
        console.log(`I am a ${this.type}, moving at a speed of ${this.speed}.`);
        // doesn't print anything
    }
    this.stop =function() {
        console.log(`I am a ${this.type}. I have stopped moving!`);
        // doesn't print anything
    }
    console.log(`I am a ${this.type}. I move at a speed of ${this.speed}.`);
    // I am a car. I move at a speed of 25.
}
vehicle3("car", 25);

let car3 = new vehicle3("car", 80);
console.log(car3);  // I am a car. I move at a speed of 80.
// vehicle3 { type: 'car', speed: 80, move: [Function], stop: [Function] }

console.log(vehicle3); // [Function: vehicle3]

let bus = new vehicle3("bus", 200);
console.log(bus); // 
bus.stop();
/* 
I am a bus. I move at a speed of 200.
vehicle3 { type: 'bus', speed: 200, move: [Function], stop: [Function] }
I am a bus. I have stopped moving!
*/

vehicle3.viper = function() {
    console.log(`The vehicle has a viper`);
    // The vehicle has a viper
}

vehicle3.viper();

let truck = new vehicle3("truck", 200);
console.log(truck);
/* 
I am a truck. I move at a speed of 200.
vehicle3 { type: 'truck', speed: 200, move: [Function], stop: [Function] }

*/

vehicle3.viper();
console.log(vehicle3);
/* 
The vehicle has a viper
{ [Function: vehicle3] viper: [Function] }
*/