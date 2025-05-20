const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretName = names
  .map(name => name[0])      // Get the first letter of each name
  .sort()                    // Sort the letters alphabetically
  .join("");                 // Join them into a single string

console.log(secretName);
