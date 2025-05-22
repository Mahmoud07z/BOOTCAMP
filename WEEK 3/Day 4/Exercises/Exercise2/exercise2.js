const form = document.querySelector("form");
console.log(form);

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log(fnameInput, lnameInput);

const nameInputs = document.getElementsByName("firstname");
const lastNameInputs = document.getElementsByName("lastname");
console.log(nameInputs[0], lastNameInputs[0]);

const ul = document.querySelector(".usersAnswer");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = fnameInput.value.trim();
  const lastName = lnameInput.value.trim();

  if (firstName !== "" && lastName !== "") {
    const li1 = document.createElement("li");
    li1.textContent = firstName;
    const li2 = document.createElement("li");
    li2.textContent = lastName;

    ul.appendChild(li1);
    ul.appendChild(li2);
  }
});
