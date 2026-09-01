const arr = [1, 2, 3, 4];
const fruits = ["apple", "banana", "apple", "jackfruit"];

// { apple: 2, banana: 1, jackfruit: 1 }

const ans = arr.reduce((acc, curr) =>{
    return acc + curr;
}, 0);

const ans1 = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
},{})

console.log(ans);
console.log(ans1);
