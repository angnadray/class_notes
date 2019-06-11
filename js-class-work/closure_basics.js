// CLOSURE

/* is a nested function. All variables in the outer scope can be accessed
in the nested function but not the other way around. The nested function 
don't access the global variables then */

/*  Lexical Scope:
    can be global or local depending on where the variable was declared

    Memory Functions: closure functions remember the variables of the parent function.
*/

let myVar = "I am global";
function outerFunc() {
    let myVar = "Local scope";

    let innerFunc = function() {
        return console.log(myVar);
    }
    return innerFunc;
}
outerFunc()(); // Local scope  >> need to use double ()() for the inner function to also be called

// __________________________________-

function makeAdder(x) {
    function add(y) {
        return y+x;
    }
    return add;
}
let plusOne = makeAdder(1);

let plusTen = makeAdder(10);

console.log(plusOne(3)); // 4
console.log(plusTen(5)); // 15

// ______________________________

function makeTitler(x) {
    function title(y) {
        return `${x} ${y}`
    }
    return title;
}

let mrTitle = makeTitler("Mr.");
let msTitle = makeTitler("Ms.");

console.log(mrTitle("John")); // Mr. John
console.log(msTitle("Lara")); // Ms. Lara

console.log(makeTitler("Dr.")("Jane")); // Dr. Jane
console.log(makeTitler("Prof.")("Mark")); // Prof. Mark