function solve(matrix) {
    let firstDiagonal = 0
    let secDiagonal=  0

    let firstIndex = 0;
    let secondaryIndex = matrix[0].length - 1;

    for(let row = 0; row < matrix.length; row++){
        firstDiagonal += matrix[row][firstIndex];
        secDiagonal += matrix[row][secondaryIndex];

        firstIndex++;
        secondaryIndex--;
    }
    return firstDiagonal + ' ' + secDiagonal;
}
console.log(
  solve([
    [20, 40],
    [10, 60],
  ])
);
// console.log(
//   solve([
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89],
//   ])
// );
