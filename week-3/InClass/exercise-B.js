let namesClassOne = ["keti", "kiki", "kimberly", "manuel"];
let namesClassTwo = ["simon", "manpreet", "arthur"];
let namesAllClasses = namesClassOne.concat(namesClassTwo);

namesAllClasses.sort()
//console.log(namesAllClasses);

function takesAnameAndReturnString(name, names) {
    if (names.includes(name)) {
        return `${name} is at the class with ${names.join(', ')}`;
    } else {
        return `${name} is not at the class with ${names.join(', ')}`;
    }
}
console.log(takesAnameAndReturnString("enia", namesClassOne));