// TYPE OF ERRORS

// syntax error

/* a reserved key word is written wrong */

// runtime error

/* there is no syntax error but it creates an infinite loop */

// semantic errors

/* when there is no error on the terminal but we are not getting the desire result, 
for example using the wrong mathematic operator etc */

// reference error

/* whe variables are not defined for example */

// TRY and CATCH

/* code timed to be executed at a later point will not work with try and catch because
try and catch is synchronized meaning it will be executed at the same time */

// JSON

/* ????? */

// new Error

/* to create our own errors  */

// // syntax error

// // funtion myFunction () {
// //     console.log("Blah!");
    
// // }

// // runtime error

// // function loopp() {
// //     while(true) {
// //         console.log("Hello");
        
// //     }
// // }

// // loopp();


// // semantic errors
// function calcAreaOfRect(w, h) {
//     return w + h;   // area of rectangle is w * h
// }
// let myRectArea = calcAreaOfRect(2, 4);
// console.log(myRectArea);        // 6



// // ReferenceError
// // function myFunc() {
// //     console.log(`Print ${myVar}`);
    
// // }
// // myFunc();

// // type error
// let fruits = true;
// for (let i = 0; i < fruits.length; i++) {
//     const item = fruits[i];
//     console.log(item);   
// }

console.clear();

// try {
//     console.log("Exicute this code");

//     console.log("End try code block");
    
    
// } catch (error) {
//     console.log("Catch is ignored!");
    
// }

// console.log("....then continue with the rest of the script.");

// Exicute this code
// End try code block
// ....then continue with the rest of the script.

// try {
//     console.log("Heya!");
    

//     console.log(`Print: ${Hello}`);

//     console.log("World!");
    
    
// } catch (error) {

//     console.log("Caught the error!");
    
// }

// console.log("Continue with the script!");

// Heya!
// Caught the error!
// Continue with the script!


// ------------------------------
// try {
//     setTimeout(function() {
//         noSuchVariable;
//     }, 1000)
// } catch (error) {
//     console.log("Won't work");
    
// }

// setTimeout(function() {
//     try {
//         noSuchVariable;
//     } catch (error) {
//         console.log("Won't work");
//     }
// }, 1000)

console.clear();

// try {
//     hobbies;
//     name;
//     PaymentAddress;
//     lalala;
// } catch (error) {
//     console.log(`Error has occured!`);
//     console.log(`Error name: ${error.name}`);
//     console.log(`Error message: ${error.message}`);
//     console.log(`Error stack: ${error.stack}`);
//     console.log(error);
    
// }

// console.log("Exicute the rest!");

let jsonString = '{ "age": 30 }';
try {

 let user = JSON.parse(jsonString); // <-- no errors

 if (!user.name) {
   throw new ReferenceError("Incomplete data: no name" + jsonString); 
 }

 console.log( user.name );

} catch(error) {
    console.log( "JSON Error: " + error.message ); // JSON Error: Incomplete data: no name{ "age": 30 }
    console.log( "JSON Error: " + error.name );     // JSON Error: ReferenceError
}

// -----------------

function a() {
    throw new Error("Error from a!")
}

function b() {
    try {
        a();
    } catch (error) {
        throw(error)
    }
}

function c() {
    try {
        b();
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        
    }
}
c();    // Error message: Error from a!