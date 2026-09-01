const items = [
    "Apple", "Apple", "Jackfruit", 
    "Apple", "Mango", "Jackfruit"
];

const counts = new Map();
// counts.set("Apple", 3);
// counts.set("jk", 2);

// console.log(counts.delete("jk"));

// for(const [key, val] of counts) {
//     console.log(key + "->" + val);
// }

for(const item of items) {
    counts.set(
        item
    )
}