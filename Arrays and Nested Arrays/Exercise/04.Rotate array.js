function solve(array, rotations) {
  let element;

  for (let i = 0; i < rotations; i++) {
    element = array.pop();
    array.unshift(element);
  }
  return array.join(' ');
}
console.log(solve(["1", "2", "3", "4"], 2));

console.log(solve(["Banana", "Orange", "Coconut", "Apple"], 15));
