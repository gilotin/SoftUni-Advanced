function solve(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    if (result.length < k) {
      for (let b = 0; b < result.length; b++) {
        sum += result[b];
      }

      result.push(sum);
    } else {
      result.reverse();
      for (let b = 0; b < k; b++) {
        sum += result[b];
      }
      result.reverse();
      result.push(sum);
    }
  }
  return result;
}
console.log(solve(6, 3));
console.log(solve(8, 2));
