function secondMatchesAmy(array) {
  if (array[1] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}
console.log(secondMatchesAmy(["luca", "aria"]));
console.log(secondMatchesAmy(["luca", "Amy"]));