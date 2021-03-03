/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

function startsWithT(arr) {
  for (let i = 0 ; i < arr.length ; i = i + 1) {
     let value = arr[i];
     if (value.startsWith("T")) {
        console.log(value);
     }
  } 
  
}


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

startsWithT(daysOfWeek);
