// trim
let str = '    Hello    ';
console.log(str);
/* prints Hello with all the spaces before and after */
console.log(str.trim());
/* prints Hello removing the spaces before and after it not the spaces in between */

// includes
let str1 = 'My name is Inigo Montaya. You killed my father. Prepare to die.';
console.log(str1.includes('Inigo'));
/* prints true, is case sensitive */

// substring
let str2 = 'My name is Inigo Montaya. You killed my father. Prepare to die.';
console.log(str2.substring(2,7));
/* prints name. Counts the string characters starting from number 2 till 7 */
console.log(str2.substring(7,2));
/* prints name. In this case it doesn't matter how we put the numbers, 
it will start counting from the smallest onwards until the higher number, from 2 to 7*/
console.log(str2.substring(str2.length-1));
/* length-1 prints the last character of the string, in this case the dot */

// match
let str3 = 'ang@email.com bla bla bla email@yahoo.email ssss'
let regex = /\S+@email+\.\S+/g;
console.log(str3.match(regex))
/* prints ang@email.com because of the +@email specification in the regex, which could
be @yahoo too and in this case it would print email@yahoo.email */

// tolowercase
let str4 = 'My name is Inigo Montaya. You killed my father. Prepare to die.';
console.log(str4.toLocaleLowerCase());
/* print the string all in lowercase my name is inigo ... etc */

// touppercase
let str5 = 'My name is Inigo Montaya. You killed my father. Prepare to die.';
console.log(str5.toLocaleUpperCase());
/* prints the string all in uppercase MY NAME IS INIGO ... etc */
