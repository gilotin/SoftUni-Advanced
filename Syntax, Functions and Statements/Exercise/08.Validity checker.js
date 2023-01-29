function checker(num1, num2, num3, num4) {
  let case1 = distance(num1, num2, 0, 0);
  let case2 = distance(num3, num4, 0, 0);
  let case3 = distance(num1, num2, num3, num4);

  console.log(`{${num1}, ${num2}} to {0, 0} is ${Number.isInteger(case1) ? "valid" : "invalid"}`);
  console.log(`{${num3}, ${num4}} to {0, 0} is ${Number.isInteger(case2) ? "valid" : "invalid"}`);
  console.log(
    `{${num1}, ${num2}} to {${num3}, ${num4}} is ${Number.isInteger(case3) ? "valid" : "invalid"}`
  );

  function distance(x1, y1, x2, y2) {
    let result = Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    return result;
  }
}

checker(3, 0, 0, 4);
console.log(`----`);
checker(2, 1, 1, 1);
