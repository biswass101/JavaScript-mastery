const userA = { profile: { social: { instagram: "dev_coder" } } };
const userB = { profile: {} };
const userC = null;

// Expected output:
// getInstagramHandle(userA) -> "dev_coder"
// getInstagramHandle(userB) -> "Not provided"
// getInstagramHandle(userC) -> "Not provided"


const getInstagramHandle = (user) => {
    return user?.profile?.social?.instagram || "Not provided";
}

console.log(getInstagramHandle(userA));
console.log(getInstagramHandle(userB));

console.log(getInstagramHandle(userC));
