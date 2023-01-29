function solve(arr) {
  let result = [];
  let list = arr.sort((a, b) => {
    return a.localeCompare(b);
  });

  for (let i = 0; i < arr.length; i++) {
    result.push(`${i + 1}.${arr[i]}`);
  }
  return result.join("\n");
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));
