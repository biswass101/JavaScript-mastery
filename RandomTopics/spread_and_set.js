const tagsA = ["js", "react", "css"];
const tagsB = ["css", "node", "js", "html"];

// Expected output:
// ["js", "react", "css", "node", "html"]

const uniqueTags = [...new Set([...tagsA, ...tagsB])];

console.log(uniqueTags);