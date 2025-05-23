const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-button");

let userInputs = {};
let storyTemplates = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields.");
        return;
    }

    userInputs = { noun, adjective, person, verb, place };

    storyTemplates = [
        `${person} went to the ${place} with a ${adjective} ${noun} and decided to ${verb}.`,
        `Once upon a time, a ${adjective} ${noun} helped ${person} to ${verb} in the ${place}.`,
        `In the ${place}, ${person} saw a ${noun} that was too ${adjective} to ${verb}.`,
        `${person} couldn't believe their ${adjective} ${noun} came alive and started to ${verb} at the ${place}.`
    ];

    displayRandomStory();
});

shuffleBtn.addEventListener("click", function () {
    if (Object.keys(userInputs).length === 0) {
        alert("Please submit the form first.");
        return;
    }
    displayRandomStory();
});

function displayRandomStory() {
    const index = Math.floor(Math.random() * storyTemplates.length);
    storySpan.textContent = storyTemplates[index];
}
