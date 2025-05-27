const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false }
];

// Step 1: Filter passed students
const passedStudents = students.filter(student => student.isPassed);

// Step 2: Congratulate each passed student
passedStudents.forEach(student => {
  console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});
