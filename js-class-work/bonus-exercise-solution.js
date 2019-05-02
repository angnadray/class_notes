const name = " John Smith ";

// trim the white spaces if there is any
const trimmedName = name.trim();

// storing first and last characters
const firstChar = trimmedName[0];
const lastChar = trimmedName[trimmedName.length - 1];

// checking for white space in a variable
const whitespace = trimmedName.match(" ");

// get the length of the trimmed name minus the whitespace
const length = trimmedName.length - whitespace.length;

// store the first three characters of the name
const firstThreeChars = trimmedName.substring(0, 3);

console.log(`Hello ${trimmedName}!
Your name is ${length} characters long.
The first character of your name is ${firstChar} and the last character of your name is ${lastChar}.
If I wanted to be funny, I would call you ${firstThreeChars}shmoo`)
