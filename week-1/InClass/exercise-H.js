function ConcatenationStrings(StringA, StringB) {
    const Concatenation = `hello this is ${StringA} and this is ${StringB}`;
    return Concatenation;
}

let value = ConcatenationStrings("String 1", "String 2");

console.log(value);
