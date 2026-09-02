// const fruitsCount = {
//     "mango" : 10,
//     "apple" : 2
// }

// console.log("jackfruit" in fruitsCount);
// console.log("mango" in fruitsCount);

// for(let key in fruitsCount) {
//     console.log(key + " -> " + fruitsCount[key]);
// }

// let user = {
//     name: 'Niloy'
// }

// let admin = user;

// admin.name = "Piloy";
// console.log(user);

// Copying any object by iterating ->
// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {};

// for(key in user) {
//     clone[key] = user[key];
// }

// clone.name = "Niloy";
// console.log(clone);

let user = { name: "John" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user, permission1, permission2);

console.log(user);

let clone = Object.assign({}, user);
clone.canView = false;
console.log(user, clone);