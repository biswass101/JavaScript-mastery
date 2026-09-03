let user = {
    // sayHi(x) {
    //     console.log("Here: " + x);
    //     return x;
    // }
};

user = null;
let x = 0;

user.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

console.log(x); // 0, value not incremented