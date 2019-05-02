/* Nested For Loops */

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 100; j++) {
        console.log(j);
    }
}


/* the outer loop runs 1 time, then moves to the inner loop and runs it until the condition become 
false, after that it goes back to the outer loop and runs it one more time, then moves back
to the inner loop again and so on until outer loop is finished too */

let n = 3;
let x = 5;

for (let i = 0; i <= n; i++) {
    console.log("outer",i);
    for (let j = 0; j <= x; j++) {
        console.log("inner", j);
    }
}

/* 
outer 0
inner 0
inner 1
inner 2
inner 3
inner 4
inner 5
outer 1
inner 0
inner 1
inner 2
inner 3
inner 4
inner 5
outer 2
inner 0
inner 1
inner 2
inner 3
inner 4
inner 5
outer 3
inner 0
inner 1
inner 2
inner 3
inner 4
inner 5
 */


let m = 3;
let p = 4
let z = 5;

for (let i = 0; i <= m; i++) {
    console.log("outer",i);
    for (let j = 0; j <= p; j++) {
        console.log("first", j);
    }
    for (let j = 0; j <= z; j++) {
        console.log("second", j);
    }
}

// Naqvi exercise

let a=["id", "name", "address", "age"];
console.log("length of a "+a.length);
let data=[

[1,"Naqvi","berlin",34],
[2,"john","berlin",30],
[3,"Peter","Hamburg",39]
]
/* console.log("print John"+ data[4][1]);
console.log("print Mango"+ data[2]);
console.log("length of data "+data.length); */

for (let i=1;i<2;i++){
    for (let j=0;j<data.length;j++){
        console.log( `
        ${a}  
        ${data[j]}`);
    }
}
