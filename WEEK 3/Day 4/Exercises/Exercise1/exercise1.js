const log = console.log;

const h1 = document.querySelector("h1");

log(h1);

const article = document.querySelector("article");
article.lastElementChild.remove();

const h2 = document.querySelector("h2");

h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");

h3.addEventListener("click", () => {
    h3.style.display = "none";
}
);

const button = document.createElement("button");
button.innerText = "Make paragraphs bold";
document.body.appendChild(button);
const paragraphs = document.querySelectorAll("p");
// log(paragraphs);
button.addEventListener("click", () => {
    paragraphs.forEach((p) => {
        p.style.fontWeight = "bold";
    });
});