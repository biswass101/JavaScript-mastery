// const id = symbol();
// with the level
// const id = sumbol('userId')



//every sumbol is unique
const a = Symbol();
const b = Symbol();
console.log(a === b); //false

const x = Symbol("id");
const y = Symbol("id");

console.log(x === y) //false