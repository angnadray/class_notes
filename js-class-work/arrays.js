let fruits = [];
console.log(typeof fruits);
/* Object */

fruits = [
    "Apple", 
    "Orange", 
    123, 
    true, 
    false, 
    -32432];
console.log(fruits);
console.log(fruits[1]); /* Orange */
console.log(fruits.length); /* 6 */

let arrayTostring = (fruits.toString)();
console.log(arrayTostring); /* Apple,Orange,123,true,false,-32432 */

console.log(typeof arrayTostring);/* string */
console.log(arrayTostring[1]);/* p */

console.log(fruits.sort()); 
/* [ -32432, 123, 'Apple', 'Orange', false, true ] */
console.log(fruits.reverse());
/* [ true, false, 'Orange', 'Apple', 123, -32432 ] */

console.log(fruits[fruits.length -1]);
/* -32432 */

fruits.push("grapes"); /* It will add it at the end */
console.log(fruits);
/* [ true, false, 'Orange', 'Apple', 123, -32432, 'grapes' ] */

/* pop remove the last item */

/* join turns an array into a string */
let nesArrr = fruits.join("!");
console.log(typeof nesArrr);

console.log(fruits[0]); // Apple
// changing values
fruits[0] = "Cherry";
console.log(fruits);
// [ 'cherry', 'orange', 'banana', 'melon' ]

//empty spaces
fruits[6] = "Grapes";
console.log(fruits);
fruits  = (fruits.sort());
console.log(fruits);


/* deleting values */
/* use -1 to get the last index value */
delete fruits[fruits.length -1];
console.log(fruits);

/* shift > removes the first item of an array, the whole array will not have this item anymore,
but it is stored somewhere*/
console.log(fruits.shift()); // cherry
let shiftedItem = fruits.shift();
console.log(shiftedItem); // cherry
console.log(fruits); // [ 'orange', 'banana', 'melon', <3  empty items >]

// unshift > add items in the beginning of the array
let newFruits = fruits.unshift('Lemon', 'Mango');
console.log(newFruits); // 8 - prints the number of items or length of the whole array + the added
console.log(fruits); 
/* [ 'Lemon',
  'Mango',
  'Apple',
  'Cherry',
  'Grapes',
  'Orange',
  <1 empty item> ] */

// splice
fruits.splice(2, 1, 'Peach', 'Guava'); /* 2 is the index or position, for the new added elements
1 is the number of items to be removed after the items we want. Index starts from 0*/ 
console.log(fruits);
/* [ 'Lemon',
  'Mango',
  'Peach',
  'Guava',
  'Cherry',
  'Grapes',
  'Orange',
  <1 empty item> ] */

fruits.splice(0, 2);
console.log(fruits); /* [ 'Peach', 'Guava', 'Cherry', 'Grapes', 'Orange', <1 empty item> ] */

/* add (2,0, '','') - 2 is the index, 0 is the items to be removed and then the values */

/* replace (2,1, 'addedValue') - first index, 1 number of items to be added, 
then value of that 1 new item */

/* remove (2,5) index and then the number of items to be removed, to know how many items we
need to print the length of the array */

// split > 
let neewString = "Digital Career Institute";
console.log(neewString.split(""));
/* [ 'D',
  'i',
  'g',
  'i',
  't',
  'a',
  'l',
  ' ',
  'C',
  'a',
  'r',
  'e',
  'e',
  'r',
  ' ',
  'I',
  'n',
  's',
  't',
  'i',
  't',
  'u',
  't',
  'e' ]
 */

 


