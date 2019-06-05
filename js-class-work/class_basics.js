// Object Oriented Programming ******

// CLASS

class Vehicle {
    constructor(type, speed) {
    this.type = type;
    this.speed = speed;
    }
    move() {
        console.log(`I am a ${this.type}, moving at a speed of ${this.speed}.`);
    }
    stop() {
        console.log(`I am a ${this.type}. I have stopped moving.`);
    }

    static info() {
        console.log(`Vehicle is a base vehicle class.`);
    }
}

console.log(Vehicle); // [Function: Vehicle]

let rustyCar = new Vehicle("Rusty Car", 40);

rustyCar.move(); // I am a Rusty Car, moving at a speed of 40.
rustyCar.stop(); // I am a Rusty Car. I have stopped moving.

console.log("____________");

rustyCar.stop(); // I am a Rusty Car. I have stopped moving.

console.log("____________");

Vehicle.info(); // Vehicle is a base vehicle class.

console.log("____________");

class Car extends Vehicle {
    constructor(speed) {
        super ("car", speed);
        this.abs = false;
    }
    // extends the stop method
    emergencyStop() {
        console.log(`Car-emergencyStop: ${this.type}, ${this.speed}`);
        this.abs = true;
        this.stop();
    }
}

let subCar = new Car(10);
console.log(subCar); // Car { type: 'car', speed: 10, abs: false }

console.log("______________________");

subCar.stop(); // I am a car. I have stopped moving.

console.log("______________________");

subCar.emergencyStop();

/* 
Car-emergencyStop: car, 10
I am a car. I have stopped moving.
*/

class SuperCar extends Car {
    constructor() {
        super(200);
        this.jet = false;
    }

    move() {
        console.log(`SuperCar.move: ${this.type}, ${this.speed}`);
        this.jet = true;
        super.move();
    }
}

let coolCar = new SuperCar();

console.log("______________________");

console.log(coolCar); // SuperCar { type: 'car', speed: 200, abs: false, jet: false }

console.log("______________________");

coolCar.stop(); // I am a car. I have stopped moving.

coolCar.emergencyStop(); 
/* 
Car-emergencyStop: car, 200
I am a car. I have stopped moving.
*/