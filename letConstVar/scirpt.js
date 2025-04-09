//let variable cannot be redeclared
// it's Block socped variable
// must be declared before it used


let x = 10;
// let x = 50; //not possible

var xY = 10;

{
    var xY = 30;
}

console.log(xY);