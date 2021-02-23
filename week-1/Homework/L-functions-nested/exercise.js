var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function percentage(fraction, total){
    return fraction / total *100;
    
}
let students = 10;
let mentors = 3;
let mentorsPercent = percentage(mentors, students + mentors);
let studentsPercent = percentage(students, students + mentors);

function createMessage(groupName, value) {
   return `Percentage ${groupName}: ${Math.round(value)}%`;
}

console.log(createMessage(`students`,studentsPercent));
console.log(createMessage(`mentors`, mentorsPercent));