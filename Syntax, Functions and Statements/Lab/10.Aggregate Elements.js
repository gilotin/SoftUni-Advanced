function solve(array) {
  let sum = array.reduce((total, current) => total + current);
  console.log(sum);
  let sumInverse = 0
  for(let i = 0; i < array.length; i++){
    sumInverse  += 1 / array[i]
  }
  console.log(sumInverse);
  let concat = array.join("");
  console.log(concat);
}
solve([2, 4, 8, 16]);
