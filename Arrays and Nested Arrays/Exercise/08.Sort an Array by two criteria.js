function solve(array) {
  array.sort().sort((a, b) => {
    return a.length - b.length;
  });
  return array.join('\n');
}
console.log(solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
console.log(solve(["alpha", "beta", "gamma"]));
