const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" is in the array
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}
