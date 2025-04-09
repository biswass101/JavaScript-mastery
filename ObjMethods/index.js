const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

const result = Object.groupBy(fruits, ({quantity}) => {
    return quantity > 200 ? "ok" : "low";
})

console.log(result);