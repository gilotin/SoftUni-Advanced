function solve(n) {
  let string = "";
  if (n === undefined) {
    n = 5;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += " *";
    }

    string += "\n";
  }

  console.log(string);
}
solve(5);
