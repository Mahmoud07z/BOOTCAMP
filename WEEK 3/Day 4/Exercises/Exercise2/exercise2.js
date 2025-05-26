// Retrieve the inputs by their name attribute and console.log them.

const log = console.log;

const form = document.querySelector("form");
log(form);

const input1 = document.getElementById("fname");
log(input1);
const input2 = document.getElementById("lname");
log(input2);
const submitInput = document.getElementById("submit");
log(submitInput);

const firstName = document.getElementsByName("firstname")[0];
const lastName = document.getElementsByName("lastname")[0];
log(firstName);
log(lastName);

form.addEventListener("submit", function(event) {
  event.preventDefault(); // to prevents the page from reloading

  const firstName = input1.value.trim();
  const lastName = input2.value.trim();

  if (firstName === "" || lastName === "") {
    alert("Both fields are required.");
    return;
  }

  const ul = document.querySelector("ul");

  const li1 = document.createElement("li");
  li1.textContent = firstName;

  const li2 = document.createElement("li");
  li2.textContent = lastName;

  ul.appendChild(li1);
  ul.appendChild(li2);
});