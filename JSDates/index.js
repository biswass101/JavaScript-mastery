// const d = new Date();
// console.log(d);

// const d = new Date("2022-03-25");
// console.log(d);

// const d2 = new Date(2028);
// console.log(d2);
const months = ["January", "February", "March", 
                "April", "May", "June", "July", 
                "August", "September", "October", 
                "November", "December"];
const date = new Date(2025, 4, 9);
// console.log(date.toLocaleDateString());
// console.log(date.getFullYear());
console.log(months[date.getMonth() - 1]);
console.log(date.getDay());