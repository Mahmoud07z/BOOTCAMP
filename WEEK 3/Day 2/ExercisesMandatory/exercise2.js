let colors = ["yellow", "purple", "red", "blue", "green"];

for (let i = 0; i < colors.length; i++) {
    if (colors[i] === "red") {
        console.log("My #3 choice is red");
    }
    if (colors[i] === "blue") {
        console.log("My #4 choice is blue");
    }
    if (colors[i] === "green") {
        console.log("My #5 choice is green");
    }
    if (colors[i] === "yellow") {
        console.log("My #1 choice is yellow");
    }
    if (colors[i] === "purple") {
        console.log("My #2 choice is purple");
    }
}

let suffix = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffix[i]} choice is ${colors[i]}`);
}
// i keep it both questions 2 and 3 didn't just change 2.