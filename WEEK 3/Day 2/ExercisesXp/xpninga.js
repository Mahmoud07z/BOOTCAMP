// exercice 1
let person1 = {
  fullName: "John Doe",
  mass: 75,
  height: 1.8,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

let person2 = {
  fullName: "Jane Smith",
  mass: 68,
  height: 1.65,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();
  if (bmi1 > bmi2) {
    console.log(p1.fullName + " has the higher BMI.");
  } else if (bmi2 > bmi1) {
    console.log(p2.fullName + " has the higher BMI.");
  } else {
    console.log("Both have the same BMI.");
  }
}

compareBMI(person1, person2);
// exercice 2
function findAvg(gradesList) {
  let total = 0;
  for (let i = 0; i < gradesList.length; i++) {
    total += gradesList[i];
  }
  let average = total / gradesList.length;
  checkPass(average);
}

function checkPass(avg) {
  if (avg > 65) {
    console.log("You passed with an average of " + avg);
  } else {
    console.log("You failed with an average of " + avg + ". You must repeat the course.");
  }
}

findAvg([70, 80, 90]);
