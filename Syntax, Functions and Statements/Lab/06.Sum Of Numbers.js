function solve(str1, str2) {
  let num1 = Number(str1);
  let num2 = Number(str2);
  let result = 0;

  for (let i = num1; i <= num2; i++) {
    result += i;
  }
  console.log(result);
}
solve("-8", "20");
