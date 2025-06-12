import { people } from "./data.js";

function calculateAverageAge(persons) {
  if (persons.length === 0) {
    console.log("No data available.");
    return;
  }

  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;

  console.log(`The average age is: ${averageAge.toFixed(2)}`);
}

calculateAverageAge(people);