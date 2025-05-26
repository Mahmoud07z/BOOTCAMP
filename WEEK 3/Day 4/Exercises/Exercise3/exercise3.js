const allBoldItems = [];


function getBoldItems() {
    const boldItems = document.querySelectorAll("strong");
    allBoldItems.push(...boldItems);
    }

function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = "blue";
    });
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = "black";
    });
}

const p = document.querySelector("p");

getBoldItems()
p.addEventListener("mouseover", () => {
    highlight();
});

p.addEventListener("mouseout", () => {
    returnItemsToDefault();
});

