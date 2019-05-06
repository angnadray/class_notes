let user = {
    name: "John",
    age: 35,
}
console.log(user.age); // 35

user.add = "NY";
console.log(user); // { name: 'John', age: 35, add: 'NY' }

delete user.age;
console.log(user); // { name: 'John', add: 'NY' }

let user2 = {
    name:"Jane",
    age: 30,
    "like birds": true,
}

user2.age = 40;
console.log(user2); // { name: 'Jane', age: 40, 'like birds': true }

user2["age"] = 50;
console.log(user2); // { name: 'Jane', age: 50, 'like birds': true }

user2["like birds"] = false;
console.log(user2); // { name: 'Jane', age: 50, 'like birds': false }

// COMPUTING THE PROPERTIES OR COMPUTED PROPERTIES

let userAdd = "Address";

let user3 = {
    [userAdd]: "New York",
}
console.log(user3); // { Address: 'New York' }

// the keys can not be changed or written over, to do it we have to change the original variable







