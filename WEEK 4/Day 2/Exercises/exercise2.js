const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Loop through the colors array
colors.forEach((color, index) => {
  const position = index + 1;

  // Use ternary to select the right ordinal suffix
  const suffix =
    position === 1 ? ordinal[1] :
    position === 2 ? ordinal[2] :
    position === 3 ? ordinal[3] :
    ordinal[0]; // "th" for 4th and beyond

  console.log(`${position}${suffix} choice is ${color}.`);
});
