const players = [
  { name: "Alice", score: 85, active: true },
  { name: "Bob", score: 40, active: true },     // Fails score filter
  { name: "Charlie", score: 92, active: false }, // Fails active filter
  { name: "Diana", score: 65, active: true },
  { name: "Evan", score: 98, active: true }
];

// active and >50;

const filteredPlayers = 
    players
    .filter((player) => player.active && player.score >= 50)
    .sort((a, b)=> a.score - b.score)
    .reverse();

console.log(filteredPlayers);