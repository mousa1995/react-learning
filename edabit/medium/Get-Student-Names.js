//https://edabit.com/challenge/ccv2_3ed8e5e9fba18ad766295da2

const getStudentNames = (students) => Object.values(students).sort();

getStudentNames({
  "Student 1": "Steve",
  "Student 2": "Becky",
  "Student 3": "John",
}); // ➞ ["Becky", "John", "Steve"]
