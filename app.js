// Welcome message with date & time
const now = new Date();
console.log("Welcome! 👋");
console.log("Current date and time:", now);

// How long Node.js has been running
const uptime = process.uptime();
console.log("Node.js uptime (seconds):", uptime);

// Node.js version
console.log("Node.js version:", process.version);