// Part 1

let people = ["Greg", "Mary", "Devon", "James"];

people.shift("Greg");
console.log(people);

people[3] = "Jason";

people.push("Mahmoud");
console.log(people);

people.indexOf("Mary");
console.log(people.indexOf("Mary"));

peoplecopy = people.slice(1,3);
console.log(peoplecopy);

people.indexOf("Foo");
console.log(people.indexOf("Foo"));
console.log("It returns -1 because Foo is not in the array");

let last = people[people.length - 1];
console.log(last);

// Part 2

for(let i = 0; i < people.length; i++) {
    console.log(people[i])
}

for(let i = 0; i < people.length; i++) {
    console.log(people[i])
    if (people[i] === "Devon") {
        break;
    }
}