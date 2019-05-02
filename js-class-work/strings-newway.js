/* let str1 = 'I am a new thing'

console.log(str1) */

let player = {
    name: 'Steve',
    lastName: 'Buschemi'
}

console.log(`My name is ${player.name} ${player.lastName}`)
/* used the `` instead of the regular '' and the dollar sign and curly braces for the variables */
/* prints My name is Steve Buschemi */

console.log(`My name is
${player.name}
${player.lastName}`)
/* prints:
My name is
Steve
Buschemi */

////////////////////////////

let num1 = 5,
    num2 = 4;

console.log(`The result of 5 + 4 is ${num1 + num2}`)
/* prints The result of 5 + 4 is 9 */
/* is prints the same as above but is the new simpler way to write code and is cleaner */