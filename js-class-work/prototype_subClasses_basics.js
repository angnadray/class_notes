// Object Oriented Programming ******

// PROTOTYPE II >>> Subclass 

function Vehicle(type, speed) {
    this.type = type;
    this.speed = speed;
}
Vehicle.prototype.wheels = 4;
Vehicle.prototype.type = "Vehicle"
Vehicle.prototype.move = function () {
    return `I am a ${this.type}, moving at a speed of ${this.speed}.`;
}

Vehicle.prototype.stop = function () {
    return `I am a ${this.type}. i have stopped moving.`;  
}

// To create a sub-class (Car) of class (Vehicle) through Prototype-Based Inheritance
function Car(speed) {
    Vehicle.call(this, "car", speed)
}

// The Car sub-class will inherit the prototypes (default-properties) of class Vehicle
Car.prototype = Object.create(Vehicle.prototype); // like this Car becomes a subclass of Vehicle
Car.prototype.emergencyStop = function () {
    this.abs = true;
    this.stop();
}

let myCar = new Car(10);
console.log(myCar); // Vehicle { type: 'car', speed: 10 }

console.log(myCar.move()); // I am a car, moving at a speed of 10.

myCar.move();
myCar.emergencyStop();