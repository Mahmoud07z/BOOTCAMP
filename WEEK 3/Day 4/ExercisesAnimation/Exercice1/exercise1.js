setTimeout(function () {
    alert("Hello World");
}, 2000);

setTimeout(function () {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

let count = 0;

const intervalId = setInterval(function () {
    const container = document.getElementById("container");
    if (count >= 5) {
        clearInterval(intervalId);
        return;
    }
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    count++;
}, 2000);

document.getElementById("clear").addEventListener("click", function () {
    clearInterval(intervalId);
});
