//notes:

//declaration
/* naming a variable so it comes into existance */

//definition
/* give a value to a variable so it is defined */

//Data Types > Primitive 
/* string */
/* number */
/* boolean */
/* undefined */
/* null > the data type of null is object */

//const
/* const don't allows to declare an undefined variable or to overwrite it */

//undefined
/* undefined is a type of data which have been declared but its value is not
defined yet, the type of data is undefined when printed */

//null
/* is an empty or non-existent value, is type of data object. When assigned a null value
we can later on change for whatever value we need because it has a broad acceptance of data types.
Null must be assigned manually is not automatic like undefined */

//object
let myObject = {
    key: "value",
    key2: 123,
    key3: {
        key31:{
            newObject: "hello",
        }
    },
};
console.log(typeof myObject)
console.log(myObject.key3.key31.newObject);
/* in this case it prints the very last value hello, works like a path to follow */

/* () parenthesis - [] square braces - {} curly braces > what is written inside
curly braces are objects, but this braces are also used for other things too */

// falsy values in JavaScript
/* false */
/* 0 */
/* "" empty string */
/* null */
/* undefined */
/* NaN (not a number) */

