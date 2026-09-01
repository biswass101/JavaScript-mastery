const roles = { admin: 1, editor: 2, viewer: 3 };

// Expected output:
// { "1": "admin", "2": "editor", "3": "viewer" }

// for(let [key, val] in roles) {
//     let temVal = val;
//     key = val;
//     val = key;
// }

const invertedObject = Object.entries(roles).reduce

console.log(roles);