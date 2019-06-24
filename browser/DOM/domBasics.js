console.log("Hello");

// document.getElementById(id)

document.body.style.backgroundColor = '#D3D3D3'
/* document is the owner of all html elements, it is like that because how the DOM 
specifications are written. Document is a DOM object */

let heading = document.getElementById("heading");
heading.style.color = 'green';

function changeColor(newColor) {
    let paragraph = document.getElementById("para");
    paragraph.style.color = newColor;
}
changeColor('brown');

// document.getElementsByTagName(name)

let h2 = document.getElementsByTagName('h2');
console.log(h2);

/* h2[0].style.color = 'red'; */
/* when we specify the index of which element in the array we want, still need to check how
to do it with a loop */

for (let i=0; i<h2.length; i++) {
    h2[i].style.color = 'red';
}

let p = document.getElementsByTagName('p');

for (let i=0; i<p.length; i++) {
    p[i].style.backgroundColor = 'white';
}

// document.createElement(name)

document.body.onload = addElement;

function addElement() {
    let newP = document.createElement('p');
    let newContent = document.createTextNode("The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. In this guide, we'll briefly introduce the DOM. We'll look at how the DOM represents an HTML or XML document in memory and how you use APIs to create web content and applications."); 
    newP.appendChild(newContent); // used appendChild as well to add the new content from above
    let currentP = document.getElementById('para');
    document.body.insertBefore(newP, currentP);
}

// parentNode.appendChild(node)

let div = document.createElement("div");
document.body.appendChild(div);

// element.innerHTML

