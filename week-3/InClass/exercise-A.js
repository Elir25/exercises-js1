let arrayOfNames = ["katy", "kiki", "simon", "enia"];

arrayOfNames[0] = "someone first";
arrayOfNames[arrayOfNames.length - 1] = "marco";
arrayOfNames.push("someone else");

for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(arrayOfNames[i]);
}
console.log(arrayOfNames.length);

