let NumberOfStudents = 15;
let NumberOfMentors = 8;
let total = NumberOfMentors + NumberOfStudents;

let percentageOfStudents = (NumberOfStudents / total *100);
let percentageOfMentors = (NumberOfMentors / total *100);

console.log(`percentage of students: ${Math.round(percentageOfStudents)}%`);
console.log(`percentage of mentors: ${Math.round(percentageOfMentors)}%`);

