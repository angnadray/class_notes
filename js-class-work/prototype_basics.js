// Object Oriented Programming ******

// PROTOTYPE

function Vehicle(type, speed) {
    this.type = type;
    this.spped = speed;
}

// default values for the instance
Vehicle.prototype.wheels = 4;
Vehicle.prototype.move = function () {
    return `I am a ${this.type}, moving at a speed of ${this.speed}.`;
}

Vehicle.prototype.stop = function () {
    return `I am a ${this.type}. i have stopped moving.`;  
}

let car = new Vehicle("car", 100);
console.log(car); // Vehicle { type: 'car', spped: 100 }

console.log(car.wheels); // 4
console.log(car.move()); // I am a car, moving at a speed of 80.

// overwriting the default method: move
car.move = function () {
    return "Hello";
}
console.log(car.move());  // Hello 

car.autoPilot = function () {
    return `This ${this.type} is on autopilot mode`
}
console.log(car.autoPilot()); // This car is on autopilot mode

/* Vehicle.stop(); */ // won't work because prototypes only works on the instances not on the class