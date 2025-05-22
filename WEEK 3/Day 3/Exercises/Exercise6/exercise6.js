const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);

const ul = document.querySelector("ul");
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);
