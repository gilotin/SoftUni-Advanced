function solve(array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        let bufferedArr = array[i]
        for(let x = 0; x < bufferedArr.length; x++ ){
            result.push(bufferedArr[x]);
        }
    }
    result = result.sort((a,b) => b-a).shift()
    return result;
}
console.log(
  solve([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
console.log(
  solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);
