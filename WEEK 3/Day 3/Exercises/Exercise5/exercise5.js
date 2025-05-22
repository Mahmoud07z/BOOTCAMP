const containerDiv = document.getElementById("container");
console.log(containerDiv);

const firstUl = document.querySelectorAll("ul")[0];
firstUl.children[1].textContent = "Richard";

const secondUl = document.querySelectorAll("ul")[1];
secondUl.removeChild(secondUl.children[1]);

const allUls = document.querySelectorAll("ul");
allUls.forEach(ul => {
  ul.children[0].textContent = "Mahmoud";
});

allUls.forEach(ul => {
  ul.classList.add("student_list");
});

firstUl.classList.add("university", "attendance");

containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

const allLis = document.querySelectorAll("li");
allLis.forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

allLis.forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
});

document.body.style.fontSize = "18px";

if (containerDiv.style.backgroundColor === "lightblue") {
  const names = firstUl.querySelectorAll("li");
  const name1 = names[0]?.textContent || "user1";
  const name2 = names[1]?.textContent || "user2";
  alert(`Hello ${name1} and ${name2}`);
}
