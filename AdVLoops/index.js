const obj = {
    a : 10,
    b : 20,
    c : 30
};

// for(key in obj) console.log(key);

const numbers = [1, 3, 4, 5];
// for(num in numbers) console.log(num);

numbers.forEach((val, idx, arr) => {
    console.log(idx + '->' + val);
    console.log(arr);
})

for(num of numbers) console.log(num);