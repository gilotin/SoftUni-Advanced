function solve(arr){
    let halfArr = arr.length/2 
    let result = arr.sort((a,b) => a-b)
    result.splice(0, halfArr)
    return result;
}
console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));