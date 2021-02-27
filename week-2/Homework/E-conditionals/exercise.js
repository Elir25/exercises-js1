/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "Mentor";

function danielFunction(name, danielsRole) {
  if (danielsRole === "Mentor") {
   return `Hi, I'm Daniel, I'm a mentor.`;
  } else if (danielsRole === "student") {
    return `Hi, I'm Daniel, I'm a student.`;
  }
}

console.log(danielFunction(name, danielsRole));

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
