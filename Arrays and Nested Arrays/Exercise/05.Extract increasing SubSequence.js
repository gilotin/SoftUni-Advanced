function solve(arr) {
  let result = [];
  let check = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (check <= arr[i]) {
        check = arr[i];
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(solve([1,2,3,4]));
