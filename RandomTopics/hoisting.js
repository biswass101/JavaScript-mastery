//Hoisting means JavaScript moves declarations to the top of their scope before executing the code.

// console.log(a);
// var a = 5;

console.log(b);
let b = 10;


sayHello();

function sayHello() {
    console.log("Hello!");
}