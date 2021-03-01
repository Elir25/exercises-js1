function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}
for (let i = 0; i < 20; i++) {
  if (isEven(i + 1)) {
  console.log(`the exponential of ${i + 1} is ${exponential(i + 1)}`);
  }
}