function solve(array) {
  let result = [];
  let num = 0;

  for (let el of array) {
    if (el === "add") {
      num++;
    } else {
      result.pop();
      num++;
      continue;
    }
    result.push(num);
  }

  if (result.length <= 0) {
    return "Empty";
  } else {
    return result.join("\n");
  }
}
console.log(solve(["remove", "remove", "remove"]));
