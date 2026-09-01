const user1 = { name: "Alice", address: { city: "New York" } };
const user2 = { name: "Bob", age: 25 };

// Expected output:
// formatUser(user1) -> "Alice (18) from New York"
// formatUser(user2) -> "Bob (25) from Unknown"

const formateUser = (user1) => {
    const { name, age = 18, address: {city = "Unknown"} = {}} = user1;
    return `${name} (${age}) from ${city})`;
}

console.log(formateUser(user1));
console.log(formateUser(user2));
