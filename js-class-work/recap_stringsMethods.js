let myString = "Please locate where locate 'locate' occurs";
console.log(myString.length);

// position

let findPosition = myString.indexOf("locate", 13);
console.log(findPosition); // 20
console.log(myString.indexOf('l')); // 1

let findLastPosition = myString.lastIndexOf('locate', 15);
console.log(findLastPosition); // 7

// search

let searchString = myString.search('where');
console.log(searchString); // 14

// extract parts of a string

let stringFruits = "Apple, Cherry, Kiwi";
let sliceString = stringFruits.slice(7, 13);
console.log(sliceString); // Cherry
console.log(stringFruits); // Apple, Cherry, Kiwi

let subStringString = stringFruits.substring(7, 13); // Cherry > is like slice but it doesn't accept negative values 
console.log(subStringString);
console.log(stringFruits);

let subStrString = stringFruits.substring(7, 5);
console.log(subStrString); //Cherr

// replacing

let stringToBeReplaced = "It is a lovely lovely day";
let replacedString = stringToBeReplaced.replace(/Lovely/ig, "cold")
console.log(replacedString); // It is a cold cold day
console.log(stringToBeReplaced); // It is a lovely lovely day


// convert string into array

let myNewString = "a, b, c, d"
console.log(myNewString.split(" ")); // [a, b, c, d]

let stringToArray = myNewString.split();
console.log(myNewString); // a, b, c, d
console.log(typeof stringToArray); // object














