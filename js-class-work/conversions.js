// implicit
console.log('20' + 20); /* with + it treats it as a string */
console.log('20' - 20); /* with other operators it treats both as a numbers */


// explicit
let a = 15;
console.log(Number('15'));
console.log(typeof(String(a))); /* make it into a string type */