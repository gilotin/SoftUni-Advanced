function solve(matix) {
  for (let i = 0; i < matix.length - 1; i++) {
    let sumRowOne = matix[i].reduce((acc, el) => acc + el);
    let sumRowTwo = matix[i + 1].reduce((acc, el) => acc + el);
    let sumColOne = 0;
    let sumColTwo = 0;

    for (let col = 0; col < matix.length; col++) {
      sumColOne += matix[col][i];
      sumColTwo += matix[col][i+1];
    }
    if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
      return false;
    }
  } 
  return true;
}
  console.log(
    solve([
      [4, 5, 6],
      [6, 5, 4],
      [5, 5, 5],
    ])
  );
console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
