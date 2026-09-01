const inventory = [
  { name: "Laptop", category: "electronics" },
  { name: "Shirt", category: "apparel" },
  { name: "Phone", category: "electronics" },
  { name: "Pants", category: "apparel" }
];

// Expected output:
// {
//   electronics: ["Laptop", "Phone"],
//   apparel: ["Shirt", "Pants"]
// }

const ans = inventory.reduce((acc, {name, category}) => {
    acc[category] = acc[category] || [];
    acc[category].push(name);
    return acc;
}, {});

console.log(ans);