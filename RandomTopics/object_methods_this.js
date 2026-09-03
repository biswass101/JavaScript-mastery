// let user = {
//     name: "John",
//     age: 30
// };

// user.sayHi = function() {
//     return "Hello Object";
// };

// console.log(user.sayHi());

// Method shorthand
// let user = {
//     name: "John",
//     // 
//     // sayHi() {
//     //     return "Hey John"
//     // },
//     // sayHi() {
//     //     return `Hey, ${user.name}`
//     // },
//     sayHi() {
//         return `Hey, ${this.name}`
//     },
// };

// let admin = user;
// user = null

// console.log(admin.sayHi());

// function testThisKeyword() {
//     a = "Niloy"
//     return this.a
// }

// testThisKeyword.ffa = "Gu"

// console.log(testThisKeyword());
// console.log(testThisKeyword.ffa);


// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//     console.log(this.name);
//     return this.name;
// }

// user.f = sayHi;
// admin.f = sayHi;    

// user.f();
// admin.f();
// admin['f']();

{
    pashami = "Gu"
}

const showName = () => {
    return this.pashami;
}

console.log(showName());
